const bankLogo = require('./bankLogo.json')

export default function getBankLogoSpell(bankChineseName) {
  return bankLogo.find(({name}) => name === bankChineseName)
}
