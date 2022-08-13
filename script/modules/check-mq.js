export default function checkMediaQuery(
    {
    strMediaQuery,
    resolve=()=>null,
    reject=()=>null
    }
    ){
    const mediaQuery = matchMedia(strMediaQuery);
    const promise = new Promise((callBackResolve,callBackReject)=>{
        if(mediaQuery.matches){
            callBackResolve();
        }else{
            callBackReject();
        }
    });
    
    promise
    .then(resolve,reject)
    .catch((err)=>{
        console.log(err);
    })
}