(function(){
    let chatForm = document.getElementById("chatForm");
    if(chatForm){

        let fileAlowed = true;
        let fileInput = chatForm.querySelector(".chat-answer__file input");
        let fileWrap = chatForm.querySelector('.chat-answer__files-wrap');
        chatForm.addEventListener("submit",function(e){
            e.preventDefault();
            let form = e.target;
            let msg = form.querySelector("textarea");
        });
        fileInput.addEventListener("change",function(e){
            let outputFileHtml = "";
            let item = e.target;
            for(let i = 0,l = item.files.length;i < l; i++){
                let myClass = "";
                if(item.files[i].name.length > 25) {
                    myClass = "exFile__item--overflow"
                }
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

