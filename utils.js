const pass = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    "A","B","C","Ç","D","E","F","G","Ğ","H","I","İ","J","K","L","M","N","O","Ö",
    "P","R","S","Ş","T","U","Ü","V","Y","Z","X","Q",
    "a","b","c","ç","d","e","f","g","ğ","h","ı","i","j","k","l","m","n","o","ö",
    "p","r","s","ş","t","u","ü","v","y","z","x","q",
    "!",".","-","_","@","*","#","$"
  ];
  
  function getRandomNumber() {
    return Math.floor(Math.random() * pass.length);
  }
  
  export function randompass() {
    let rndpass = "";
    for (let i = 0; i < 10; i++) {
      rndpass += pass[getRandomNumber()];
    }
    return rndpass;
  }