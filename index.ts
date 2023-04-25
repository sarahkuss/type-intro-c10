let age : number = 27
let firstName: string = 'Sarah'
let isTall: boolean = false
let siblingsNames: string[] = ['Kaitlyn', 'Tyler']

// console.log(`${firstName} is ${age} years old`)

if (isTall) {
  // console.log('and so tall')
} else {
  // console.log('and so pretty')
}

for (let i: number = 0; i < siblingsNames.length; i++) {
  // console.log(siblingsNames[i])
}


enum taxForm {
  standardTaxForm = '1040',
  childTaxForm = '641',
  cryptoTaxForm = '420Z'
}

// console.log('the crypto one is: ', taxForm.cryptoTaxForm)

let zipCode: string | number = 33411
zipCode = 'abcde'
// zipCode = null //not allowed 
// console.log(zipCode)

function sum(x: number, y: number) {
  return x+y
}
let total: number = sum(5,6)
console.log(total)