/**
 * project: OLZ
 *
 * Frontend developer: Vladyslav Kukhlii
 *
 */

let vWidth = window.innerWidth;
(function() {
    let articles = document.querySelector('.articles');
    let cardsslider = document.querySelectorAll('[data-cardslider]');
    let blogSlider = document.querySelectorAll('[data-blogslider]');
    if(articles) {
        let articlesSlider = new Swiper('.articles', {
            slidesPerView: 3,
            initialSlide: 0,
            spaceBetween: 20,
            loop: true,
            autoplay: true,
            pagination: {
                el: '.articles__pag',
                clickable: true,
            },
            navigation:{
                nextEl: '.articles__slider-next',
                prevEl: '.articles__slider-prev',
            },
            breakpoints: {
                1300: {
                    slidesPerView: 2,

                },
                768: {
                    slidesPerView: 1,
                }
            }
        });
    }
   let promotion = document.querySelector('.promotion');
   if(promotion){
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
   }
   let teamBlockSlider = document.querySelector('.team-block__slider');
   if(vWidth < 577 && teamBlockSlider){
       new Swiper(teamBlockSlider, {
           slidesPerView: 1,
           pagination: {
               el: '.team-block__pag',
               clickable: true,
           },
           autoplay:{
               delay: 4000,
           },
       });
   }
   if(vWidth < 994) {
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
    let itemSlider = new Swiper(".advert-slider", {
        slidesPerView: 1,
        initialSlide: 0,
        autoHeight: true,
        pagination: {
            el: '.advert-slider__pag',
            type: 'fraction',
        },
    });
   let itemPreviewS = document.querySelector(".item-slider-preview__slider")
    if(itemPreviewS){
        var itemPreview = new Swiper(".item-slider-preview__slider", {
            slidesPerView: 4,
            spaceBetween: 4,
            on: {
                click: function (e) {
                    itemSlider.slideTo(this.clickedIndex - 1);
                    if (e.target.hasAttribute('data-del-img')) {
                        deleteImg(this.clickedIndex)
                    }

                }
            },
            breakpoints: {
                980: {
                    slidesPerView: 3
                },
                768: {
                    slidesPerView: 4
                },
                576: {
                    slidesPerView: 3
                },
                444: {
                    slidesPerView: 2
                }

            }
        });
    }
    let filePhoto = document.getElementById("filePhoto");
    if(filePhoto) {
        var photoRead = new FileReader();
        let wrap = filePhoto.parentNode;
        let msg = wrap.querySelector(".msg");
        let SliderPhotoArray

        filePhoto.addEventListener("change", function (e) {
            e.preventDefault();
            SliderPhotoArray = "";
            let fileAllowed = true;
            let files = e.target.files;
            for (let i = 0, l = files.length; i < l; i++) {
                if (files[i].type.match(/image\/[a-zA-Z]*/)) {
                    continue
                } else {
                    fileAllowed = false;
                    msg.innerHTML = "Вы загружаете <strong>" + files[i].type.split('/')[0] + "</strong><br> Загружайте изображение";
                    break
                }
            }
            if (fileAllowed) {
                for (let i = 0, l = files.length; i < l; i++) {
                    setTimeout(function(){
                        photoRead.readAsDataURL(files[i]);
                        photoRead.onload = function(){
                            let img = photoRead.result;
                            SliderPhotoArray += '<div class="swiper-slide">' +
                                '<img src="'+ img +'">' +
                                '<div class="item-slider-preview__del" data-del-img></div>'+
                                '</div>'
                            console.log(photoRead);
                            updateSlider();
                        }
                    },i * 50)

                }

            }
            console.log(wrap);
            setTimeout(function(){
                wrap.style.background = 'none';
            },0)
            files.files = [];
        })
        function updateSlider() {
            itemPreview.wrapperEl.insertAdjacentHTML("beforeEnd", SliderPhotoArray)
            itemSlider.wrapperEl.insertAdjacentHTML("beforeEnd", SliderPhotoArray)
            itemPreview.updateSlides();
            itemSlider.updateSlides();
        }
        function deleteImg(index){
            itemPreview.slides[index].remove();
            itemSlider.slides[index - 1].remove();
            itemPreview.updateSlides();
            itemSlider.updateSlides();
            itemSlider.slideTo(index - 1);
            itemPreview.slideTo(index - 1);
        }
    }
    if(cardsslider.length > 0){
        for(let i = 0, l = cardsslider.length; i < l; i++){
            cardsslider[i].classList.add('swiper-container--'+i);
            cardsslider[i].insertAdjacentHTML('beforeend',"<div class='d-flex flex-center cust-bul cust-bul--secondary swiper-pag--"+i+"'></div>");
            new Swiper('.swiper-container--'+i,{
                slidesPerView: 4,
                spaceBetween: 16,
                loop: true,
                initialSlide: 0,
                pagination: {
                    el: '.swiper-pag--'+i,
                    type: 'bullets',
                },
                breakpoints:{
                    1200:{
                        slidesPerView:3,
                    },
                    900:{
                        slidesPerView:2,
                    },
                    576:{
                        slidesPerView:1,
                    }
                }
            });

        }
    }

    if(blogSlider.length > 0){
        for(let i = 0, l = blogSlider.length; i < l; i++){
            blogSlider[i].classList.add('swiper-container--'+i);
            blogSlider[i].insertAdjacentHTML('beforeend',"<div class='d-flex blog__slider-pag flex-center cust-bul cust-bul--secondary swiper-pag--"+i+"'></div>");
            new Swiper('.swiper-container--'+i,{
                slidesPerView: 1,
                spaceBetween: 16,
                loop: true,
                autoHeight:true,
                initialSlide: 0,
                pagination: {
                    el: '.swiper-pag--'+i,
                    type: 'bullets',
                },
            });
        }
    }
    let packeges = document.querySelector(".packages");
    if(vWidth < 992 && packeges){
        let packegesSlider = new Swiper(packeges, {
            slidesPerView: "auto",
            initialSlide: 1,
            centeredSlides: true,
            navigation:{
                nextEl: '.packages__slider-next',
                prevEl: '.packages__slider-prev',
            },
            pagination: {
                el: '.packages__pag',
                type: 'bullets',
                clickable: true,
            },
        });
    }


    let ourPlansTeamSlider = document.querySelector('.ourPlans__team-slider');
    if(ourPlansTeamSlider){

         new Swiper(ourPlansTeamSlider, {
            slidesPerView: 1,
            initialSlide: 0,
             autoHeight: true,
             spaceBetween: 24,

            autoplay:{
                disableOnInteraction: false,
                delay: 30000,
            },
            pagination: {
                el: '.ourPlans__team-pag',
                clickable: true,
            },
        });
    }

})();
(function(){
    window.addEventListener('click',function(e){
        let target = e.target;
        if(target.hasAttribute('data-info')){
            target.parentNode.classList.toggle('info')
        }
    })
})();
function fileOver(item){
    item.classList.add("active");
}
function fileLeave(item) {
    item.classList.remove("active");
}
(function () {
    let itemsWrapper = document.getElementById("itemsWrap");
    if(itemsWrapper) {
        window.addEventListener("click", function (e) {
            if (e.target.closest("[data-view]") && e.target.closest("[data-view]").hasAttribute("data-view")) {
                let data = e.target.closest("[data-view]").dataset;
                itemsWrapper.classList.remove("property-" + data.viewremove + "-view");
                itemsWrapper.classList.add("property-" + data.view + "-view");
            }
        })

        window.addEventListener("resize", function () {
            if (window.innerWidth <= 768) {
                itemsWrapper.classList.remove("property-list-view");
                itemsWrapper.classList.add("property-grid-view");
            }
        });
    }
})();
(function () {
    let burger = document.getElementById("headerBurger");
    let list = document.getElementById("headerList");
    let currentItem = null;
    if(burger && list){
        burger.addEventListener("click", function () {
            list.classList.toggle("active");
            burger.classList.toggle("active");
        })
    }
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
    let profileTop = document.getElementById("loggedIn");
    if(profileTop){
        let btn = document.querySelector('.profile-top__btn');
        let close = profileTop.querySelector(".profile-top__close");
        if(btn.hasAttribute('data-authopen')){
            btn.removeAttribute('data-authopen');
        }
        if(vWidth < 1201) {
            btn.addEventListener("click", function () {
                profileTop.classList.toggle('active');
            })
            close.addEventListener('click', function (e) {
                if (e.target != profileTop) {
                    profileTop.classList.remove('active');
                }
            })
        }
    }
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
    if(btn && scroll) {
        let smoth = new SmothScroll({
            from: btn,
            to: scroll,
            direction: "down"
        })
    }
    if(toCateg && category){
        let smoth2 = new SmothScroll({
            from:toCateg,
            to: category,
            direction:"up",
            time: 500,
            speed: 150
        });
    }
})();
function cookieSearch(item){
    let array = document.cookie.split(';');
    let retItem;
    array.forEach(function(el){
        if(el.match(item)) retItem = el;
        console.log(array,el,item);
    });
    return retItem.match(/=[a-zA-Z0-9]*/)[0].match(/[a-zA-Z0-9]*$/)[0];
}
(function() {
    let body = document.getElementsByTagName("html")[0];
    let btns = document.querySelectorAll('[data-lightmode]');
    let darkMode;
    if(cookieSearch('darkMode') == 'true'){
        turnOn();
    }
    window.addEventListener("click",function(e){
        if(e.target.hasAttribute("data-lightmode")){
            setTimeout(function () {
                body.classList.add("body-dark");
                setTimeout(function () {
                    body.classList.remove("body-dark");
                }, 500);
                if(!darkMode) {
                    turnOn();
                }else{
                    turnOff();
                }
            },300);
        }
    })
    function turnOn(){
        DarkReader.enable({
            brightness: 100,
            contrast: 90,
            sepia: 10
        });
        btns.forEach(el => el.classList.add('active'));
        body.classList.toggle("body-night");
        document.cookie = "darkMode=true;"
        darkMode=true;
    }
    function turnOff() {
        darkMode=false;
        body.classList.toggle("body-night");
        btns.forEach(el => el.classList.remove('active'));
        document.cookie = "darkMode=false;"
        DarkReader.disable();
    }
})();
(function () {
    const userAgreeText = document.getElementById("userAgreeText");
    let added;
    const lang = document.getElementById("lang-popup");
    const langOpenBtnAttr = "data-langopen";
    const auth = document.getElementById("auth-popup");
    const authOpenBtnAttr = "data-authopen";
    const userAgree = document.getElementById("user-agree");
    const userAgreeOpenBtnAttr = "data-userAgree";
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
        if (e.target.hasAttribute(langOpenBtnAttr) && lang){
            openPopup(lang);
        }
        if (e.target.hasAttribute(authOpenBtnAttr) && auth){
            openPopup(auth);
        }
        if(e.target.hasAttribute(userAgreeOpenBtnAttr) && userAgree){
            e.preventDefault();
            openPopup(userAgree);
            if(!added){
                added="true";
                userAgreeText.innerHTML = userAgrrementText;
            }
        }

    })
    function openPopup(popup){
        popup.classList.add("active");
    }
    if(lang){
        let langPopup = new ClosePopup(lang);
    }
    if(userAgree){
        let userAgreePopup = new ClosePopup(userAgree)
    }
    if(auth) {
        let authPopup = new ClosePopup(auth);
        let authPopupSections = auth.querySelectorAll(".auth-popup__body");
        let swiched = false;
        auth.addEventListener("click", function (e) {
            if (e.target.hasAttribute("data-switch") && !swiched) {
                auth.classList.add("changing");
                setTimeout(function () {
                    for (let i = 0, l = authPopupSections.length; i < l; i++) {
                        authPopupSections[i].classList.toggle("active");
                    }
                }, 300)
                setTimeout(function () {
                    auth.classList.remove("changing");
                }, 500);
            }
        })
    }
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
function auto_grow(element) {
    element.style.height = '5px';
    element.style.height = element.scrollHeight+8+"px";
}
function maxSymbols(item) {
    let wrap = item.parentNode;
    let maxSymbfiled = wrap.querySelector(".maxSymb span");
    let maxLength = item.maxLength;
    maxSymbfiled.innerText = +item.maxLength - item.value.length;
}
function delPhotos(item) {
    event.preventDefault();
    let wrap = item.parentNode;
    let msg = wrap.querySelector(".msg");
    let file = item;
    wrap.classList.remove('loaded');
    wrap.style.backgroundImage = "";
    msg.innerText ="";
    file.files[0] = "";
}
function addPhotos(item) {
    var photoRead = new FileReader();
    let wrap = item.parentNode;
    let msg = wrap.querySelector(".msg");
    let fileAllowed = true;
    let files = item.files;
    if(!files[0]) return
    if (files[0].type.match(/image\/[a-zA-Z]*/)) {
    } else {
        fileAllowed = false;
        msg.innerHTML = "Вы загружаете <strong>" + files[0].type.split('/')[0] + "</strong><br> Загружайте изображение";
    }
    console.log("photo");
    if (fileAllowed) {
        console.log("photo");
        setTimeout(function(){
            photoRead.readAsDataURL(files[0]);
            photoRead.onload = function(){
                let img = photoRead.result;
                wrap.style.backgroundImage = 'url('+ img +')';
                wrap.classList.add("loaded");
            }
        },0)
    }
}
(function () {
    let title = document.getElementById("editTitle");
    if(title){
        auto_grow(editTitle);
    }
})();
(function(){
    let items = document.querySelectorAll("[data-stepItem]");
    window.addEventListener("click",function(e){
        let item = e.target;
        for(let i = items.length, l = 0; i > l; i--){
            console.log(item == items[i]);
            if(item.hasAttribute("data-stepItem") && !item.classList.contains('active')){
                console.log(items[i - 1]);
                if(item == items[i] && items[i-1].classList.contains('active')){
                    item.classList.add("active");
                }

            }
        }

    })
})();
let wrapExfiles = document.getElementById('exFiles');
if(wrapExfiles){
    function addDoc(item){
        let wrap = wrapExfiles;
        let outputHtml = "";

        for(let i = 0,l = item.files.length;i < l; i++){
            let myClass = "";
            if(item.files[i].name.length > 25) {
                myClass = "exFile__item--overflow"
            }
            outputHtml += '<p class="exFile__item '+myClass+'"><i class="icon icon--md">' +
                '<svg><use xlink:href="#doc-icon"></use></svg></i>'+
                '<span title="'+item.files[i].name+'">'+item.files[i].name+'</span>'+
                '<input type="hidden" value="'+item.files[i]+'">'+
                '<span class="exFile__del" onclick="delFile(this)"></span>' +
                '</p>';
        }
        wrap.insertAdjacentHTML("beforeend",outputHtml);
        item.value = null;
        console.log(item.files[0])
    }
}
function delFile(file) {
    file.parentNode.remove();
}
(function(){
    let tel = document.getElementById("showTel");
    let telShowed = false;
    window.addEventListener("click",function (e) {
        console.log(e.target);
        if(e.target.hasAttribute("data-showTel")){
            tel.classList.add('active');
            telShowed = true;
        }else if(telShowed){
            tel.classList.remove('active');
            telShowed = false
        }
    })
})();
(function () {
   let vacancyBtn = document.getElementById('vacancyBtn');
   let vacancyItems = document.getElementById('vacancyItems');
   let opened = false;
   if(vacancyBtn && vacancyItems){
       let items = vacancyItems.querySelectorAll('li');
       vacancyBtn.addEventListener('click',function(){
           if(!opened){
               opened = true;
               vacancyItems.style.maxHeight = 'none';
               let height = vacancyItems.offsetHeight;
               vacancyItems.style.maxHeight = 0;
               vacancyBtn.classList.add('active');
               setTimeout(function () {
                   vacancyItems.style.maxHeight = height+'px';
                   vacancyItems.classList.add('active');
                   setTimeout(function () {
                       vacancyItems.style.maxHeight = 'none';
                   },500);
                   for(let i = 0, l = items.length; i < l; i++){
                       setTimeout(function () {
                           items[i].classList.add('visible');
                       },i*150);
                   }
               },0);
           }
       })
   }
})();
(function () {
    let feedBackForm = document.getElementById('feedBackForm');
    let feedBackBtn = document.getElementById('feedBackBtn');
    let opened = false;
    if(feedBackForm && feedBackBtn){
        feedBackBtn.addEventListener('click',function () {
            if(!opened){
                opened = true;
                feedBackForm.style.maxHeight = 'none';
                let height = feedBackForm.offsetHeight;
                feedBackForm.style.maxHeight = 0;
                setTimeout(function () {
                    feedBackForm.style.maxHeight = height+'px';
                    feedBackForm.classList.add('active');
                    setTimeout(function () {
                        feedBackForm.style.maxHeight = 'none';
                    },1000);
                },0);
            }
        })
    }
})();
function goTo(item) {
    if(event.keyCode === 13){
        let preLink = item.dataset.link;
        let pageNumber = +item.value;
        let maxNumber = +item.dataset.max
        if(pageNumber > maxNumber) pageNumber = maxNumber;
        if(pageNumber < 1) pageNumber = 1;
        window.location.href = preLink + pageNumber;
    }
}
(function () {
    let opened = false;
    let btn;
    window.addEventListener('click', function (e) {
        if(e.target.hasAttribute('data-toggleActive') && !opened){
            e.target.classList.toggle('active');
            btn = e.target;
            opened = true;
        }else if(opened){
            btn.classList.remove('active');
            opened = false;
        }
    })
})();