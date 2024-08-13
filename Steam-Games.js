//RateBtns
let rateBtn = document.querySelectorAll(".Steam-Games div .second-txt .rate");
let rateMe = document.querySelectorAll(".Steam-Games div .rated .rateMe");

let array1 = Array.from(rateBtn);
let array2 = Array.from(rateMe);

let rateCounts = JSON.parse(localStorage.getItem("numberRate")) || {};

window.addEventListener("load", function() {
    array2.forEach(function(ele, index) {
        if (rateCounts[index] !== undefined) {
            ele.innerHTML = rateCounts[index];
        } else {
            ele.innerHTML = 0;
        }
    })
})

array1.forEach(function(ele, index) {
    let numberCounter = rateCounts[index] || 0;
    
    ele.addEventListener("click", function() {
        numberCounter++;
        array2[index].innerHTML = numberCounter;
        
        rateCounts[index] = numberCounter;
        localStorage.setItem("numberRate", JSON.stringify(rateCounts));
    })
})

// Show and Hide saleContainer
let Rotate = document.getElementsByClassName("Rotate");
let back1 = document.getElementsByClassName("back1");
let saleContainer = document.getElementsByClassName("saleContainer");

for(let i = 0 ; i < Rotate.length ; i++){
Rotate[i].addEventListener("click",function(){
    for(let j = 0 ; j < saleContainer.length ; j++){
      saleContainer[i].classList.add("ShowSaleContainer")
    }
})

for(let i = 0 ; i < back1.length ; i++){
back1[i].addEventListener("click",function(){
    for(let j = 0 ; j < saleContainer.length ; j++){
        saleContainer[i].classList.remove("ShowSaleContainer")
      }
})
}
}

// increment and decrement the price
const maxPrice = 500;

let dives = document.querySelectorAll(".Steam-Games > div");

let arrDives = Array.from(dives)

 function setupGame(gameNumber) {
     let number = 1;

     let decrementButtons = document.querySelectorAll(`.game${gameNumber} .decrement`);
     let spBraces = document.querySelectorAll(`.game${gameNumber} .spBraces`);
     let spansPrice = document.querySelectorAll(`.game${gameNumber} .spanPrice`);
     let prices = document.querySelectorAll(`.game${gameNumber} .price`);

     spansPrice.forEach((spanPrice) => {
         spanPrice.addEventListener("click", () => {
             prices.forEach((price) => {
                 price.innerHTML = parseInt(spanPrice.innerHTML);
                 spBraces.forEach((brace) => {
                     brace.innerHTML = ++number;
                     if (price.innerHTML > maxPrice) {
                         brace.innerHTML -= 1;
                         price.innerHTML *= brace.innerHTML;
                     } else if (price.innerHTML == maxPrice) {
                         brace.innerHTML = 0;
                     }
                 });
             });
         });
     });

     decrementButtons.forEach((decrementButton) => {
         decrementButton.addEventListener("click", () => {
             prices.forEach((price) => {
                 price.innerHTML = maxPrice;
                spBraces.forEach((brace) => {
                     brace.innerHTML = 0;
                 });
             });
         });
     });
 }

 for (let i = 1; i <= arrDives.length; i++) {
     setupGame(i);
}
//Show and Hide CartContainer
let Cart = document.getElementById("CartContainer");

function ShowCart(){
    Cart.classList.add("ShowCartContainer")
}

function CloseCart(){
    Cart.classList.remove("ShowCartContainer")
}

// Show and Hide stip p

let StipP1 = document.querySelectorAll(".Help-To-Pay .p-1");
let StipP2 = document.querySelectorAll(".Help-To-Pay .p-2");
let stipDiv = document.querySelectorAll(".Help-To-Pay .stip");
let spRotate = document.querySelectorAll(".Help-To-Pay .p-1 .sp-2");
let spColor = document.querySelectorAll(".Help-To-Pay .p-1 .sp1");

let arr1 = Array.from(StipP1);
let arr2 = Array.from(stipDiv);
let arr3 = Array.from(StipP2);
let arr4 = Array.from(spRotate);
let arr5 = Array.from(spColor);

arr1.forEach(function(ele, index){
    ele.addEventListener("click", function(){
        arr2[index].classList.toggle("heightStip");
        arr3[index].classList.toggle("ShowP");
        arr4[index].classList.toggle("rotateSp2");
        arr5[index].classList.toggle("ChangeColor");
    })
})

//Add the products 

let AppendProduct = document.getElementById("AppendProduct");

let spCounter = document.getElementById("spCounter");

let iconCart = document.querySelector("#btnCart i");

let SaleBtn = document.querySelectorAll(".Steam-Games div .saleContainer .bottom-container .SaleBtn");

let price = document.querySelectorAll(".Steam-Games div .saleContainer .top-container p .price");

let images = document.querySelectorAll(".Steam-Games div .saleContainer img");

let p = document.querySelectorAll(".Steam-Games div .first-txt .p-1");

let arr6 = Array.from(SaleBtn);

let arr7 = Array.from(price);

let arr8 = Array.from(images);       

let arr9 = Array.from(p);       

let num1 = 0;
    
let num2 = 1;



arr6.forEach(function(ele,index){
    ele.addEventListener("click",function(){       
numberCounter = 0;         
spCounter.innerHTML = ++numberCounter;   
if(spCounter.innerHTML > 0){
    spCounter.style.opacity = "1";
    iconCart.style.cssText = `
    background-color: black;
    `
}else{
    iconCart.style.cssText = `
    background-color: var(--main-color);
    ` 
}  
if(num1<num2){


let container = document.createElement("div");
container.style.cssText = `width:100%;
height: 125%;
display: flex;
flex-direction: column;
gap: 15px;
position: relative;
padding-top: 40px;
`;
let image = document.createElement("img");
image.style.cssText = `
width: 95%;
height: 60%;
object-fit: cover;
margin: 0 auto;
`

let h2 = document.createElement("h2");
h2.style.cssText = `
    font-size: 22px;
    font-weight: 600;
    width: 100%;
    text-align: center;
`

image.src = arr8[index].src;
let span = document.createElement("span");
span.style.cssText = `
font-size: 15px;
font-weight: 600;
border: solid 1px #000000b0;
width: fit-content;
padding: 5px 4px;
margin-left: 8px;
position: absolute;
bottom: 6px;
`

h2.innerHTML = arr9[index].innerHTML;

let containerSpans = document.createElement("div");
containerSpans.style.cssText = `
position: absolute;
    bottom: -6px;
    display: flex;
    flex-wrap: wrap;
    width: 250px;
    column-gap: 20px;
    row-gap: 3px;
    justify-content: center;
`

span.innerHTML = `Price is ${arr7[index].innerHTML} EGP`;

let btnRemove = document.createElement("button");
btnRemove.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
btnRemove.style.cssText = `
position: absolute;
top: 8px;
right: 10px;
`

btnRemove.addEventListener("click",function(){
    iconCart.style.cssText = `
    background-color: var(--main-color);
    ` 
    spCounter.innerHTML = --numberCounter;   
    spCounter.style.opacity = "0";
    let conf = confirm("are you sure?")
    if(conf == true){
        container.remove();
        AppendProduct.style.cssText = `
        border: none;
        height: auto;
        width: auto;
        `    
        --num1
    }else if(conf == false){
        spCounter.innerHTML = ++numberCounter; 
        spCounter.style.opacity = "1";
        iconCart.style.cssText = `
        background-color: black;
        `
    return false
    }
})
 
if(AppendProduct){
    AppendProduct.style.cssText = `
    border: 1px solid black;
    height: 85%;
    width: 40%;
    `
}

let media1 = window.matchMedia("(min-width:200px) and (max-width: 600px)");
if(media1){
    container.style.cssText = `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
    padding-top: 40px;
    `
    
    h2.style.cssText = `
    font-size: 13px;
        font-weight: 600;
        width: 100%;
        text-align: center;
    `
    
    AppendProduct.style.cssText = `
    border: 1px solid black;
    height: 115%;
    width: 100%;
    margin: 0px auto;
    `
    image.style.cssText = `
    width: 95%;
    height: 77%;
    object-fit: cover;
    margin: 0px auto;
    `
}


let media2 = window.matchMedia("(min-width:461px) and (max-width: 500px)");

if(media2){

    container.style.cssText = `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
    padding-top: 40px;
    `
    
    h2.style.cssText = `
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    text-align: center;
    position: relative;
    top: 10px;
    `
    
    AppendProduct.style.cssText = `
    border: 1px solid black;
    height: 95%;
    width: 100%;
    margin: 0px auto;
    `
    image.style.cssText = `
    width: 95%;
    height: 70%;
    object-fit: cover;
    margin: 0px auto;
    `
}


let media3 = window.matchMedia("(min-width:501px) and (max-width: 700px)");

if(media3){

    container.style.cssText = `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
    padding-top: 40px;
    `
    
    h2.style.cssText = `
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    text-align: center;
    position: relative;
    top: 10px;
    `
    
    AppendProduct.style.cssText = `
    border: 1px solid black;
    height: 85%;
    width: 100%;
    margin: 0px auto;
    `
    image.style.cssText = `
    width: 95%;
    height: 70%;
    object-fit: cover;
    margin: 0px auto;
    `
}

container.appendChild(image);
container.appendChild(h2);
container.appendChild(span);
container.appendChild(btnRemove);
AppendProduct.appendChild(container);
}else if(num1==num2){
return false
}
++num1;
})
})

// translate to Arabic and English
let translateBtn1 = document.getElementById("translateBtn1");
let translateBtn2 = document.getElementById("translateBtn2");
let languages = document.getElementById("languages");

let h3Cart = document.querySelector("#nav .PurchaseInformation .Help-To-Pay h3");
let pCart = document.querySelector("#nav .PurchaseInformation .Help-To-Pay .advice");

let step1p1 = document.querySelector("#nav .PurchaseInformation .Help-To-Pay .steps .step-1 .p-1");
let step1p2 = document.querySelector("#nav .PurchaseInformation .Help-To-Pay .steps .step-1 .p-2");
let step1sp1 = document.querySelector("#nav .PurchaseInformation .Help-To-Pay .steps .step-1 .p-1 .sp1");


let step2p1 = document.querySelector("#nav .PurchaseInformation .Help-To-Pay .steps .step-2 .p-1");
let step2p2 = document.querySelector("#nav .PurchaseInformation .Help-To-Pay .steps .step-2 .p-2");
let step2sp1 = document.querySelector("#nav .PurchaseInformation .Help-To-Pay .steps .step-2 .p-1 .sp1");

let step3p1 = document.querySelector("#nav .PurchaseInformation .Help-To-Pay .steps .step-3 .p-1");
let step3p2 = document.querySelector("#nav .PurchaseInformation .Help-To-Pay .steps .step-3 .p-2");
let step3sp1 = document.querySelector("#nav .PurchaseInformation .Help-To-Pay .steps .step-3 .p-1 .sp1");

translateBtn2.addEventListener("click",function(){
    languages.innerHTML = "Translate";
    h3Cart.innerHTML = "كيف تحصل على طلبك؟";
    pCart.innerHTML = ".يجب إدخال نوع الطلب هذا يدويًا في حسابك";
    step1p1.innerHTML = `<span class="sp1">1</span> تحقق من سلة التسوق الخاصة بك`;
    
    step1p2.innerHTML = ".قم بتحرير العناصر وإضافتها أو إزالتها من سلة التسوق الخاصة بك ثم ادفع ثمنها";
    step2p1.innerHTML = `<span class="sp1">2</span> تواصل معنا`;
    step2p2.innerHTML = ".بعد التواصل بنا سنطلب منك إرسال معلومات حسابك";
    step3p1.innerHTML = `<span class="sp1">3</span> تسليم الطلب`
    step3p2.innerHTML = ".سوف نرسل لك لقطة شاشة توضح ذلك قبل وبعد شحن الطلب";
    translateBtn2.style.display = "none";
    translateBtn1.style.display = "inline";
})

 translateBtn1.addEventListener("click",function(){
    languages.innerHTML = "ترجمة";
    h3Cart.innerHTML = "How to get your Order ?";
    pCart.innerHTML = "This order type must be manually entered into your account.";
    step1p1.innerHTML = `<span class="sp1">1</span> Check your Shopping Cart. <span class="sp-2"><i class="fa-solid fa-chevron-down"></i></span>`;
    step1p2.innerHTML = "Edit and add or remove items from your cart then pay for it.";
    step2p1.innerHTML = `<span class="sp1">2</span> Contact Us <span class="sp-2"><i class="fa-solid fa-chevron-down"></i></span>`
    step2p2.innerHTML = "After you contact us we will ask you to send your account information.";
    step3p1.innerHTML = `<span class="sp1">3</span> Order Delivery. <span class="sp-2"><i class="fa-solid fa-chevron-down"></i></span>`
    step3p2.innerHTML = "We will send you a screenshot showing it before and after the order has been shipped.";
    translateBtn2.style.display = "inline";
    translateBtn1.style.cssText = `
    display: inline;
    position: relative;

    `
 })

 

// loader css
 let loader2 = document.getElementById("loader2");
 let loaderDiv2 = document.getElementById("loaderDiv2");
 document.body.style.cssText = `
 overflow-y: hidden
 `
 setTimeout(function(){
    loader2.remove();
    loaderDiv2.remove();
     document.body.style.cssText = `
     overflow-y: auto
 `;
 },2000)
 