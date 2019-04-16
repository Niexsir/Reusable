import Mock from "mockjs";
const login = Mock.mock('api/login',{
    'code|1-2': 1,// 1 成功 ; 2 失败
    'message|123.1-10': 1
})
login.setup({
    timeout: '500-3000'
})
export { login }