import Mock from "mockjs";
const login = Mock.mock('api/login',{
    'code|1-2': 1,
    'message|123.1-10': 1
})
login.setup({
    timeout: '500-3000'
})
export { login }