let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? 'org normal V'
        : ((user.level >= 3) && (user.level <= 6)) ? 'orang normal IV'
            : ((user.level >= 6) && (user.level <= 9)) ? 'orang normal III'
                : ((user.level >= 9) && (user.level <= 12)) ? 'orang agak normal II'
                    : ((user.level >= 12) && (user.level <= 15)) ? 'gak normal I'
                        : ((user.level >= 15) && (user.level <= 18)) ? 'Orang Nolep V'
                            : ((user.level >= 18) && (user.level <= 21)) ? ' Orang NolepIV'
                                : ((user.level >= 21) && (user.level <= 24)) ? 'Orang Nolep III'
                                    : ((user.level >= 24) && (user.level <= 27)) ? 'Orang Nolep Agak wibu II'
                                        : ((user.level >= 27) && (user.level <= 30)) ? 'Nolep dan Wibu I'
                                            : ((user.level >= 30) && (user.level <= 33)) ? 'Wibu V'
                                                : ((user.level >= 33) && (user.level <= 36)) ? 'Wibu IV'
                                                    : ((user.level >= 36) && (user.level <= 39)) ? 'Wibu III'
                                                        : ((user.level >= 39) && (user.level <= 42)) ? 'Wibu agak sagne sm kartun II'
                                                            : ((user.level >= 42) && (user.level <= 45)) ? 'wibu dan sagne sm kartun I'
                                                                : ((user.level >= 45) && (user.level <= 48)) ? 'Wibu elite V'
                                                                    : ((user.level >= 48) && (user.level <= 51)) ? 'Wibu elite IV'
                                                                        : ((user.level >= 51) && (user.level <= 54)) ? 'Wibu elite III'
                                                                            : ((user.level >= 54) && (user.level <= 57)) ? 'Wibu elite pcr 2d II'
                                                                                : ((user.level >= 57) && (user.level <= 60)) ? 'Wbu sagne ama 2d I'
                                                                                    : ((user.level >= 60) && (user.level <= 63)) ? 'Om pedo V'
                                                                                        : ((user.level >= 63) && (user.level <= 66)) ? 'Om pedo IV'
                                                                                            : ((user.level >= 66) && (user.level <= 69)) ? 'Om pedo III'
                                                                                                : ((user.level >= 69) && (user.level <= 71)) ? 'Om pedo II'
                                                                                                    : ((user.level >= 71) && (user.level <= 74)) ? 'Pecinta loli 2d I'
                                                                                                        : ((user.level >= 74) && (user.level <= 77)) ? 'kaum tiktok V'
                                                                                                            : ((user.level >= 77) && (user.level <= 80)) ? 'kaum tiktok IV'
                                                                                                                : ((user.level >= 80) && (user.level <= 83)) ? 'kaun tiktok III'
                                                                                                                    : ((user.level >= 83) && (user.level <= 86)) ? 'kaum tiktok II'
                                                                                                                        : ((user.level >= 86) && (user.level <= 89)) ? 'anak tiktod dan tolol I'
                                                                                                                            : ((user.level >= 89) && (user.level <= 91)) ? 'orang stress V'
                                                                                                                                : ((user.level >= 91) && (user.level <= 94)) ? 'org stress IV'
                                                                                                                                    : ((user.level >= 94) && (user.level <= 97)) ? 'Mythic III'
                                                                                                                                        : ((user.level >= 97) && (user.level <= 100)) ? 'Mythic II'
                                                                                                                                           : ((user.level >= 100) && (user.level <= 105)) ? 'Mythic I'      
                                                                                                                                              : ((user.level >= 105) && (user.level <= 120)) ? 'Mythical glory'
                                                                                                                                                 : ((user.level >= 120) && (user.level <= 150)) ? 'Majin'
                                                                                                                                                    : ((user.level >= 150) && (user.level <= 160)) ? 'Demon lord seed'
                                                                                                                                                        : ((user.level >= 160) && (user.level <= 170)) ? 'Demon lord'
                                                                                                                                                            : ((user.level >= 170) && (user.level <= 185)) ? 'True demon lord'
                                                                                                                                                                : ((user.level >= 185) && (user.level <= 200)) ? 'Octagram'
                                                                                                                                                                    : ((user.level >= 200) && (user.level <= 400)) ? 'Older demon lord'
                                                                                                                                                                        : ((user.level >= 405) && (user.level <= 700)) ? 'Great demon lord'
                                                                                                                                                                            : ((user.level >= 700) && (user.level <= 1000)) ? 'Strongest demon lord'
                                                                                                                                                                                : 'Star king dragon'


    user.role = role
    return true
}

module.exports = handler
