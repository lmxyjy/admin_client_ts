/*接口请求的约束*/ 

/*天气请求的参数约束*/ 
export interface IPWeather{
    dayPictureUrl:string,
    weather:string
}

export interface IAddUser{
    username:string,
    password?:string,
    phone:string,
    email:string,
    role_id:string
    _id?:string
}
// 设置角色权限
export interface ISetRoleAuth {
    _id:string,
    menus:string[],
    auth_time:number,
    auth_name:string
}
