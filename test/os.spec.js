
const { isMacOS } = require('../dependency/util')

describe('os test', () => {
    test('Is macOS system', () => {
        expect(isMacOS()).toBeTruthy()
    });
});


