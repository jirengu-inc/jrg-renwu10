/**
 * Created by MBENBEN on 2017/1/3.
 */
function isLegalUserName(userName) {
    var reg=/^\w{3,10}$/;
    return reg.test(userName);
}
//大写字母、小写、数字、下划线最少两种，6-15个字符
function isLegalPwd(password) {
    // 测试长度是都符合
    if(password.length>20||password.length<6)
        return false;
    // 测试是否包含上述四种字符以外的其他字符
    if(/[^\w]/.test(password))
        return false;
    // 测试是否最少两种
    if(/(^[a-z]+$)|(^[A-Z]+$)|(^\d+$)|(^_+$)/g.test(password))
        return false;
    return true;
}