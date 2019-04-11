class Request{
    /**
     * 参数
     * @param {String} url 
     * @param {FormData || String || HTMLFormElement} data 数据 
     * @param {Object}  header 头 
     * @param {Function}  sucess 成功回调
     * @param {Function}  error 失败回调
     * @param {Function}  complete 请求完成回调
     */
    constructor(){
        this.url=undefined;
        this.data=undefined;
        this.header=undefined;
        this.sucess=() => {};
        this.error=() => {};
        this.complete=() => {};
        this.request = undefined;
        if (window.XMLHttpRequest) {
            this.request = new XMLHttpRequest();
        } else {
            this.request = new ActiveXObject('Microsoft.XMLHTTP');
        }
    }
    post(data){
        this.setData(data);
        this.request.open('POST',this.url,true);
        this.setHeader();
        this.request.send(this.send());
        this.statechange();
    }
    get(data){
        this.setData(data);
        this.request.open('GET',this.url,true);
        this.request.send();
        this.statechange();
    }
    setData(data){
        if(typeof data != 'object')return
        for(let key in data){
            this[key] = data[key]
        }
    }
    send(){
        const _type = Object.prototype.toString.call(this.data);
        if(_type === '[object FormData]' || _type == '[object String]'){
            return this.data
        }else if(_type === '[object HTMLFormElement]'){
            return new FormData(this.data)
        }
    }
    statechange(){
        this.request.onreadystatechange = () => {
            if(this.request.readyState == 4){
                if(this.request.status == 200){
                    this.sucess(this.request.responseText)
                }else{
                    console.log(this.request.status,this.request.statusText)
                    this.error({status:this.request.status,message:this.request.statusText})
                }
                this.complete({status:this.request.status,message:this.request.statusText})
            }
        }
    }
    setHeader(){
        const _type = Object.prototype.toString.call(this.header);
        if(_type == '[object Object]'){
            for(let key in this.header){
                this.request.setRequestHeader(key,this.header[key])
            }
        }
    }
}
export { Request }