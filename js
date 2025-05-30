conts menuBtn = document.getElemrntById('menuBtn');
conts menuNav = document.getElemrntById('menuNav');

menuBtn.addEventlistener('click' ,() => {
    menuNav.classList.toggle('open');
   
}
 )