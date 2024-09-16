function success(){
    console.log("success")
}
function fail(){
    console.log("Fail")
}
function error(){
    console.log("Error")
}
function exec(data,callback){
    console.log(`Balance:${data}`)
    setTimeout(callback,3000)
}
const data=1
if(data>0){
    exec(data,success)
}
else if(data<=0){
    exec(data,fail)
}
else{
    exec(data,error)
}