/**
 *
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */
function parseQueryString(url) {
     url = !url ? window.location.href : url;
    // 取得查询字符串并去掉开头的问号
    var qs = (url.indexOf('?') > -1 ? url.substring(url.indexOf('?') + 1) : ''),
        // 保存数据的对象
        args = {},
        // 取得每一项
        items = qs.length ? qs.split('&') : [],
        item = null,
        name = null,
        value = null,
        // 在for中循环使用
        i = 0,
        len = items.length
    // 逐个将每一项添加到args对象中
    for (i = 0; i < len; i++) {
        item = items[i].split('=')
        name = decodeURIComponent(item[0])
        value = decodeURIComponent(item[1])
        if (name.length) {
            args[name] = value
        }
    }
    return args
}

module.exports = parseQueryString