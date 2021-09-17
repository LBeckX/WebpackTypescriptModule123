const p = document.body.appendChild(document.createElement('p'));
p.innerText = "Hi I'm async";
document.body.appendChild(p);

console.log(document.body);
