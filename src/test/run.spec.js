import { domainErrMsg } from '../constant';
import { runTask } from '../dependency/run';


describe('Test runTask', () => {
    test('Invalid domains length', () => {
        return runTask([]).catch(e => {
            expect(e).toBe(domainErrMsg)
        })
    });
});


