const assert = require('assert');

const limit = require('../src/ipt/limit');

describe('limit.js', () => {
    // 我想测试 parseQueryString.js 的 parseQueryString 方法
    describe('limit', () => {
        // it(`limit => ('') => ''`,
        //     function () {
        //         assert.deepEqual(limit(),'')}
        // );
        it(`limit => ('12345abc,{ max: 999,min: 200}') => '测试最大值：999'`,
            function () {
                let val = '12345abc';
                let options = {
                    max: 999,
                    min: 200
                }
                assert.deepEqual(limit(val,options),'999')}
        );
        it(`limit => ('1,{ max: 999,min: 200}') => '测试最少值：200'`,
            function () {
                let val = '1';
                let options = {
                    min: 200
                }
                assert.deepEqual(limit(val,options),'200')}
        );
        it(`limit => (''',{ max: 999,min: 200}') => '测试空值：'''`,
            function () {
                let val = '';
                assert.deepEqual(limit(),'')}
        );
        it(`limit => ('1.23456') => '测试默认保留小数：1.23'`,
            function () {
                let val = '1.23';
                assert.deepEqual(limit(val),'1.23')}
        );
        it(`limit => ('1.23456',{decimal: 3}) => '测试保留小数：1.234'`,
            function () {
                let val = '1.23456';
                let options = {decimal: 3};
                assert.deepEqual(limit(val,options),'1.234')}
        );
    });
});
