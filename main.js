var signUpName = document.getElementById('signUpName')
var signUpEmail = document.getElementById('signUpEmail')
var signUpPassword = document.getElementById('signUpPassword')
var signInEmail = document.getElementById('signInEmail')
var signInPassword = document.getElementById('signInPassword')

var username = localStorage.getItem('userName')
if(username) {
    document.getElementById('username').innerHTML = 'Welcome' + username
}

function isEmpty() {
    if(signUpName.value == '' || signUpEmail.value == '' || signUpPassword == '') {
        return false
    }
    else {
        return true
    }
}

var arr = []
if(localStorage.getItem('user') == null) {
    arr = []
}
else {
    arr = JSON.parse(localStorage.getItem('user'))
}

function isExist() {
    for(var i = 0 ; i < arr.length ; i++) {
        if(arr[i].email.toLowerCase() == signUpEmail.value.toLowerCase()) {
            return false
        }
    }
}

function signUp() {
    if(isEmpty() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }

    var userData = {
        name: signUpName.value,
        email: signUpEmail.value,
        password: signUpPassword.value
    }

    if(arr.length == 0) {
        arr.push(userData)
        localStorage.setItem('user', JSON.stringify(arr))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Sucess</span>'
        return true
    }

    if(isExist() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'
    }
    else {
        arr.push(userData)
        localStorage.setItem('user', JSON.stringify(arr))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Sucess</span>'
    }
}

function isLogin() {
    if(signInEmail.value == '' && signInPassword.value == '') {
        return false
    }
    else {
        return true
    }
}

function login() {
    if(isLogin() == false) {
        document.getElementById('empty').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }

    for(var i = 0 ; i < arr.length ; i++) {
        if(arr[i].email.toLowerCase() == signInEmail.value.toLowerCase() && arr[i].password.toLowerCase() == signInPassword.value.toLowerCase()) {
            localStorage.setItem('user', arr[i].name)
        }
        else {
            document.getElementById('empty').innerHTML = '<span class="text-danger m-3">incorrect email or password</span>'
        }
    }
}

function logout() {
    localStorage.removeItem('user')
}
