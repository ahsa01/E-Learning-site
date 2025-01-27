//change navbar styles on scrolling
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY >100)
    //have it when we scroll 100 pixels down
    // selects the only nav bar in the page and toggles the class called windo-scroll

})

const faqs=document.querySelectorAll('.faq');
//selecting all with class faq

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        //change icon
        const icon=faq.querySelector('.faq_icon i');
        if(icon.className==='fa-solid fa-angle-down'){
            icon.className="fa-solid fa-angle-up"
        }
        else{
            icon.className="fa-solid fa-angle-down"
        }
    })
})

