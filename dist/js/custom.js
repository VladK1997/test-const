(function() {
   let promotionSlider = new Swiper('.promotion', {
       slidesPerView: 1,
       initialSlide: 0,
       autoplay:{
           delay: 3000,
       },
       pagination: {
           el: '.promotion__pag',
           clickable: true,
       },
   });
   if(window.innerWidth < 994) {
       let banner1Swiper = new Swiper(".banner1-swiper", {
           slidesPerView: 1,
           autoHeight: true,
           autoplay: {
               delay: 3000,
           },
           pagination: {
               el: '.banner1__pag',
               clickable: true,
           },
       });
       let banner2Swiper = new Swiper(".banner2-swiper", {
           slidesPerView: 1,
           autoHeight: true,
           autoplay: {
               delay: 3000,
           },
           pagination: {
               el: '.banner2__pag',
               clickable: true,
           },
       })
   }
})();
(function () {
    let itemsWrapper = document.getElementById("itemsWrap");
    window.addEventListener("click", function (e) {
        if(e.target.closest("[data-view]") && e.target.closest("[data-view]").hasAttribute("data-view")){
            let data = e.target.closest("[data-view]").dataset;
            itemsWrapper.classList.remove("property-"+data.viewremove+"-view");
            itemsWrapper.classList.add("property-"+data.view+"-view");
        }
    })

    window.addEventListener("resize",function(){
       if(window.innerWidth <= 768){
           itemsWrapper.classList.remove("property-list-view");
           itemsWrapper.classList.add("property-grid-view");
       }
    });
})();
(function () {
    let burger = document.getElementById("headerBurger");
    let list = document.getElementById("headerList");
    let currentItem = null;
    burger.addEventListener("click", function () {
        list.classList.toggle("active");
        burger.classList.toggle("active");
    })
    window.addEventListener("click",function(e){
        let target = e.target;
        if(target.hasAttribute("data-navAccord")){
            if(target == currentItem){
                target.classList.remove("active");
                currentItem = null;
            }else{
                if(currentItem){
                    currentItem.classList.remove("active");
                }
                target.classList.add("active");
                currentItem = target;
            }

        }
    })
})();
(function(){
    const animationTime = 1000;
    const animationFrameCount = 1;
    let btn = document.getElementById("toOffer");
    let toCateg = document.getElementById("toCateg");
    let category = document.getElementById("category");
    let scroll = document.querySelector("[data-scrolloffer]");
    let SmothScroll = function (array) {
        let self = this;
        if (array.to && array.from) {
            self.elTo = array.to;
            self.elFrom = array.from;
            self.direction = array.direction || "down";
            self.time = array.time || 1000;
            self.speed = array.speed || 20
            self.elFrom.addEventListener("click", function () {
                let startY = window.scrollY;
                let stopY = self.elTo.offsetTop - 140;
                let timer;
                if (self.direction == "down") {
                    timer = (self.time / 10) / (stopY - startY);
                } else if (self.direction == "up") {
                    timer = (self.time / 10) / (startY - stopY);
                }
                let currentPos = startY;
                let interval;
                if (self.direction == "down") {
                    interval = setInterval(function () {
                        if (currentPos >= stopY) {
                            clearInterval(interval)
                            return
                        }
                        window.requestAnimationFrame(function () {
                            currentPos = currentPos + self.speed;
                            window.scrollTo(0, currentPos);
                        });
                    }, timer);
                } else if (self.direction == "up") {
                    interval = setInterval(function () {
                        if (currentPos <= stopY) {
                            clearInterval(interval)
                            return
                        }
                        window.requestAnimationFrame(function () {
                            currentPos = currentPos - self.speed;
                            window.scrollTo(0, currentPos);
                        });
                    },timer);
                }

            })
        }
    }
    let smoth = new SmothScroll({
        from:btn,
        to: scroll,
        direction:"down"
    })
    let smoth2 = new SmothScroll({
        from:toCateg,
        to: category,
        direction:"up",
        time: 500,
        speed: 150
    });
})();

(function() {
    let body = document.getElementsByTagName("html")[0];

    darkMode = false;
    window.addEventListener("click",function(e){
        if(e.target.hasAttribute("data-lightmode")){
            e.target.classList.toggle("active");
            setTimeout(function () {
                body.classList.add("body-dark");
                body.classList.toggle("body-night");
                setTimeout(function () {
                    body.classList.remove("body-dark");
                }, 500);
                if(!darkMode) {
                    DarkReader.enable({
                        brightness: 100,
                        contrast: 90,
                        sepia: 10
                    });
                    darkMode=true;
                }else{
                    darkMode=false;
                    DarkReader.disable();
                }
            },300)
        }
    })
})();
(function () {
    const lang = document.getElementById("lang-popup");
    const langOpenBtnAttr = "data-langopen";

    const auth = document.getElementById("auth-popup");
    const authOpenBtnAttr = "data-authopen";

    let ClosePopup = function (popup) {
        let self = this;
        if(popup){
            self.popup = popup;
            self.popup.addEventListener("click", function(e){
                if(e.target.hasAttribute("data-closepopup")){
                    self.popup.classList.remove("active");
                }
            })
        }
    }
    window.addEventListener("click",function(e){
        if (e.target.hasAttribute(langOpenBtnAttr)){
            openPopup(lang);
        }
        if (e.target.hasAttribute(authOpenBtnAttr)){
            openPopup(auth);
        }

    })
    function openPopup(popup){
        popup.classList.add("active");
    }
    let lanhPopup = new ClosePopup(lang);
    let authPopup = new ClosePopup(auth);
})();
(function(){
    let currentItem = null;
    window.addEventListener("click",function(e){
        target = e.target.parentNode/*(".main-catg-item")*/;
        if(e.target.hasAttribute("data-categ")){
            if(target == currentItem){
                currentItem.classList.remove("active");
                currentItem = null;
            }else{
                if(currentItem){
                    currentItem.classList.remove("active");
                }
                target.classList.toggle("active");
                currentItem = target;
            }
        }else if(currentItem){
            currentItem.classList.remove("active");
        };
    })
})();
(function () {
    let registrForm = document.getElementById("registrForm");
    let formCheckArray =[];// if length of formCheckArray will be equal to all inputs which are included in form form will be sent
    console.log(registrForm);
    const emailReg =/[a-zA-Z0-9]*@[a-zA-Z0-9]*\.[a-zA-Z0-9]*/;
    const telReg = /\+*[0-9]*/
    registrForm.addEventListener("submit", function(e){
        e.preventDefault();
        let inputTextArray = registrForm.querySelectorAll("input[type='text'");
        let inputemail = registrForm.querySelector("input[type='email'");
        let inputeTel = registrForm.querySelector("input[type='tel'");
        let password = registrForm.querySelectorAll("input[type='password'");
        let checkboxArray = registrForm.querySelectorAll("input[type='checkbox'");
        let inputArray = registrForm.querySelectorAll(".cust-input");
        let message = registrForm.querySelectorAll(".cust-input__mesg");
        //clear all msg and remove class from each item
        formCheckArray = [];
        for(let i = 0, l = inputArray.length; i < l; i++){
            inputArray[i].classList.remove("err");
            inputArray[i].classList.remove("suc");
        }
        for(let i = 0, l = message.length; i < l; i++){
            message[i].innerText = "";
        }
        //end of clearing

        //beginin of validation inputs
        //email validation
        if(inputemail.value.match(emailReg) && inputemail.value.match(emailReg).index > -1){
            inputemail.parentNode.classList.add("suc");
            formCheckArray.push = inputemail;
        }else{
            let text = inputemail.parentNode.querySelector(".cust-input__mesg");
            text.innerText = "Вы ввели некорректный E-mail";
            inputemail.parentNode.classList.add("err");
        }
        //end of email validation
        //text fields validation
        for(let i = 0, l = inputTextArray.length; i < l; i++){
            let msgField = inputTextArray[i].parentNode.querySelector(".cust-input__mesg");
            if(inputTextArray[i].value.length == 0){
                inputTextArray[i].parentNode.classList.add("err");
                msgField.innerText= "Заполните поле"
            }else{
                inputTextArray[i].parentNode.classList.add("suc");
                formCheckArray.push(inputTextArray[i]);
            }
        }
        //end text fields validation
        if(inputeTel.value.length > 9 && inputeTel.value.length <= 14 && inputeTel.value.match(telReg)){
            inputeTel.parentNode.classList.add("suc");
            formCheckArray.push(inputeTel);
        }else{
            let msgField = inputeTel.parentNode.querySelector(".cust-input__mesg");
            inputeTel.parentNode.classList.add("err");
            msgField.innerText = "Провепте корректность номера"
        }
        //start validation password
        for(let i = 0, l = password.length; i < l; i++){
            let msgField = password[i].parentNode.querySelector(".cust-input__mesg");
            if(i == 0){
                if(password[i].value.length < 8){
                    //error message from length
                    msgField.innerText = "Минимальное количество символов 8";
                    password[i].parentNode.classList.add("err");
                    break
                }
                if(password[i].value.match(/[%$:'"^&*(!)?\/]/) && password[i].value.match(/%/).index > -1){
                    password[i].parentNode.classList.add("err");
                    msgField.innerText = "Не испрользуйте символы % $ : ' \" ^ & * ( ! ) ? \\/";
                    break
                }
                password[i].parentNode.classList.add("suc");
            }
            if(i == 1 && password[0].value != password[1].value ){
                msgField.innerText = "Пароли не соответствуют";
                password[i].parentNode.classList.add("err");
                break
            }else{
                password[i].parentNode.classList.add("suc");
                formCheckArray.push(password[i]);
            }
        }
        //end of validation  password
        for(let i = 0, l = checkboxArray.length; i < l; i++){
            if (checkboxArray[i].hasAttribute("data-checkrequired")){
                if(checkboxArray[i].checked) {
                    formCheckArray.push(checkboxArray[i])
                }else{
                    checkboxArray[i].parentNode.classList.add("err");
                }
            }else{
                formCheckArray.push(checkboxArray[i]);
            }
        }
        console.log(formCheckArray,formCheckArray.length , inputArray.length);
        if(formCheckArray.length == inputArray.length){
            alert("congratulations");
        }
    })
})();