let modal = document.getElementById("modal-container");
let button = document.getElementById("headerRightButton");
button.addEventListener('click', () => {
    modal.classList.add("block");
});

let closeButton = document.getElementById("modalClose");
closeButton.addEventListener('click', () => {
    modal.classList.remove("block");
    const shadow = document.getElementById("login-modal");
    shadow.classList.remove("login-modal-wrapper");
});

const record_button = document.getElementById("record");
const modal_display_change = document.getElementById("modal_change");
record_button.addEventListener("click", () => {
    modal_display_change.style.visibility = "hidden";
    const loading = document.getElementById("loading");
    loading.classList.add("loading");
    setTimeout(function(){
        loading.classList.remove("loading");
        const postingCompleted = document.getElementById("postingCompleted");
        const postingCompletedChild = document.getElementById("postingCompletedChild");
        postingCompleted.classList.remove("block1");   
        postingCompleted.classList.add("postingCompleted");
    }, 5*1000);
});



let modal2 = document.getElementById("modal-container");
let button2 = document.getElementById("headerRightButton2");
button2.addEventListener('click', () => {
    modal2.classList.add("block");
});

let closeButton2 = document.getElementById("modalClose");
closeButton2.addEventListener('click', () => {
    modal2.classList.remove("block");
    const shadow2 = document.getElementById("login-modal");
    shadow2.classList.remove("login-modal-wrapper");
});

const record_button2 = document.getElementById("record");
const modal_display_change2 = document.getElementById("modal_change");
record_button2.addEventListener("click", () => {
    modal_display_change2.style.visibility = "hidden";
    const loading2 = document.getElementById("loading");
    loading2.classList.add("loading");
    setTimeout(function(){
        loading2.classList.remove("loading");
        const postingCompleted2 = document.getElementById("postingCompleted");
        const postingCompletedChild2 = document.getElementById("postingCompletedChild");
        postingCompleted2.classList.remove("block1");   
        postingCompleted2.classList.add("postingCompleted");
    }, 5*1000);
});


//カレンダー
$('#datepicker').datepicker();

$(function() {
    // 「#login-show」要素に対するclickイベントを作成してください
    $('#headerRightButton').click(function(){
        $('#login-modal').fadeIn();
    });
    
});




// 3.ツイッターテキストの内容をひぱってツイッターに内容を表示させる
//（１）Twitterチェックボックス
function buttonClick(){
    let checkbox1 = document.getElementById('check1');
    const text = document.getElementById("input-message").value;
    if (checkbox1.checked){
        console.log('チェック');
        var turl = "https://twitter.com/intent/tweet?text="+text;
	    window.open(turl,'_blank');
    } else {
        console.log('チェックなし');
    };
}

//チェックボックスをチェックしたら箱が青くなる
function checked() {
    const checkBlue1 = document.getElementById("checkBlue1");
    const checkBlue2 = document.getElementById("checkBlue2");
    const checkBlue3 = document.getElementById("checkBlue3");
    const checkBlue4 = document.getElementById("checkBlue4");
    const checkBlue5 = document.getElementById("checkBlue5");
    const checkBlue6 = document.getElementById("checkBlue6");
    const checkBlue7 = document.getElementById("checkBlue7");
    const checkBlue8 = document.getElementById("checkBlue8");
    const checkBlue9 = document.getElementById("checkBlue9");
    const checkBlue10 = document.getElementById("checkBlue10");
    const checkBlue11 = document.getElementById("checkBlue11");

    if(checkBlue1.checked){
        console.log("チェック");
        checkBlue1.classList.add("allBlue");
    }
    if(checkBlue2.checked){
        checkBlue1.classList.add("allBlue");
    }
    if(checkBlue3.checked){
        checkBlue1.classList.add("allBlue");
    }
    if(checkBlue4.checked){
        checkBlue1.classList.add("allBlue");
    }
    if(checkBlue5.checked){
        checkBlue1.classList.add("allBlue");
    }
    if(checkBlue6.checked){
        checkBlue1.classList.add("allBlue");
    }
    if(checkBlue7.checked){
        checkBlue1.classList.add("allBlue");
    }
    if(checkBlue8.checked){
        checkBlue1.classList.add("allBlue");
    }
    if(checkBlue9.checked){
        checkBlue1.classList.add("allBlue");
    }
    if(checkBlue10.checked){
        checkBlue1.classList.add("allBlue");
    }
    if(checkBlue11.checked){
        checkBlue1.classList.add("allBlue");
    }
}    

checked();
