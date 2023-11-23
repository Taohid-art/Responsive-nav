const menu = document.querySelector(".menu");
const ul = document.querySelector("ul");
let show = 0;
menu.addEventListener("click",()=>{
   
   if (show===0){
   ul.style.display="block"
   ul.setAttribute('data-visible',"true")
   show++
   }
   else {
   ul.style.display="none"  ;
   ul.setAttribute('data-visible',"false")
   show--
   }
})
