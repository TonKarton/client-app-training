let users = []
getUsers()
function getUsers(){
    let prefix = 'user_' 
    let filteredStorage = Object.keys(localStorage)
  .filter(key => key.startsWith(prefix))
  .map(key => localStorage.getItem(key))
  filteredStorage.forEach(i=>{users.push(JSON.parse(i))})
  console.log(users)
}
function User(a, n, ln, l, p, c, g){
    this.age = a
    this.name = n
    this.lastname = ln
    this.login = l
    this.password = p
    this.city = c
    this.gender = g 
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
function createUser(){
    let userID = makeid(10)
    let userBirthdate = document.getElementById('age').value
    let userAge = getAge(userBirthdate)
    let userName = document.getElementById('name').value
    let userLastname = document.getElementById('lastname').value
    let userLogin = document.getElementById('login').value
    let userPassword = document.getElementById('password').value
    let userCity = document.getElementById('cities').value
    let userGender = document.getElementById('gender').value
    let user = new User(userAge, userName, userLastname, userLogin, userPassword, userCity, userGender)
    console.log(user)
    localStorage.setItem(`user_${userID}`, JSON.stringify(user))
    return user
}