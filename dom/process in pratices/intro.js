 const button=document.getElementById("button");
button.addEventListener('click',(e)=>{
     e.preventDefault();
const input=document.getElementById("input").value;
const img=document.getElementById("img");
const p=document.getElementById("p")
if(input==="one"){
    img.src="asset/one.jpg";
    p.textContent="selscted one images"
    img.style.display="block"
}else if (input==="1"){
    img.src="asset/1.jpg";
     p.textContent="selscted 1 images"
      img.style.display="block"
}else if(input==="2"){
    img.src="asset/2.jpg";
     p.textContent="selscted 2 images"
      img.style.display="block"
}else if(input==="3"){
    img.src="asset/3.jpg";
     p.textContent="selscted 3 images"
      img.style.display="block"
}else if(input==="4"){
    img.src="asset/4.jpg";
     p.textContent="selscted 4 images"
      img.style.display="block"
}else if(input==="5"){
    img.src="asset/5.jpg";
     p.textContent="selscted 5 images"
     img.style.display="block"
     
}else if(input==="6"){
    img.src="asset/6.jpg";
     p.textContent="selscted 6 images"
     img.style.display="block"
}else if(input==="7"){
    img.src="asset/7.jpg";
     p.textContent="selscted 7 images"
     img.style.display="block"
}else if(input==="8"){
    img.src="asset/8.jpg";
     p.textContent="selscted 8 images"
     img.style.display="block"
}else if(input==="9"){
    img.src="asset/9.jpg";
     p.textContent="selscted 9 images"
     img.style.display="block"
}else if(input==="10"){
    img.src="asset/10.jpg";
     p.textContent="selscted 10 images"
     img.style.display="block"
}else if(input==="ajith"){
    img.src="asset/ajith.jpg";
     p.textContent="selscted ajith images"
     img.style.display="block"
}else if(input==="images"){
    img.src="asset/images.jpg";
     p.textContent="selscted images images"
     img.style.display="block"
}else{
    img.src="";
    prompt()
   
    
}

})