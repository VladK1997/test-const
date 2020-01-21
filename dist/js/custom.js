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

    let authPopupSections = auth.querySelectorAll(".auth-popup__body");
    let swiched = false;
    auth.addEventListener("click",function (e) {
            if(e.target.hasAttribute("data-switch") && !swiched){
                auth.classList.add("changing");
                setTimeout(function () {
                    for(let i = 0, l = authPopupSections.length; i < l; i++){
                        authPopupSections[i].classList.toggle("active");
                    }
                },300)
                setTimeout(function(){auth.classList.remove("changing");},500);
            }
    })
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
function generatePassword() {
    var buf = new Uint8Array(800);
    window.crypto.getRandomValues(buf);
    return btoa(String.fromCharCode.apply(null, buf));
}
(function () {
    let registrForm = document.getElementById("registrForm");
    let authForm = document.getElementById("auth-form");
    let regpassword = document.getElementById("regPassword");
    let passGenBtn = document.getElementById("passGen");
    let genPassword;
    let passShow = false;
    const emailReg =/[a-zA-Z0-9]*@[a-zA-Z0-9]*\.[a-zA-Z0-9]*/;
    const telReg = /\+*[0-9]*/
    const InvalidEmail = "Вы ввели некорректный E-mail";
    const InvalidTel = "Провепте корректность номера";
    const EmptyField = "Заполните поле";
    const InvalidPassword = {
        sybolAm: "Минимальное количество символов 8",
        validSymb: "Не испрользуйте символы % $ : ' \" ^ & * ( ! ) ? \\/",
        nonSame: "Пароли не соответствуют"
    }
     let FormValid = function(form) {
        let self = this;
        self.thisForm = form;

        self.passwordArray = self.thisForm.querySelectorAll("input[type='password'");
        self.inputArray = self.thisForm.querySelectorAll("input[data-required]");
        self.message = self.thisForm.querySelectorAll(".cust-input__mesg");
        self.formCheckArray =[];// if length of formCheckArray will be equal to all inputs which are included in form form will be sent
        self.clearAll = function(){
            //clear all msg and remove class from each item
            formCheckArray = [];
            for (let i = 0, l = self.inputArray.length; i < l; i++) {
                let wrap = self.inputArray[i].parentNode;
                wrap.classList.remove("err");
                wrap.classList.remove("suc");
            }
            for (let i = 0, l = self.message.length; i < l; i++) {
                self.message[i].innerText = "";
            }
            //end of clearing
        }
        self.clearItem = function(block){
            let wrap = block.parentNode
            wrap.classList.remove("err");
            wrap.classList.remove("suc");
            console.log(block);
            self.formCheckArray = self.formCheckArray.filter(function (thisItem) {
                return thisItem != block;
            });
            console.log(self.formCheckArray);
        }
        self.checkEmail = function(item){
            //email validation
            self.clearItem(item);
            if (item.value.match(emailReg) && item.value.match(emailReg).index > -1) {
                item.parentNode.classList.add("suc");
                self.formCheckArray.push(item);
            } else {
                let text = item.parentNode.querySelector(".cust-input__mesg");
                text.innerText = InvalidEmail;
                item.parentNode.classList.add("err");
            }
            //end of email validation
        }
        self.checkEmpty = function(item){
            //text fields validation
            self.clearItem(item)
            setTimeout(function () {
                let msgField = item.parentNode.querySelector(".cust-input__mesg");
                if (item.value.length == 0) {
                    item.parentNode.classList.add("err");
                    msgField.innerText = "Заполните поле"
                } else {
                    item.parentNode.classList.add("suc");
                    self.formCheckArray.push(item);
                    console.log(self.formCheckArray);
                }
                //end text fields validation
            },500)
        }
        self.checkTel = function(item){
            self.clearItem(item)
            if (item.value.length > 9 && item.value.length <= 14 && item.value.match(telReg)) {
                item.parentNode.classList.add("suc");
                self.formCheckArray.push(item);
            } else {
                let msgField = item.parentNode.querySelector(".cust-input__mesg");
                item.parentNode.classList.add("err");
                msgField.innerText = InvalidTel
            }
        }
        self.checkPassword = function(item){
            //start validation password
            for (let i = 0, l = self.passwordArray.length; i < l; i++) {
                let msgField = self.passwordArray[i].parentNode.querySelector(".cust-input__mesg");

                if (i == 0 && self.passwordArray[i] == item) {
                    self.clearItem(item)
                    if (self.passwordArray[i].value.length < 8) {
                        //error self.message from length
                        msgField.innerText = InvalidPassword.sybolAm;
                        self.passwordArray[i].parentNode.classList.add("err");
                        break
                    }
                    if (self.passwordArray[i].value.match(/[%$:'"^&*(!)?\/]/) && self.passwordArray[i].value.match(/%/).index > -1) {
                        self.passwordArray[i].parentNode.classList.add("err");
                        msgField.innerText = InvalidPassword.validSymb;
                        break
                    }

                    self.passwordArray[i].parentNode.classList.add("suc");
                    self.formCheckArray.push(item);
                }
                if(i == 1 && self.passwordArray[1] == item) {
                    self.clearItem(item);
                    if ( self.passwordArray[0].value != self.passwordArray[1].value) {
                        msgField.innerText = InvalidPassword.nonSame;
                        self.passwordArray[i].parentNode.classList.add("err");
                        break

                    } else {
                        self.passwordArray[i].parentNode.classList.add("suc");
                        self.formCheckArray.push(item);
                    }
                }
            }
            //end of validation  password
        }
        self.checkCheck = function(item){
            self.clearItem(item);
                if (item.checked && item.hasAttribute("data-required")) {
                    self.formCheckArray.push(item);
                    item.parentNode.classList.add("suc");
                } else if(item.hasAttribute("data-required")){
                    item.parentNode.classList.add("err");
                }

        }
         self.thisForm.addEventListener("click", function (e) {
             if(e.target.hasAttribute("data-check-required")){
                 console.log(e.target);
                 self.checkCheck(e.target);
             }
         })
        self.thisForm.addEventListener("change", function (e) {
            //beginin of validation inputs
            if(e.target.type == 'email')self.checkEmail(e.target);
            if(e.target.type == 'text')self.checkEmpty(e.target);
            if(e.target.type == 'tel')self.checkTel(e.target);
            if(e.target.type == 'password')self.checkPassword(e.target);
            if(e.target.type == 'checkbox')self.checkCheck(e.target);
        });
         self.thisForm.addEventListener("submit", function (e) {
             e.preventDefault();

             let checks = self.thisForm.querySelector("input[type='checkbox']");
             for(let i = 0,l = checks.length; i < l ; i++){
                 self.checkCheck(checks[i])
             }
             for (let i = 0, l = self.inputArray.length; i < l; i++){
                 if(!self.inputArray[i].parentNode.classList.contains("suc")){
                     self.checkEmpty(self.inputArray[i]);
                     self.inputArray[i].parentNode.classList.add('err');
                 }
             }
             console.log(self.formCheckArray, self.inputArray.length);
             if (self.formCheckArray.length == self.inputArray.length) {
                 alert("congratulations");
             }
         })
    }
    if(registrForm){
        new FormValid(registrForm);
    }
    window.addEventListener("click", function (e) {
        if(e.target.hasAttribute("data-showpass")){
            let wrap = e.target.parentNode;
            let input = wrap.querySelector("input");
            e.target.classList.toggle("active");
            if(!passShow){
                input.type = "text";
                passShow = true;
            }else{
                input.type = "password";
                passShow = false;
            }
        }
    })
    if(regpassword && registrForm && passGenBtn){
        let passwordInputs = registrForm.querySelectorAll("input[type='password']");
        regpassword.addEventListener("mouseover",function (e) {
            if(e.target.value == 0){
                regpassword.classList.add("showGen");
            }
            if(!genPassword){
                genPassword = generatePassword().match(/[a-zA-Z0-9\+\.]*/g)[0].slice(0,8);
                passGenBtn.insertAdjacentHTML("beforeend",' <strong>'+genPassword+'</strong>');
            }
        })
        regpassword.addEventListener("mouseout",function (e) {
            regpassword.classList.remove("showGen");
        })
        passGenBtn.addEventListener("click",function () {
            for(let i = 0, l = passwordInputs.length;i < l; i++){
                passwordInputs[i].value = genPassword;
            }
            setTimeout(function () {
                regpassword.classList.remove("showGen");
            },0)

        })
        /*regpassword.addEventListener("blur",function () {
            regpassword.classList.remove("showGen");
        })*/
        regpassword.addEventListener("input",function (e) {
            if(e.target.value.length > 0){
                regpassword.classList.remove("showGen");
            }
            if(e.target.value.length == 0){
                regpassword.classList.add("showGen");
            }
        })

    }
})();