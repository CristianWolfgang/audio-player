export default function ajax(url,options,callBack){
	fetch(url,options)
	.then(res=>(res.ok)?res.json():Promise.reject(res.statusText))
	.then(data=>callBack(data));
};