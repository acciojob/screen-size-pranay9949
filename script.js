//your JS code here. If required.
let a=window.innerWidth;
let d=window.innerHeight;
let b=document.createElement("h1");
b.id="sizeInfo";
b.textContent=`Width: ${a} and Height: ${d}`
document.body.appendChild(b);
