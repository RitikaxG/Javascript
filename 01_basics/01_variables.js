//  Variables and Constants

// const : value  cannot be changed
const accountId     = 987657
let accountEmail    = "ritikaxg@gmail.com"
var accountPassword = "94rt89"
accountCity         = "Jaipur"
//  If variable is just declared and not initialized then its value is undefined
let accountState;
//  accountId = 2   // not allowed
accountEmail     = "yoo@gmail.com"
accountPassword  = "873789"
accountCity      = "Bengaluru"

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
