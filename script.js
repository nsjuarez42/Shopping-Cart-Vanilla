/*TODO: 
*/
const sun = document.querySelector(".fa-solid.fa-sun")

const moon = document.querySelector(".fa-solid.fa-moon")

const onClickTheme = ()=>{
    if(sun.id == "hidden"){
        sun.id = ""
        moon.id = "hidden"
    }else if(moon.id == "hidden"){
        sun.id="hidden"
        moon.id=""
    }
}
sun.addEventListener("click",onClickTheme)
moon.addEventListener("click",onClickTheme)



const products = document.querySelectorAll(".producto")
const product_data = []

const cart = []

let count = document.getElementById("count")

const shopping_cart = document.getElementById("shopping_cart")

const write_to_cart = ()=>{
    let html = ""
    for(let i=0;i<cart.length;i++){

        html+="<div >"+product_data[cart[i]].name+ product_data[cart[i]].price +
        product_data[cart[i]].category+
        "</div>"
    }
    shopping_cart.innerHTML=html
}

const add_to_cart = (e)=>{
    let id = e.srcElement.id
    cart.push(id)
    count.textContent = cart.length
    write_to_cart()

}




for(let i =0;i<products.length;i++){
    let button = products[i].children[4]
    button.id = i
    button.addEventListener("click",add_to_cart)
    let product = {
        name:products[i].children[1].textContent,
        category:products[i].children[2].textContent,
        price:products[i].children[3].textContent,
    }
    product_data.push(product)
}
product_data.forEach(element => {
    console.log(element)
});


