const bankLogo = require('./bankLogo.json')

export default function getBankLogoSpell(bankChineseName) {
  const exactLogo = bankLogo.find(({name}) => name.includes(bankChineseName))
  if (exactLogo) {
    return exactLogo
  }
  const likeLogo = bankLogo.find(({name}) => ('中国' + name).includes(bankChineseName))
  return likeLogo
}
