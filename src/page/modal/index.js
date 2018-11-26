import Modal from "../../components/modal/index.js";

var win = new Modal({
    insideHtml:'<div style="margin-top: 50px;">你好啊</div>',
    closeCallBack: function () {
        alert('弹窗1已关闭');
    }
});

var win2 = new Modal({
    insideHtml:'<div style="margin-top: 50px;">今天天气怎样？</div>',
    closeCallBack: ()=> {
        console.log('弹窗2已关闭');
    }
});

const openBtn = document.createElement('button');
openBtn.innerHTML = "open window1";
document.body.appendChild(openBtn);
openBtn.onclick = (ev)=> {
    win.open();
}
const openBtn2 = document.createElement('button');
openBtn2.innerHTML = "open window2";
document.body.appendChild(openBtn2);
openBtn2.onclick = (ev)=> {
    win2.open();
}
