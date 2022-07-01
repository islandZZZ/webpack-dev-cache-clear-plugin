// const { isMacOS } = require("../dependency/util");

import {isMacOS} from '../dependency/util/index'

describe('os test', () => {
    test('Is macOS system', () => {
        expect(isMacOS()).toBeTruthy()
    });
});


