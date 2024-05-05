/*TODO: 
*/
const sun = document.querySelector(".fa-solid.fa-sun")

const moon = document.querySelector(".fa-solid.fa-moon")

const onClickTheme = ()=>{
    if(sun.id == "hidden"){
        document.body.className = "black"
        sun.id = ""
        moon.id = "hidden"
    }else if(moon.id == "hidden"){
        //apply black theme to body
        document.body.className = ""
        sun.id="hidden"
        moon.id=""
    }
}
sun.addEventListener("click",onClickTheme)
moon.addEventListener("click",onClickTheme)

const load_page = (products)=>{
    let s = document.getElementById("products")
    s.innerHTML = ""
    i=0;
    //page of more than 9 elements???
    while(i<products.length){
        console.log('value of',i,i%3==0)
        if(i%3==0){
            let html = ""
            for(let _ =0;_<3;_++){
                console.log(_)

                let {id,title,price,discountPercentage,rating,thumbnail} = products[i]
                let stars = '<i class="fa-solid fa-star"></i>'.repeat(Math.floor(rating))
                
                html += `<div class="producto" id=${id}>
                <img src="${thumbnail}" alt="">
                <div class="discount">${discountPercentage}%</div>
                <h3>${title}</h3>
                <div class="stars">
                ${stars}
                </div>
                <span>${price}€</span>
                </div>`
                i+=1
            }
            s.innerHTML+= `<div class="fila">${html}</div>`
        }
    }
}


fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(r=>{
    let {products} = r
    console.log(products)
    let p = document.getElementById("pages")
    for(let x=0;x< Math.floor(products.length /9) ;x++){
        pages.innerHTML+= `<span class="pagebtn" id=${x+1}>${x+1}</span>`
    }
    let pages_btns = document.getElementsByClassName("pagebtn")
    let current_page = 1
    let onclick_page =(e)=>{
        let num = Number(e.target.outerText)
        if(current_page != num){
            current_page = num
            switch(num){
                case 1:{
                    load_page(products.slice(0,10))
                    break
                }
                case 2:{
                    load_page(products.slice(10,20))
                    break
                }
                case 3:{
                    load_page(products.slice(20,30))
                    break
                }
                

            }
        }
        
        console.log(e.target.outerText)
    }
    for(let z=0;z<pages_btns.length;z++){
        pages_btns[z].addEventListener("click",onclick_page)
    }

    //according to page id choose position of array and load elements 
    //current page
    load_page(products.slice(0,10))
   

});




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


