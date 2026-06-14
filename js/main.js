gsap.registerPlugin(ScrollTrigger);

const pack = document.getElementById("coffeePack");

window.addEventListener("scroll", () => {

let scroll = window.scrollY;

pack.style.transform =
`translate(-50%, calc(-50% + ${scroll*0.2}px))
rotate(${scroll*0.02}deg)`;

});

gsap.to("#coffeePack",{

x:-250,
y:800,
scale:0.8,

scrollTrigger:{
trigger:".benefits",
start:"top 80%",
end:"top 10%",
scrub:true
}

});

const faqContainer =
document.getElementById("faqContainer");

faqData.forEach(item=>{

faqContainer.innerHTML += `

<div class="faq-item">

<div class="faq-question">
${item.question}
<span>+</span>
</div>

<div class="faq-answer">
${item.answer}
</div>

</div>

`;

});

document
.querySelectorAll(".faq-question")
.forEach(el=>{

el.addEventListener("click",()=>{

el.parentElement.classList.toggle("active");

});

});