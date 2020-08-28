/**
 * Created by 贾永龙 on 2020/8/13.
 */
//生成随机字符串
function randomStr(len) {
    len = len || 16;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = $chars.length;
    var str = '';
    for (i = 0; i < len; i++) {
        str += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return str;
}

var uuid = Cookies.get('uuid')      // https://github.com/js-cookie/js-cookie

//生成客户端唯一标识
if(uuid == undefined){
    Cookies.set('uuid',randomStr(16),{ expires: 99, path: '' })
}