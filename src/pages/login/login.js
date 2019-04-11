import './login.less'
import '../../fonts/icon/iconfont.css'
import { tip } from '../../components/tips/tip'
if(process.env.NODE_ENV == 'development'){
    const container = document.getElementsByClassName('login-container')[0];
    container.append(tip(`${process.env.NODE_ENV}:随便输入账号密码！`));
}