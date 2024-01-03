import axios from "axios"

const PpobLogic =()=>{
    const getPpobMenu =async()=>{
        const response = await axios.get("https://private-anon-f159f75ca4-itodpbni.apiary-mock.com/menu/ppob")
        const data = response.data
        console.log("Data PPOB",data)
        return response.data
    }
    return{
        getPpobMenu
    }
}
export default PpobLogic