const month = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

const d = new Date();
let name = month[d.getMonth()];
document.getElementById("autodate").innerHTML = name;