(function () {
    let links = document.querySelectorAll('[data-scroll]');
    let linksObj = {};
    if(links.length > 0){
        for(let i = 0,l = links.length;i < l; i++){
            let elToName =links[i].href.match(/[a-zA-Z0-9]*$/)[0];
            let elTo = document.getElementById(elToName);
            if(elTo){
                linksObj[elToName] = elTo;
            }
        }
        window.addEventListener("click",function(e){
            if(e.target.hasAttribute("data-scroll")){
                e.preventDefault();
                let target = e.target;
                let elScrollTo = target.href.match(/[a-zA-Z0-9]*$/)[0];
                smoothScroll(linksObj[elScrollTo]);
            }
        })
    }
})();
function smoothScroll(toEl){
    let coordinate = toEl.offsetTop - window.innerHeight;
    if(toEl.offsetTop  > window.pageYOffset){
        window.scrollTo(0, coordinate);
    }else{
        coordinate = toEl.offsetTop+680
        window.scrollTo(0, coordinate);
    }
    for(let i = 0,l = 36;i< l ;i++){
        window.requestAnimationFrame(function () {
            setTimeout(function () {
                if(toEl.offsetTop  > window.pageYOffset){
                    window.scrollTo(0, coordinate + 22*i);
                }else{
                    window.scrollTo(0, coordinate - 20*i);
                }

            },7*i);
        })
    }
}