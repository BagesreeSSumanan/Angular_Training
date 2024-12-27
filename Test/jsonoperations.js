const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch'); 
const user = {
    username: "johndoe",
    preferences: {
      theme: "dark",
      notifications: true
    }
  };
const data = JSON.stringify(user);
localStorage.setItem("JSONData", data);
let JSONData = localStorage.getItem("JSONData");
console.log("JSONData: "+JSONData);
const obj = JSON.parse(data)
delete obj.preferences.theme;
console.log(obj);
obj.preferences.color = "black";
console.log(obj)



