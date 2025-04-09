
let FetchData:Promise<{Name:string, Price:number}> = new Promise(function(resolve, reject){
       
    let url = "https://server.com&quot;;

    if(url==="https://fakestore.com&quot;){
         resolve({Name:'TV', Price:50000});
    } else {
         reject('Invalid URL - API Not found');
    }
})

FetchData.then(function(data){
console.log(data);
})
.catch(function(error){
console.log(error);
})