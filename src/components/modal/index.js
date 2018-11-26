
export default class Modal {
    constructor({insideHtml,closeCallBack,comfirmCallback}) {
        this.insideHtml = insideHtml;
        this.bgHtml = document.createElement('div');
        this.deleteBtn = document.createElement('div');
        this.wraper = document.createElement('div');
        this.bindEvent = {
            closeCallBack: closeCallBack||function(){},
            comfirmCallback:comfirmCallback||function(){}
        }
        this.init();
    }
    init() {
        this.bgHtml.innerHTML = '<div class="win-bg" style="position: fixed;text-align:center;width: 100%;height: 100%;background-color:rgba(0,0,0,.7);"> </div>';
        this.bgHtml.style.display = 'none';
        document.body.appendChild(this.bgHtml);

        this.deleteBtn.innerHTML = ' <div style="position: absolute;right: 0;top: 0;width: 20px;height: 20px;font-size: 18px;line-height: 20px;">X</div>';
        this.wraper.innerHTML = '<div style = "width: 500px;height: 300px;background-color:#fff;position:absolute;top: 50%;margin-top: -150px;left: 50%;margin-left: -250px;"></div>';

        this.wraper.children[0].innerHTML = this.insideHtml;
        this.wraper.children[0].appendChild(this.deleteBtn);

        this.bgHtml.children[0].appendChild(this.wraper);
        this.initialEvent();
    };
    close() {
        this.bgHtml.style.display = 'none';
        this.bindEvent.closeCallBack();
    };
    open() {
        this.bgHtml.style.display = 'block';
    };
    initialEvent() {
        const that = this;
        this.deleteBtn.onclick =  (ev)=> {
            that.close();
        }
    }
}

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

