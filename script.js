fetch('https://dummyjson.com/products').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let data1="";
    let data2="";

    completedata.products.map(function(e) {
        data1+=`<div class="pro">
        <h5 class="title">${e.title}<h5>
        <img src="${e.images[0]}" alt="img" class="images">
        <p>${e.description}</p>
        <p class="category">${e.category}</p>
        <p class="price">${e.price}</p>
        <button class="button">Add to Cart</button>
    </div>`
    data2+=`<datalist id="abc"><option>${e.title}</option></datalist>`
    });
    console.log(data1)
    document.getElementById("products").innerHTML=data1;
    document.getElementById("abc").innerHTML=data2;
    
}).catch((err)=>{
    console.log(err);
})
// fetch('https://dummyjson.com/products').then((data)=>{
//     return data.json();
// }).then((completedata)=>{
//     let data1="";
//     completedata.products.map(function(e) {
//         data1+=`<div id="list">
//         <h5 class="title">${e.title}<h5>
        
//         <p class="price">${e.price}</p>
//     </div>`
//     });
//     console.log(data1)
//     document.getElementById("list").innerHTML=data1;
    
// }).catch((err)=>{
//     console.log(err);
// })