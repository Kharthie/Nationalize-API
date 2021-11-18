const api_url = "https://api.nationalize.io/?name=michael";





// fetch("https://api.nationalize.io/?name=michael")
// .then(function(data){
//     return data.json();
// })
// .then(function(dataObj){
//     console.log(dataObj)
//   })
 


async function contant(){
    try{
            var value = await fetch("https://api.nationalize.io/?name=michael")   
             var fetchvalue = await value.json()
        
             console.log(fetchvalue)
         }
    catch(err){
        console.log(err)
    }
}
contant()

   

