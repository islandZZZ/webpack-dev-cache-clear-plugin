const { runTask, domainErrMsg } = require("../dependency/run");

describe('Test runTask', () => {
    test('Invalid domains length', () => {
        return runTask([]).catch(e => {
            expect(e).toBe(1)
        })
    });
});


