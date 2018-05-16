const bankLogo = require('./bankLogo.json')

function getBankLogoSpell(bankChineseName) {
  return bankLogo.find(({name}) => name === bankChineseName)
}