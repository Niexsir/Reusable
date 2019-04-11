import './login.less'
import '../../fonts/icon/iconfont.css'
import { tip } from '../../components/tips/tip'
import { Request } from '../../class/ajax'
import { SubmitButton } from '../../class/submitButton'
import '../../mock/mock'
const _Request = new Request();
const submit = document.getElementsByClassName('submit-button')[0];
if(process.env.NODE_ENV == 'development'){
    const container = document.getElementsByClassName('login-container')[0];
    const _tip = tip({
        text:`${process.env.NODE_ENV}:随便输入账号密码！`
    });
    container.append(_tip);
    setTimeout(()=>{
        container.removeChild(_tip)
    },4000)
    
}

const sb = new SubmitButton();
sb.init({ele:submit,lodingText:'登录中...'});
submit.addEventListener('click',(e) => {
    const _e = e || window.event;
    _e.preventDefault();
    sb.setStatus(true);
    _Request.post({
        url:'api/login',
        data:document.getElementById('login-form'),
        sucess:(res)=>{
            const _res = JSON.parse(res);
            if(_res.code == 1){
                window.location.href = '/'
            }
        },
        complete:(res)=>{
            sb.setStatus(false);
        }
    })
})
