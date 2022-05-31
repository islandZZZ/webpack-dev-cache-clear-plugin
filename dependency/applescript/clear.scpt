#!/usr/bin/osascript
--This script is to resolve the problem that Chrome can't use the correct hosts after modifying hosts file  because of  Chrome using socket pools.
--This script just simulates the click event on the button of "Flush socket pool"  on chrome://net-internals/#sockets page.
--created by Boreas320 on 2015-3-28

on run argv
set domain to item 1 of argv  -- 记录第一个命令行参数为domain

set oldDelimiters to AppleScript's text item delimiters --记录之前的分割符
set AppleScript's text item delimiters to "," --设置现在的分割符为','
set domains to every text item of domain -- 收集命令行参数中的每个域名并命名为domains数组
set AppleScript's text item delimiters to oldDelimiters -- 恢复之前的分割符

tell application "Google Chrome"
	tell front window
		
		--record current active tab and its index.
		set origTab to active tab
		set origTabIndex to active tab index
		
		--open Chrome sockets page.
		set theTab to make new tab with properties {URL:"chrome://net-internals/#sockets"}
		
		--waiting for loading html document
		set isLoadDone to not loading of theTab
		repeat until isLoadDone
			set isLoadDone to not loading of theTab
		end repeat
		
		delay 0.3

		--flush Chrome sockets
		execute theTab javascript "document.getElementById('sockets-view-flush-button').click()"

		-- clear host cache
		set URL of theTab to "chrome://net-internals/#dns"

		--waiting for loading html document
		set isLoadDone to not loading of theTab
		repeat until isLoadDone
			set isLoadDone to not loading of theTab
		end repeat

		delay 0.3
		
		execute theTab javascript "document.getElementById('dns-view-clear-cache').click()"
		set clickHostDone to not loading of theTab
		repeat until clickHostDone
			set clickHostDone to not loading of theTab
		end repeat
		
		-- clear hsts
		set URL of theTab to "chrome://net-internals/#hsts"

		--waiting for loading html document
		set isLoadDone to not loading of theTab
		repeat until isLoadDone
			set isLoadDone to not loading of theTab
		end repeat
		
		delay 0.3
		
		repeat with _domain in domains

		--flush Chrome sockets
		execute theTab javascript "document.getElementById('domain-security-policy-view-delete-input').value='"& _domain &"';document.getElementById('domain-security-policy-view-delete-submit').click();"

		end repeat
		
		--close Chrome sockets page
		close theTab
		
		--reactive the previous tab
		set active tab index to origTabIndex
		
	end tell
	end tell
end run

