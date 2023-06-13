window.addEventListener('scroll', reveal);
function reveal(){
    let reveals = document.querySelectorAll('.reveal');
    //let hide = document.querySelectorAll('.scrollText');
    console.log(reveals.length)

    for(var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if(revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
            //hide.classList.add('hiddenScrollText');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}