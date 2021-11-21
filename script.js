// const api_url = "https://api.nationalize.io/?name=michael";

function myFunction() {
    var x = document.getElementById("myText").value;
    get(x);
  }
  
  async function get(myFunction) {
    const data = await fetch(`https://api.nationalize.io/?name=${myFunction}`);
    const display = await data.json();
    const show = await create(display);
    console.log(show);
  }
  
  function create(show) {
    const para = document.querySelector("#display");
    para.innerText = `country: ${show.country[0]["country_id"]} => probability: ${show.country[0].probability}
          country: ${show.country[1]["country_id"]} => probability: ${show.country[1].probability}`;
    document.body.append(para);
  }





// fetch("https://api.nationalize.io/?name=michael")
// .then(function(data){
//     return data.json();
// })
// .then(function(dataObj){
//     console.log(dataObj)
//   })
 


// async function contant(){
//     try{
//             var value = await fetch("https://api.nationalize.io/?name=michael")   
//              var fetchvalue = await value.json()
        
//              console.log(fetchvalue)
//          }
//     catch(err){
//         console.log(err)
//     }
// }
// contant()
