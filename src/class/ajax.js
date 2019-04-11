class Ajax{
    constructor({
        method="GET",
        url="",
        data='',
        header='',
        sucess=function(){},
        error=function(){}
    }){
        this.method = method;
        this.url=url;
        this.data=data;
        this.header=header;
        this.sucess=function(){};
        this.error=function(){}
    }
}