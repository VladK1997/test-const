(function () {
    let btn = document.getElementById('backToTop');
    if(btn){
        let elScrollTo = document.getElementById(btn.href.match(/[a-zA-Z0-9]*$/)[0]);
        window.addEventListener('scroll',function (e) {
            console.log(window.pageYOffset ,elScrollTo.offsetTop);
            if(window.pageYOffset > elScrollTo.offsetTop + window.innerHeight/2){
                btn.classList.add('active');
            }else{
                btn.classList.remove('active');
            }
        })
    }
})();