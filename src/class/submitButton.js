class SubmitButton{
    /**
     * @param { HTMLButtonElement } ele
     * @param { String } text 
     * @param { String } lodingText
     * @param { Boolean } toSubmit
     */
    constructor(){
        this.ele = undefined;
        this.text = undefined;
        this.lodingText = undefined;
        this.toSubmit = false;
    }
    init({ele,lodingText}){
        if(typeof ele != 'object')throw 'SubmitButton 参数错误！'
        if(Object.prototype.toString.call(ele) == '[object Array]'){
            this.ele = ele[0];
        }else{
            this.ele = ele;
        }
        this.lodingText = lodingText;
        this.text = this.ele.innerText;
    }
    setStatus(data){
        if(typeof data != 'boolean')return
        this.toSubmit = data;
        this.render()
    }
    render(){
        if(this.toSubmit){
            this.ele.setAttribute('disabled','disabled');
            this.ele.style.cursor = 'wait';
            this.ele.innerText = this.lodingText;
        }else{
            this.ele.removeAttribute('disabled');
            this.ele.style.cursor = 'pointer';
            this.ele.innerText = this.text;
        }
    }
}

export { SubmitButton }