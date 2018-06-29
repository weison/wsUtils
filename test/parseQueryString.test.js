const assert = require('assert');

const parseQueryString = require('../src/url/parseQueryString');

describe('parseQueryString.js', () => {
    // 我想测试 parseQueryString.js 的 parseQueryString 方法
    describe('#parseQueryString()', () => {
        it(`parseQueryString => ('https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10') => '{ wd: '百度', rsv_spt: '10'}' `, 
            function () {
                let url = 'https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10'
                assert.deepEqual(parseQueryString(url), {wd: '百度',rsv_spt: '10'}
            )}
        );

        it(`parseQueryString => ('www.baidu.com?a=123&b=%26') => '{}' `,
            function () {
                let url = 'www.baidu.com?a=123&b=%26'
                assert.deepEqual(parseQueryString(url), {
                    a: '123',
                    b: '&'
                })
            }
        );

        it(`parseQueryString => ('www.baidu.com') => '{}' `,
            function () {
                let url = 'www.baidu.com'
                assert.deepEqual(parseQueryString(url), {})
            }
        );

    });
});