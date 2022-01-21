export const generateCodeName = function () {
    var out = ''
    var charChoice =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`/'
    var charLength = charChoice.length
    for (let i = 0; i < 6; i++) {
        out += charChoice.charAt(Math.floor(Math.random() * charLength))
    }
    return out

}