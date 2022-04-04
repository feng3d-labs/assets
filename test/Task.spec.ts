import { ok } from 'assert';
import { task } from '../src';

describe('task', () =>
{
    it('series', () =>
    {
        const result: number[] = [];
        const arr = [1, 2, 3, 4, 5];
        const funcs = arr.map((v) =>
            (callback: () => void) =>
            {
                result.push(v);

                setTimeout(() =>
                {
                    callback();
                }, 1000);
            });

        task.series(funcs)(() =>
        {
            ok(JSON.stringify(arr) === JSON.stringify(result));
        });
        ok(true);
    });
});
