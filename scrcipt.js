localStorage.deal = "je suis de la data dans le localStorage";
console.log(localStorage.data);

localStorage.removeItem("data");
localStorage.removeItem("deal");
console.log(localStorage.data);
document.body.textContent = localStorage.deal;

const obj = {
  name: "Denis",
  age: 22,
};

localStorage.user = JSON.stringify(obj);

console.log(JSON.parse(localStorage.user));

// sessionStorage------------------------------------------------

// sessionStorage.dataSettings = "55px";
// console.log(sessionStorage.dataSettings);

sessionStorage.clear();

//cookie --------------------------------------------------------

document.cookie = "username=greg";
