import axios from "axios"

const UserLogic =()=>{
    const getUserInfo = async()=>{
        const response = await axios.get("https://private-anon-f159f75ca4-itodpbni.apiary-mock.com/account")
        const data = response.data
        console.log("Data User",data)
        return response.data
    }
    return{
        getUserInfo
    }
    
}
export default UserLogic