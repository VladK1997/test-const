(function(){
    let chatForm = document.getElementById("chatForm");
    let chatBlock = document.getElementById('charWrap');
    if(chatForm && chatBlock){
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }
        var currentdate = new Date();
        let start = chatBlock.offsetHeight - window.innerHeight + 300;
        window.scrollTo(0,start);
        let monthName = [ "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December" ];
        let files = [];
        let fileInput = chatForm.querySelector(".chat-answer__file input");
        let fileWrap = chatForm.querySelector('.chat-answer__files-wrap');
        let textWrap = chatForm.querySelector("textarea");
        let dateExist = false;
        chatForm.addEventListener("submit",function(e){
            e.preventDefault();
            let filesHtml = "";
            let form = e.target;
            if(files.length > 0){
                for(let i = 0, l = files.length;i < l; i++){
                    let myClass ="";
                    if(files[i].name.length > 25) {
                        myClass = "exFile__item--overflow"
                    }
                    filesHtml += '<a href="#" class="exFile__item'+myClass+'"><i class="icon icon--md">' +
                    '<svg><use xlink:href="#doc-icon"></use></svg></i>'+
                    '<span title="'+files[i].name+'">'+files[i].name+'</span>'+
                    '<input type="hidden" value="'+files[i]+'">'+
                    '</a>';
                }

            }

            if(filesHtml.length > 0 || textWrap.value.length > 0){
                let scrollToEl = chatBlock.offsetHeight - window.innerHeight/2;
                if(!dateExist) {
                    let existableDates = chatBlock.querySelectorAll('.chat__date');
                    for (let i = 0, l = existableDates.length; i < l; i++) {
                        if (existableDates[i].innerText == currentdate.getDate() + " " + monthName[currentdate.getMonth()]) {
                            dateExist = true;
                            break
                        }
                    }
                    if(!dateExist){
                        outputDate = '<p class="chat__date">'+currentdate.getDate()+ " " + monthName[currentdate.getMonth()]+'</p>'
                        chatBlock.insertAdjacentHTML('beforeend',outputDate);
                    }
                }
                let outputHtml = '<p class="chat__msg chat__msg--from">'+
                    filesHtml+
                    textWrap.value +
                    '<span class="chat__msg-time">'+currentdate.getHours()+'.'+currentdate.getMinutes()+'</span>'+
                    '</p>'
                chatBlock.insertAdjacentHTML('beforeend',outputHtml);
                textWrap.value = "";
                files = [];
                fileWrap.classList.remove('active');
                fileWrap.innerHTML="";
                if(window.innerHeight < chatBlock.getBoundingClientRect().bottom+70) {
                    window.scrollTo(0, scrollToEl-680);
                    for(let i = 0,l = 36;i< l ;i++){
                        window.requestAnimationFrame(function () {
                            setTimeout(function () {
                                window.scrollTo(0, scrollToEl-680+20*i);
                            },7*i);
                        })
                    }



                }
            }

        });
        fileInput.addEventListener("change",function(e){
            let outputFileHtml = "";
            let item = e.target;
            for(let i = 0,l = item.files.length;i < l; i++){
                let myClass = "";
                if(item.files[i].name.length > 25) {
                    myClass = "exFile__item--overflow"
                }
                if(item.files[i].size > 25000000) {
                    alert("Максимально домустимы размер файла 25 мб");
                    continue
                }
                files.push(item.files[i]);
                outputFileHtml += '<p class="exFile__item '+myClass+'"><i class="icon icon--md">' +
                    '<svg><use xlink:href="#doc-icon"></use></svg></i>'+
                    '<span title="'+item.files[i].name+'">'+item.files[i].name+'</span>'+
                    '<input type="hidden" value="'+item.files[i]+'">'+
                    '<span class="exFile__del" onclick="delFile(this)"></span>' +
                    '</p>';
            }
            fileWrap.classList.add('active');
            fileWrap.insertAdjacentHTML("beforeEnd",outputFileHtml)
        });
        fileWrap.addEventListener('click',function(e){
            if(fileWrap.children.length == 0){
                fileWrap.classList.remove('active');
            }

        });


    }
})();
document.addEventListener('DOMContentLoaded',function () {


})


