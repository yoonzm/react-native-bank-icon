const bankLogo = require('./bankLogo.json')

export default function getBankLogoSpell(bankChineseName) {
  const replaceName = bankChineseName.replace(/中国/g, '')
  return bankLogo.find(({name}) => name.indexOf(replaceName) !== -1)
}
