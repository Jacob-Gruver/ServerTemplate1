export const generateCodeName = function (type) {
    var out = ''
    var charChoice =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charLength = charChoice.length
    for (let i = 0; i < 6; i++) {
        out += charChoice.charAt(Math.floor(Math.random() * charLength))
    }
    if (type == 'u') {
        return 'Horizon_' + out
    } else {
        return out
    }

}