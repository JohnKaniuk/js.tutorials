let name = 'John Kaniuk'

//length property
console.log(name.length)

// convert to upper case
console.log(name.toUpperCase())

// convert to lower case
console.log(name.toLowerCase())

// includes method
let password = 'abc123password098'
console.log(password.includes('password'))
// trim method (allows to remove white space from string)
console.log(name.trim())

//challenge area
//isValidPassword
 let isValidPassword = function(pass){
    password.includes('password')
           if (pass.length >= 8)
            return 'true'
            else if (pass.length <8){
              return 'false'
     }
    }
 
 let isValidPassword = function(password){
     if (password.length >= 8 && !password.includes('password')){
         return true
         }else {
             return false
         }
     }
console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123^$*#^'))
console.log(isValidPassword('asdfhsdfhbsdfhbpassword'))
