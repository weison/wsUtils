/**
 *
 * @param val 传入字符串类型的数字
 * @param options
 * options.max: 最大值
 * options.min: 最小值
 * options.decimal 保留的位数
 */
function limit(val, options = {}) {
    if((val === undefined || val === null || val === '') && options.min === undefined){
        return ''
    }
    let decimal = options.decimal || 2;
    val = val.replace(eval('/^([0-9]\\d{0,8})(\\.\\d{0,' + decimal + '})?|.*$/g'), "$1$2");
    val = val.replace(/^(0)(\d)/g, "$2");
    if(options.max && options.max - val < 0){
        val = options.max
    }
    if(options.min && options.min - val > 0){
        val = options.min
    }
    return val;
}
module.exports = limit;
