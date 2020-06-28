/**
 * project: OLZ
 *
 * Frontend developer: Vladyslav Kukhlii
 *
 */
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
}
var vWidth = window.innerWidth;
console.log(window);
(function () {
    var articles = document.querySelector('.articles');
    var cardsslider = document.querySelectorAll('[data-cardslider]');
    var blogSlider = document.querySelectorAll('[data-blogslider]');

    if (articles) {
        var articlesSlider = new Swiper('.articles', {
            slidesPerView: 3,
            initialSlide: 0,
            spaceBetween: 20,
            loop: true,
            autoplay: true,
            pagination: {
                el: '.articles__pag',
                clickable: true
            },
            navigation: {
                nextEl: '.articles__slider-next',
                prevEl: '.articles__slider-prev'
            },
            breakpoints: {
                1300: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 1
                }
            }
        });
    }

    var promotion = document.querySelector('.promotion');

    if (promotion) {
        var promotionSlider = new Swiper('.promotion', {
            slidesPerView: 1,
            initialSlide: 0,
            autoplay: {
                delay: 3000
            },
            pagination: {
                el: '.promotion__pag',
                clickable: true
            }
        });
    }

    var teamBlockSlider = document.querySelector('.team-block__slider');

    if (vWidth < 577 && teamBlockSlider) {
        new Swiper(teamBlockSlider, {
            slidesPerView: 1,
            pagination: {
                el: '.team-block__pag',
                clickable: true
            },
            autoplay: {
                delay: 4000
            }
        });
    }

    if (vWidth < 994) {
        var banner1Swiper = new Swiper(".banner1-swiper", {
            slidesPerView: 1,
            autoHeight: true,
            autoplay: {
                delay: 3000
            },
            pagination: {
                el: '.banner1__pag',
                clickable: true
            }
        });
        var banner2Swiper = new Swiper(".banner2-swiper", {
            slidesPerView: 1,
            autoHeight: true,
            autoplay: {
                delay: 3000
            },
            pagination: {
                el: '.banner2__pag',
                clickable: true
            }
        });
    }

    var itemSlider = new Swiper(".advert-slider", {
        slidesPerView: 1,
        initialSlide: 0,
        autoHeight: true,
        pagination: {
            el: '.advert-slider__pag',
            type: 'fraction'
        }
    });
    var itemPreviewS = document.querySelector(".item-slider-preview__slider");

    if (itemPreviewS) {
        var itemPreview = new Swiper(".item-slider-preview__slider", {
            slidesPerView: 4,
            spaceBetween: 4,
            on: {
                click: function click(e) {
                    itemSlider.slideTo(this.clickedIndex);
                    console.log(this.clickedIndex);
                    if (e.target.hasAttribute('data-del-img')) {
                        deleteImg(this.clickedIndex);
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

    var filePhoto = document.getElementById("filePhoto");

    if (filePhoto) {
        var updateSlider = function updateSlider() {
            itemPreview.wrapperEl.insertAdjacentHTML("beforeEnd", SliderPhotoArray);
            itemSlider.wrapperEl.insertAdjacentHTML("beforeEnd", SliderPhotoArray);
            itemPreview.updateSlides();
            itemSlider.updateSlides();
        };

        var _deleteImg = function _deleteImg(index) {
            itemPreview.slides[index].remove();
            itemSlider.slides[index - 1].remove();
            itemPreview.updateSlides();
            itemSlider.updateSlides();
            itemSlider.slideTo(index - 1);
            itemPreview.slideTo(index - 1);
        };

        var photoRead = new FileReader();
        var wrap = filePhoto.parentNode;
        var msg = wrap.querySelector(".msg");
        var SliderPhotoArray;
        filePhoto.addEventListener("change", function (e) {
            e.preventDefault();
            SliderPhotoArray = "";
            var fileAllowed = true;
            var files = e.target.files;

            for (var i = 0, l = files.length; i < l; i++) {
                if (files[i].type.match(/image\/[a-zA-Z]*/)) {
                    continue;
                } else {
                    fileAllowed = false;
                    msg.innerHTML = "Вы загружаете <strong>" + files[i].type.split('/')[0] + "</strong><br> Загружайте изображение";
                    break;
                }
            }

            if (fileAllowed) {
                var _loop = function _loop(_i, _l) {
                    setTimeout(function () {
                        photoRead.readAsDataURL(files[_i]);

                        photoRead.onload = function () {
                            var img = photoRead.result;
                            SliderPhotoArray += '<div class="swiper-slide">' + '<img src="' + img + '">' + '<div class="item-slider-preview__del" data-del-img></div>' + '</div>';
                            updateSlider();
                        };
                    }, _i * 50);
                };

                for (var _i = 0, _l = files.length; _i < _l; _i++) {
                    _loop(_i, _l);
                }
            }

            setTimeout(function () {
                wrap.style.background = 'none';
            }, 0);
            files.files = [];
        });
    }

    if (cardsslider.length > 0) {
        for (var i = 0, l = cardsslider.length; i < l; i++) {
            cardsslider[i].classList.add('swiper-container--' + i);
            cardsslider[i].insertAdjacentHTML('beforeend', "<div class='d-flex flex-center cust-bul cust-bul--secondary swiper-pag--" + i + "'></div>");
            new Swiper('.swiper-container--' + i, {
                slidesPerView: 4,
                spaceBetween: 16,
                loop: true,
                initialSlide: 0,
                pagination: {
                    el: '.swiper-pag--' + i,
                    type: 'bullets'
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 3
                    },
                    900: {
                        slidesPerView: 2
                    },
                    576: {
                        slidesPerView: 1
                    }
                }
            });
        }
    }

    if (blogSlider.length > 0) {
        for (var _i2 = 0, _l2 = blogSlider.length; _i2 < _l2; _i2++) {
            blogSlider[_i2].classList.add('swiper-container--' + _i2);

            blogSlider[_i2].insertAdjacentHTML('beforeend', "<div class='d-flex blog__slider-pag flex-center cust-bul cust-bul--secondary swiper-pag--" + _i2 + "'></div>");

            new Swiper('.swiper-container--' + _i2, {
                slidesPerView: 1,
                spaceBetween: 16,
                loop: true,
                autoHeight: true,
                initialSlide: 0,
                pagination: {
                    el: '.swiper-pag--' + _i2,
                    type: 'bullets'
                }
            });
        }
    }

    var packeges = document.querySelector(".packages");

    if (vWidth < 992 && packeges) {
        var packegesSlider = new Swiper(packeges, {
            slidesPerView: "auto",
            initialSlide: 1,
            centeredSlides: true,
            navigation: {
                nextEl: '.packages__slider-next',
                prevEl: '.packages__slider-prev'
            },
            pagination: {
                el: '.packages__pag',
                type: 'bullets',
                clickable: true
            }
        });
    }

    var ourPlansTeamSlider = document.querySelector('.ourPlans__team-slider');

    if (ourPlansTeamSlider) {
        new Swiper(ourPlansTeamSlider, {
            slidesPerView: 1,
            initialSlide: 0,
            autoHeight: true,
            spaceBetween: 24,
            autoplay: {
                disableOnInteraction: false,
                delay: 30000
            },
            pagination: {
                el: '.ourPlans__team-pag',
                clickable: true
            }
        });
    }
})();

(function () {
    window.addEventListener('click', function (e) {
        var target = e.target;

        if (target.hasAttribute('data-info')) {
            target.parentNode.classList.toggle('info');
        }
    });
})();

function fileOver(item) {
    item.classList.add("active");
}

function fileLeave(item) {
    item.classList.remove("active");
}

(function () {
    var itemsWrapper = document.getElementById("itemsWrap");

    if (itemsWrapper) {
        window.addEventListener("click", function (e) {
            if (e.target.closest("[data-view]") && e.target.closest("[data-view]").hasAttribute("data-view")) {
                var data = e.target.closest("[data-view]").dataset;
                itemsWrapper.classList.remove("property-" + data.viewremove + "-view");
                itemsWrapper.classList.add("property-" + data.view + "-view");
            }
        });
        window.addEventListener("resize", function () {
            if (window.innerWidth <= 768) {
                itemsWrapper.classList.remove("property-list-view");
                itemsWrapper.classList.add("property-grid-view");
            }
        });
    }
})();

(function () {
    var burger = document.getElementById("headerBurger");
    var list = document.getElementById("headerList");
    var currentItem = null;

    if (burger && list) {
        burger.addEventListener("click", function () {
            list.classList.toggle("active");
            burger.classList.toggle("active");
        });
    }
    function n(e){
        var target = e.target;
        if (target.hasAttribute("data-navaccord")) {
            if (target == currentItem) {
                target.classList.remove("active");
                currentItem = null;
            } else {
                if (currentItem) {
                    currentItem.classList.remove("active");
                }

                target.classList.add("active");
                currentItem = target;
            }
        }
    }

    if(!isMobile){
        window.addEventListener("click",n);
    }
    else{
        window.addEventListener("touchstart",n);
    }

})();

(function () {
    var profileTop = document.getElementById("loggedIn");

    if (profileTop) {
        var btn = document.querySelector('.profile-top__btn');
        var close = profileTop.querySelector(".profile-top__close");

        if (btn.hasAttribute('data-authopen')) {
            btn.removeAttribute('data-authopen');
        }

        if (vWidth < 1201) {
            btn.addEventListener("click", function () {
                profileTop.classList.toggle('active');
            });
            close.addEventListener('click', function (e) {
                if (e.target != profileTop) {
                    profileTop.classList.remove('active');
                }
            });
        }
    }
})();

(function () {
    var animationTime = 1000;
    var animationFrameCount = 1;
    var btn = document.getElementById("toOffer");
    var toCateg = document.getElementById("toCateg");
    var category = document.getElementById("category");
    var scroll = document.querySelector("[data-scrolloffer]");

    var SmothScroll = function SmothScroll(array) {
        var self = this;

        if (array.to && array.from) {
            self.elTo = array.to;
            self.elFrom = array.from;
            self.direction = array.direction || "down";
            self.time = array.time || 1000;
            self.speed = array.speed || 20;
            self.elFrom.addEventListener("click", function () {
                var startY = window.scrollY;
                var stopY = self.elTo.offsetTop - 140;
                var timer;

                if (self.direction == "down") {
                    timer = self.time / 10 / (stopY - startY);
                } else if (self.direction == "up") {
                    timer = self.time / 10 / (startY - stopY);
                }

                var currentPos = startY;
                var interval;

                if (self.direction == "down") {
                    interval = setInterval(function () {
                        if (currentPos >= stopY) {
                            clearInterval(interval);
                            return;
                        }

                        window.requestAnimationFrame(function () {
                            currentPos = currentPos + self.speed;
                            window.scrollTo(0, currentPos);
                        });
                    }, timer);
                } else if (self.direction == "up") {
                    interval = setInterval(function () {
                        if (currentPos <= stopY) {
                            clearInterval(interval);
                            return;
                        }

                        window.requestAnimationFrame(function () {
                            currentPos = currentPos - self.speed;
                            window.scrollTo(0, currentPos);
                        });
                    }, timer);
                }
            });
        }
    };

    if (btn && scroll) {
        var smoth = new SmothScroll({
            from: btn,
            to: scroll,
            direction: "down"
        });
    }

    if (toCateg && category) {
        var smoth2 = new SmothScroll({
            from: toCateg,
            to: category,
            direction: "up",
            time: 500,
            speed: 150
        });
    }
})();

function cookieSearch(item) {
    var array = document.cookie.split(';');
    var retItem;
    array.forEach(function (el) {
        if (el.match(item)) retItem = el;
    });

    if (retItem) {
        return retItem.match(/=[a-zA-Z0-9]*/)[0].match(/[a-zA-Z0-9]*$/)[0];
    }
}

(function () {
    var body = document.getElementsByTagName("html")[0];
    var btns = document.querySelectorAll('[data-lightmode]');
    var darkMode;

    if (sessionStorage.getItem('darkMode') && sessionStorage.getItem('darkMode') == 'true') {
        turnOn();
    }

    window.addEventListener("click", function (e) {
        if (e.target.hasAttribute("data-lightmode")) {
            setTimeout(function () {
                body.classList.add("body-dark");
                setTimeout(function () {
                    body.classList.remove("body-dark");
                }, 500);

                if (!darkMode) {
                    turnOn();
                } else {
                    turnOff();
                }
            }, 300);
        }
    });

    function turnOn() {
        DarkReader.enable({
            brightness: 100,
            contrast: 90,
            sepia: 10
        });
        btns.forEach(function (el) {
            return el.classList.add('active');
        });
        body.classList.toggle("body-night");
        if(!darkMode){
            sessionStorage.setItem('darkMode', 'true');
            darkMode = true;
        }

    }

    function turnOff() {
        darkMode = false;
        body.classList.toggle("body-night");
        btns.forEach(function (el) {
            return el.classList.remove('active');
        });
        sessionStorage.setItem('darkMode', 'false');
        DarkReader.disable();
    }
})();

(function () {
    var userAgreeText = document.getElementById("userAgreeText");
    var added;
    var lang = document.getElementById("lang-popup");
    var langOpenBtnAttr = "data-langopen";
    var auth = document.getElementById("auth-popup");
    var authOpenBtnAttr = "data-authopen";
    var userAgree = document.getElementById("user-agree");
    var userAgreeOpenBtnAttr = "data-userAgree";
    var docPopup = document.getElementById('doc-popup');
    var docPopupOpenBtnAttr = "data-docPopup";

    if (docPopup) {
        var docContainer = docPopup.querySelector('.docPopup__doc');
        var docTitle = docPopup.querySelector('.popup__title');
        var docPopupBody = docPopup.querySelector('.docPopup__body');
        var docPrintBtn = docPopup.querySelector('[data-docPrint]');
        var openedID;

        if (vWidth < 1101) {
            var docArrow = docPopup.querySelector('.popup__botOptions-btn');
            docArrow.addEventListener('click', function (e) {
                docArrow.classList.toggle('active');
            });
        }
    }

    var ClosePopup = function ClosePopup(popup, callBack) {
        var self = this;

        if (popup) {
            self.popup = popup;
            self.popup.addEventListener("click", function (e) {
                if (e.target.hasAttribute("data-closepopup")) {
                    self.popup.classList.remove("active");

                    if (callBack) {
                        setTimeout(callBack, 300);
                    }
                }
            });
        }
    };

    window.addEventListener("click", function (e) {
        if (e.target.hasAttribute(langOpenBtnAttr) && lang) {
            openPopup(lang);
        }

        if (e.target.hasAttribute(authOpenBtnAttr) && auth) {
            openPopup(auth);
        }

        if (e.target.hasAttribute(userAgreeOpenBtnAttr) && userAgree) {
            e.preventDefault();
            openPopup(userAgree);

            if (!added) {
                added = "true";
                userAgreeText.innerHTML = userAgrrementText;
            }
        }

        if (e.target.hasAttribute(docPopupOpenBtnAttr) && docPopup) {
            e.preventDefault();
            openPopup(docPopup);

            for (var i = 0, l = docPagedocuments.length; i < l; i++) {
                if (docPagedocuments[i].id == e.target.dataset.docpopup && openedID != docPagedocuments[i].id) {
                    if (docPagedocuments[i].content) {
                        docContainer.innerHTML = docPagedocuments[i].content;
                    } else {
                        docContainer.innerHTML = 'Отсутствует содержимое документа';
                    }

                    if (docPagedocuments[i].title) {
                        docTitle.innerText = docPagedocuments[i].title;
                    } else {
                        docTitle.innerText = 'Документ ' + docPagedocuments[i].id;
                    }

                    if (docPagedocuments[i].pdfLink) {
                        docPrintBtn.href = docPagedocuments[i].pdfLink;
                    }

                    break;
                }
            }
        }
    });

    function scrollPopupToTop(el) {
        el.scrollTo(0, 0);
    }

    function openPopup(popup) {
        popup.classList.add("active");
    }

    if (lang) {
        var langPopup = new ClosePopup(lang);
    }

    if (userAgree) {
        var userAgreePopup = new ClosePopup(userAgree);
    }

    if (auth) {
        var authPopup = new ClosePopup(auth);
        var authPopupSections = auth.querySelectorAll(".auth-popup__body");
        var swiched = false;
        auth.addEventListener("click", function (e) {
            if (e.target.hasAttribute("data-switch") && !swiched) {
                auth.classList.add("changing");
                setTimeout(function () {
                    for (var i = 0, l = authPopupSections.length; i < l; i++) {
                        authPopupSections[i].classList.toggle("active");
                    }
                }, 300);
                setTimeout(function () {
                    auth.classList.remove("changing");
                }, 500);
            }
        });
    }

    if (docPopup) {
        var docPopupclose = new ClosePopup(docPopup, function () {
            scrollPopupToTop(docPopupBody);
        });
    }
})();

(function () {
    var currentItem = null;
    function n(e){
        target = e.target.parentNode
        /*(".main-catg-item")*/
        ;

        if (e.target.hasAttribute("data-categ")) {
            if (target == currentItem) {
                currentItem.classList.remove("active");
                currentItem = null;
            } else {
                if (currentItem) {
                    currentItem.classList.remove("active");
                }

                target.classList.toggle("active");
                currentItem = target;
            }
        } else if (currentItem) {
            currentItem.classList.remove("active");
        }

        ;
    }

    if(!isMobile){
        document.addEventListener("click",n)
    }else{
        document.addEventListener("touchstart",function (e) {
            n(e);
        })
    }

})();

function generatePassword() {
    var buf = new Uint8Array(800);
    window.crypto.getRandomValues(buf);
    return btoa(String.fromCharCode.apply(null, buf));
}

(function () {
    var registrForm = document.getElementById("registrForm");
    var authForm = document.getElementById("auth-form");
    var regpassword = document.getElementById("regPassword");
    var passGenBtn = document.getElementById("passGen");
    var genPassword;
    var passShow = false;
    var emailReg = /[a-zA-Z0-9]*@[a-zA-Z0-9]*\.[a-zA-Z0-9]*/;
    var telReg = /\+*[0-9]*/;
    var InvalidEmail = "Вы ввели некорректный E-mail";
    var InvalidTel = "Провепте корректность номера";
    var EmptyField = "Заполните поле";
    var InvalidPassword = {
        sybolAm: "Минимальное количество символов 8",
        validSymb: "Не испрользуйте символы % $ : ' \" ^ & * ( ! ) ? \\/",
        nonSame: "Пароли не соответствуют"
    };

    var FormValid = function FormValid(form) {
        var self = this;
        self.thisForm = form;
        self.passwordArray = self.thisForm.querySelectorAll("input[type='password']");
        self.inputArray = self.thisForm.querySelectorAll("input[data-required]");
        self.message = self.thisForm.querySelectorAll(".cust-input__mesg");
        self.formCheckArray = []; // if length of formCheckArray will be equal to all inputs which are included in form form will be sent

        self.clearAll = function () {
            //clear all msg and remove class from each item
            formCheckArray = [];

            for (var i = 0, l = self.inputArray.length; i < l; i++) {
                var wrap = self.inputArray[i].parentNode;
                wrap.classList.remove("err");
                wrap.classList.remove("suc");
            }

            for (var _i3 = 0, _l3 = self.message.length; _i3 < _l3; _i3++) {
                self.message[_i3].innerText = "";
            } //end of clearing

        };

        self.clearItem = function (block) {
            var wrap = block.parentNode;
            wrap.classList.remove("err");
            wrap.classList.remove("suc");
            self.formCheckArray = self.formCheckArray.filter(function (thisItem) {
                return thisItem != block;
            });
        };

        self.checkEmail = function (item) {
            //email validation
            self.clearItem(item);

            if (item.value.match(emailReg) && item.value.match(emailReg).index > -1) {
                item.parentNode.classList.add("suc");
                self.formCheckArray.push(item);
            } else {
                var text = item.parentNode.querySelector(".cust-input__mesg");
                text.innerText = InvalidEmail;
                item.parentNode.classList.add("err");
            } //end of email validation

        };

        self.checkEmpty = function (item) {
            //text fields validation
            self.clearItem(item);
            setTimeout(function () {
                var msgField = item.parentNode.querySelector(".cust-input__mesg");

                if (item.value.length == 0) {
                    item.parentNode.classList.add("err");
                    msgField.innerText = "Заполните поле";
                } else {
                    item.parentNode.classList.add("suc");
                    self.formCheckArray.push(item);
                } //end text fields validation

            }, 500);
        };

        self.checkTel = function (item) {
            self.clearItem(item);

            if (item.value.length > 9 && item.value.length <= 14 && item.value.match(telReg)) {
                item.parentNode.classList.add("suc");
                self.formCheckArray.push(item);
            } else {
                var msgField = item.parentNode.querySelector(".cust-input__mesg");
                item.parentNode.classList.add("err");
                msgField.innerText = InvalidTel;
            }
        };

        self.checkPassword = function (item) {
            //start validation password
            for (var i = 0, l = self.passwordArray.length; i < l; i++) {
                var msgField = self.passwordArray[i].parentNode.querySelector(".cust-input__mesg");

                if (i == 0 && self.passwordArray[i] == item) {
                    self.clearItem(item);

                    if (self.passwordArray[i].value.length < 8) {
                        //error self.message from length
                        msgField.innerText = InvalidPassword.sybolAm;
                        self.passwordArray[i].parentNode.classList.add("err");
                        break;
                    }

                    if (self.passwordArray[i].value.match(/[%$:'"^&*(!)?\/]/) && self.passwordArray[i].value.match(/%/).index > -1) {
                        self.passwordArray[i].parentNode.classList.add("err");
                        msgField.innerText = InvalidPassword.validSymb;
                        break;
                    }

                    self.passwordArray[i].parentNode.classList.add("suc");
                    self.formCheckArray.push(item);
                }

                if (i == 1 && self.passwordArray[1] == item) {
                    self.clearItem(item);

                    if (self.passwordArray[0].value != self.passwordArray[1].value) {
                        msgField.innerText = InvalidPassword.nonSame;
                        self.passwordArray[i].parentNode.classList.add("err");
                        break;
                    } else {
                        self.passwordArray[i].parentNode.classList.add("suc");
                        self.formCheckArray.push(item);
                    }
                }
            } //end of validation  password

        };

        self.checkCheck = function (item) {
            self.clearItem(item);

            if (item.checked && item.hasAttribute("data-required")) {
                self.formCheckArray.push(item);
                item.parentNode.classList.add("suc");
            } else if (item.hasAttribute("data-required")) {
                item.parentNode.classList.add("err");
            }
        };

        self.thisForm.addEventListener("click", function (e) {
            if (e.target.hasAttribute("data-check-required")) {
                self.checkCheck(e.target);
            }
        });
        self.thisForm.addEventListener("change", function (e) {
            //beginin of validation inputs
            if (e.target.type == 'email') self.checkEmail(e.target);
            if (e.target.type == 'text') self.checkEmpty(e.target);
            if (e.target.type == 'tel') self.checkTel(e.target);
            if (e.target.type == 'password') self.checkPassword(e.target);
            if (e.target.type == 'checkbox') self.checkCheck(e.target);
        });
        self.thisForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var checks = self.thisForm.querySelector("input[type='checkbox']");

            for (var i = 0, l = checks.length; i < l; i++) {
                self.checkCheck(checks[i]);
            }

            for (var _i4 = 0, _l4 = self.inputArray.length; _i4 < _l4; _i4++) {
                if (!self.inputArray[_i4].parentNode.classList.contains("suc")) {
                    self.checkEmpty(self.inputArray[_i4]);

                    self.inputArray[_i4].parentNode.classList.add('err');
                }
            }

            if (self.formCheckArray.length == self.inputArray.length) {
                alert("congratulations");
            }
        });
    };

    if (registrForm) {
        new FormValid(registrForm);
    }

    window.addEventListener("click", function (e) {
        if (e.target.hasAttribute("data-showpass")) {
            var wrap = e.target.parentNode;
            var input = wrap.querySelector("input");
            e.target.classList.toggle("active");

            if (!passShow) {
                input.type = "text";
                passShow = true;
            } else {
                input.type = "password";
                passShow = false;
            }
        }
    });

    if (regpassword && registrForm && passGenBtn) {
        var passwordInputs = registrForm.querySelectorAll("input[type='password']");
        regpassword.addEventListener("mouseover", function (e) {
            if (e.target.value == 0) {
                regpassword.classList.add("showGen");
            }

            if (!genPassword) {
                genPassword = generatePassword().match(/[a-zA-Z0-9\+\.]*/g)[0].slice(0, 8);
                passGenBtn.insertAdjacentHTML("beforeend", ' <strong>' + genPassword + '</strong>');
            }
        });
        regpassword.addEventListener("mouseout", function (e) {
            regpassword.classList.remove("showGen");
        });
        passGenBtn.addEventListener("click", function () {
            for (var i = 0, l = passwordInputs.length; i < l; i++) {
                passwordInputs[i].value = genPassword;
            }

            setTimeout(function () {
                regpassword.classList.remove("showGen");
            }, 0);
        });
        regpassword.addEventListener("input", function (e) {
            if (e.target.value.length > 0) {
                regpassword.classList.remove("showGen");
            }

            if (e.target.value.length == 0) {
                regpassword.classList.add("showGen");
            }
        });
    }
})();

function auto_grow(element) {
    element.style.height = '5px';
    element.style.height = element.scrollHeight + 8 + "px";
}

function maxSymbols(item) {
    var wrap = item.parentNode;
    var maxSymbfiled = wrap.querySelector(".maxSymb span");
    var maxLength = item.maxLength;
    maxSymbfiled.innerText = +item.maxLength - item.value.length;
}

function delPhotos(item) {
    event.preventDefault();
    var wrap = item.parentNode;
    var msg = wrap.querySelector(".msg");
    var file = item;
    wrap.classList.remove('loaded');
    wrap.style.backgroundImage = "";
    msg.innerText = "";
    file.files[0] = "";
}

function addPhotos(item) {
    var photoRead = new FileReader();
    var wrap = item.parentNode;
    var msg = wrap.querySelector(".msg");
    var fileAllowed = true;
    var files = item.files;
    if (!files[0]) return;

    if (files[0].type.match(/image\/[a-zA-Z]*/)) {} else {
        fileAllowed = false;
        msg.innerHTML = "Вы загружаете <strong>" + files[0].type.split('/')[0] + "</strong><br> Загружайте изображение";
    }

    if (fileAllowed) {
        setTimeout(function () {
            photoRead.readAsDataURL(files[0]);

            photoRead.onload = function () {
                var img = photoRead.result;
                wrap.style.backgroundImage = 'url(' + img + ')';
                wrap.classList.add("loaded");
            };
        }, 0);
    }
}

(function () {
    var title = document.getElementById("editTitle");

    if (title) {
        auto_grow(editTitle);
    }
})();


var wrapExfiles = document.getElementById('exFiles');

if (wrapExfiles) {
    var addDoc = function addDoc(item) {
        var wrap = wrapExfiles;
        var outputHtml = "";

        for (var i = 0, l = item.files.length; i < l; i++) {
            var myClass = "";

            if (item.files[i].name.length > 25) {
                myClass = "exFile__item--overflow";
            }

            outputHtml += '<p class="exFile__item ' + myClass + '"><i class="icon icon--md">' + '<svg><use xlink:href="#doc-icon"></use></svg></i>' + '<span title="' + item.files[i].name + '">' + item.files[i].name + '</span>' + '<input type="hidden" value="' + item.files[i] + '">' + '<span class="exFile__del" onclick="delFile(this)"></span>' + '</p>';
        }

        wrap.insertAdjacentHTML("beforeend", outputHtml);
        item.value = null;
    };
}

function delFile(file) {
    file.parentNode.remove();
}

(function () {
    var tel = document.getElementById("showTel");
    var telShowed = false;
    window.addEventListener("click", function (e) {
        if (e.target.hasAttribute("data-showTel")) {
            tel.classList.add('active');
            telShowed = true;
        } else if (telShowed) {
            tel.classList.remove('active');
            telShowed = false;
        }
    });
})();

(function () {
    var vacancyBtn = document.getElementById('vacancyBtn');
    var vacancyItems = document.getElementById('vacancyItems');
    var opened = false;

    if (vacancyBtn && vacancyItems) {
        var items = vacancyItems.querySelectorAll('li');
        vacancyBtn.addEventListener('click', function () {
            if (!opened) {
                opened = true;
                vacancyItems.style.maxHeight = 'none';
                var height = vacancyItems.offsetHeight;
                vacancyItems.style.maxHeight = 0;
                vacancyBtn.classList.add('active');
                setTimeout(function () {
                    vacancyItems.style.maxHeight = height + 'px';
                    vacancyItems.classList.add('active');
                    setTimeout(function () {
                        vacancyItems.style.maxHeight = 'none';
                    }, 500);

                    var _loop2 = function _loop2(i, l) {
                        setTimeout(function () {
                            items[i].classList.add('visible');
                        }, i * 150);
                    };

                    for (var i = 0, l = items.length; i < l; i++) {
                        _loop2(i, l);
                    }
                }, 0);
            }
        });
    }
})();

(function () {
    var feedBackForm = document.getElementById('feedBackForm');
    var feedBackBtn = document.getElementById('feedBackBtn');
    var opened = false;

    if (feedBackForm && feedBackBtn) {
        feedBackBtn.addEventListener('click', function () {
            if (!opened) {
                opened = true;
                feedBackForm.style.maxHeight = 'none';
                var height = feedBackForm.offsetHeight;
                feedBackForm.style.maxHeight = 0;
                setTimeout(function () {
                    feedBackForm.style.maxHeight = height + 'px';
                    feedBackForm.classList.add('active');
                    setTimeout(function () {
                        feedBackForm.style.maxHeight = 'none';
                    }, 1000);
                }, 0);
            }
        });
    }
})();

function goTo(item) {
    if (event.keyCode === 13) {
        var preLink = item.dataset.link;
        var pageNumber = +item.value;
        var maxNumber = +item.dataset.max;
        if (pageNumber > maxNumber) pageNumber = maxNumber;
        if (pageNumber < 1) pageNumber = 1;
        window.location.href = preLink + pageNumber;
    }
}

(function () {
    var opened = false;
    var btn;
    window.addEventListener('click', function (e) {
        if (e.target.hasAttribute('data-toggleActive') && !opened) {
            e.target.classList.toggle('active');
            btn = e.target;
            opened = true;
        } else if (opened) {
            btn.classList.remove('active');
            opened = false;
        }
    });
})();