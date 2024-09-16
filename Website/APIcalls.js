async function API(){
    try {
        const response = await fetch('https://66e526d95cc7f9b6273c6a2b.mockapi.io/register')
        const data=await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
async function Apidata() {
    const apidata=await API()
    const activeuser=apidata.filter(data=>data.isActive)
    console.table(activeuser)
    const structureddata=activeuser.map((data)=>{console.log(data)})
}
Apidata()