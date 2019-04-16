import { tip } from '../components/tips/tip'
class FormCheck{
    /**
     * @param { HTMLFormElement } ele
     */
    constructor({ele}){
        this.ele = ele;
        this.checkEle = undefined;
        this.init();
        this.status = true;
        this.message = '';
        this.focusEle = undefined;
        this.eleIndex = undefined;
    }
    init(){
        if(Object.prototype.toString.call(this.ele) !== '[object HTMLFormElement]')throw '参数出错！'
        const _array =  Array.from(this.ele.querySelectorAll('[check]'));
        this.checkEle = []
        for(let item of _array.values()){
            this.checkEle.push({
                ele:item,
                message:'测试',
                status:false
            })
            item.addEventListener('focus',(e)=>{
                let _e = e || window.event;
                this.focusEle = _e.target;
                this.eleIndex = this.checkEle.findIndex((i)=> i.ele === this.focusEle );
                this.setTips()
            },false)
        }
    }
    getStatus(){
        return {
            status: this.status,
            message: this.message
        }
    }
    setTips(){
        for(let [index,item] of this.checkEle.entries()){
            const _parentNode = item.ele.parentNode;
            if(_parentNode.getElementsByClassName('tips').length !== 0){
                _parentNode.removeChild(_parentNode.getElementsByClassName('tips')[0]);
            }
            if(index < this.eleIndex && !item.status){
                _parentNode.appendChild(tip({text:item.message,position:'top'}))
            }
        }
    }
}
export { FormCheck }