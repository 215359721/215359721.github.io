const Decimal = require('decimal.js-light')

export default Decimal

/**
 * 减法运算
 * @param {string|number} x
 * @param {string|number} y
 * @returns {number}
 */
export const minus = (x, y) => {
  const decimalX = new Decimal(x)
  return decimalX.minus(y).toNumber()
}

/**
 * 数字格式化千分位
 * @param {string|number} number
 */
export const toThousands = (number) => {
  var m = Number(number);
  var moneyData = ''
  var decimalData = ''
  if (!isNaN(m)) {
    if (!m) {
      m = 0.0;
    }
    var p = m.toFixed(2).toString();
    if (p.indexOf('.') > -1) {
      var pps = p.split('.');
      moneyData = pps[0];
      decimalData = pps[1];
    } else {
      moneyData = p;
      decimalData = '00';
    }
    // moneyData = parseInt(moneyData).toLocaleString();
    return moneyData + '.' + decimalData
  }
  return number
}
