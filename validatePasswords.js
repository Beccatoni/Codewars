// https://www.codewars.com/kata/5838719c6754d618240000ff/train/javascript

let storedPassword = []

var signIn = function(newPassword){
    storedPassword.push(newPassword);
    return storedPassword;
}

var logIn = function (password) {
    for (let i = 0; i < storedPassword.length; i++) {
        if (password === storedPassword[i]) {
            return true
        }
        return false
    }
}

