// NavBar when Scroll
let navBar = document.getElementById("nav");
let btnToUp = document.getElementById("ToUp")

window.addEventListener("scroll",function(){
    if(scrollY >= 100){
navBar.classList.add("classNav");
btnToUp.style.cssText = `
opacity: 1;
display: inline;
`

    }else{
        navBar.classList.remove("classNav");
        btnToUp.style.cssText = `
        opacity: 0;
        display: none;
`
    }
})

btnToUp.onclick = () =>{
    window.scroll({
        top:0,
        behavior: "smooth"
    })
}

// Show and Close menu
let ul2 = document.getElementById("ul2");
let ul3 = document.getElementById("ul3");
let ul4 = document.getElementById("ul4");
let span1 = document.getElementById("sp1");
let span2 = document.getElementById("sp2");
let span3 = document.getElementById("sp3");

function ClickMenue1(){
    ul2.classList.toggle("classMenue");
    span1.classList.toggle("rotateSpan")
}

function ClickMenue2(){
    ul3.classList.toggle("classMenue");
    span2.classList.toggle("rotateSpan")
}

function ClickMenue3(){
    ul4.classList.toggle("classMenue");
    span3.classList.toggle("rotateSpan")
}

let BtnNav = document.getElementById("btnNav");
let menu = document.getElementById("Menu");

BtnNav.addEventListener("click",function(){
    menu.classList.add("showMenu")
})

let BtnMenu = document.getElementById("btnMenue");

BtnMenu.addEventListener("click",function(){
    menu.classList.remove("showMenu")
})

// Show and hide asidewishlist
let BtnFavorite = document.getElementById("BtnFavorite");
let asidewishlist = document.getElementById("asidewishlist");
let Closewishlist = document.getElementById("Closewishlist");

function OpenWishlist(){
  asidewishlist.classList.add("ShowWishlist")  
}

function CloseWishlist(){
    asidewishlist.classList.remove("ShowWishlist")  
}

//  Show and hide form
let btnSearch = document.getElementById("btnSearch")
let form = document.getElementById("Form");

btnSearch.onclick = () =>{
    form.classList.toggle("ShowForm")
}

// slider images

let sliderContainer =document.getElementById("sliderContainer");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let icon1 = document.getElementById("i1");
let icon2 = document.getElementById("i2");
let icon3 = document.getElementById("i3");
let icon4 = document.getElementById("i4");
let icon5 = document.getElementById("i5");

img1.addEventListener("click",function(){
    sliderContainer.style.cssText =`
    background-image: url(images/MINE.jpg);
    `
    icon1.style.color = "black";
    icon2.style.color = "white";
    icon3.style.color = "white";
    icon4.style.color = "white";
    icon5.style.color = "white";
})

img2.addEventListener("click",function(){
    sliderContainer.style.cssText =`
    background-image: url(images/Redemption_II.jpg);
    `
    icon2.style.color = "black";
    icon1.style.color = "white";
    icon3.style.color = "white";
    icon4.style.color = "white";
    icon5.style.color = "white";
})

img3.addEventListener("click",function(){
    sliderContainer.style.cssText =`
    background-image: url(images/roblox.jpg);
    `
    icon3.style.color = "black";
    icon1.style.color = "white";
    icon2.style.color = "white";
    icon4.style.color = "white";
    icon5.style.color = "white";
})

img4.addEventListener("click",function(){
    sliderContainer.style.cssText =`
    background-image: url(images/Fortnite.jpg);
    `
    icon4.style.color = "black";
    icon1.style.color = "white";
    icon2.style.color = "white";
    icon3.style.color = "white";
    icon5.style.color = "white";
})

img5.addEventListener("click",function(){
    sliderContainer.style.cssText =`
    background-image: url(images/Pubg-mobile.jpg);
    `
    icon5.style.color = "black";
    icon1.style.color = "white";
    icon2.style.color = "white";
    icon3.style.color = "white";
    icon4.style.color = "white";
})

// add Wishlist to localstorage

let spCount = document.getElementById("spCount");
let btnAdd = document.querySelectorAll("#Main div .container .btns-rated .Add");
let pWishlist = document.querySelectorAll("#Main div .container .pWishlist");
let links = document.querySelectorAll("#Main > div .container > a");
let containerAll = document.getElementById("containerAll");

let ArrbtnAdd = Array.from(btnAdd);
let ArrpWishlist = Array.from(pWishlist);
let arrLinks = Array.from(links);

let num = 0;

let arr = JSON.parse(localStorage.getItem("Wishlist"))||[]

ArrbtnAdd.forEach(function(ele,index){
    let num1 = 0;
    let num2 = 1;
ele.addEventListener("click",function(){
   if(num1<num2){
    // save spCount.innerHTML in localStorage  
    spCount.innerHTML = ++num;
    localStorage.setItem("spCount",JSON.stringify(spCount.innerHTML));
    let WishlistObj = {
        "a":ArrpWishlist[index].innerHTML,
        "href":arrLinks[index].href
    }
    arr.push(WishlistObj);
    localStorage.setItem("Wishlist",JSON.stringify(arr));
   }else{
       return false
   }
   createWishlist()
   ++num1
})
})

function removeContainer(i){
 arr.splice(i,1);
 localStorage.setItem("Wishlist",JSON.stringify(arr));
 createWishlist();
 spCount.innerHTML = --num;
 localStorage.setItem("spCount",JSON.stringify(spCount.innerHTML));
}

function createWishlist(){
    containerAll.innerHTML = ""; 
   for(let i = 0 ; i<arr.length ; i++){
    containerAll.innerHTML += `
    <div style="display: flex;border: solid 1px #00000082;padding: 6px 5px;width: 95%;
    margin: 5px auto;align-items: center;justify-content: space-between;"><a style="font-size: 12px;color: var(--main-color)" href="${arr[i].href}">${arr[i].a}</a> <button style="font-size: 12px;color: black;font-weight: 600" onclick="removeContainer(${i})">Remove</button></div>
    `
   }
}

function SaveSpCount(){
num = JSON.parse(localStorage.getItem("spCount"));
spCount.innerHTML = JSON.parse(localStorage.getItem("spCount"));
}

SaveSpCount();
createWishlist();
// Animation div

let divs1 = document.getElementsByClassName("div1");
let divs2 = document.getElementsByClassName("div2");
let divs3 = document.getElementsByClassName("div3");
let divs4 = document.getElementsByClassName("div4");
let divs5 = document.getElementsByClassName("div5");
let divs6 = document.getElementsByClassName("div6");
let divs7 = document.getElementsByClassName("div7");
let divs8 = document.getElementsByClassName("div8");
let divs9 = document.getElementsByClassName("div9");
let divs10 = document.getElementsByClassName("div10");
let AboutSec = document.getElementById("AboutSection");
let contactUs = document.getElementById("contactUs");
let footer = document.getElementById("footer");


window.addEventListener("scroll",function(){
        if(scrollY >= 3038){
            AboutSec.style.opacity = "1"
        }else{
            AboutSec.style.opacity = "0"
        }

        if(scrollY >= 3557){
            contactUs.style.opacity = "1"
        }else{
            contactUs.style.opacity = "0"
        }

        if(scrollY >= 4100){
            footer.style.opacity = "1"
        }else{
            footer.style.opacity = "0"
        }

    if(scrollY >= 800){
for(let i = 0; i < divs1.length ; i++){
divs1[i].style.cssText = `
opacity:1;
transform: translatex(0px)!important
`
}
    }

    if(scrollY >= 800){
        for(let i = 0; i < divs2.length ; i++){
        divs2[i].style.cssText = `
        opacity:1;
        transform: translateY(0px)!important
        `
        }
        }

        if(scrollY >= 1256){
            for(let i = 0; i < divs3.length ; i++){
            divs3[i].style.cssText = `
            opacity:1;
            transform: translateY(0px)!important
            `
            }
            }

            if(scrollY >= 1256){
                for(let i = 0; i < divs4.length ; i++){
                divs4[i].style.cssText = `
                opacity:1;
                transform: translateY(0px)!important
                `
                }
                }

                if(scrollY >= 1728){
                    for(let i = 0; i < divs5.length ; i++){
                    divs5[i].style.cssText = `
                    opacity:1;
                    transform: translateY(0px)!important
                    `
                    }
                   }

                   if(scrollY >= 1728){
                    for(let i = 0; i < divs6.length ; i++){
                    divs6[i].style.cssText = `
                    opacity:1;
                    transform: translateY(0px)!important
                    `
                    }
                   }

                   if(scrollY >= 2400){
                    for(let i = 0; i < divs7.length ; i++){
                    divs7[i].style.cssText = `
                    opacity:1;
                    transform: translateY(0px)!important
                    `
                    }
                   }

                   if(scrollY >= 2400){
                    for(let i = 0; i < divs8.length ; i++){
                    divs8[i].style.cssText = `
                    opacity:1;
                    transform: translateY(0px)!important
                    `
                    }
                   }

                   if(scrollY >= 2810){
                    for(let i = 0; i < divs9.length ; i++){
                    divs9[i].style.cssText = `
                    opacity:1;
                    transform: translateY(0px)!important
                    `
                    }
                   }

                   if(scrollY >= 2810){
                    for(let i = 0; i < divs10.length ; i++){
                    divs10[i].style.cssText = `
                    opacity:1;
                    transform: translateY(0px)!important
                    `
                    }
                   }
})

// loader css
let loader = document.getElementById("loader");
let loaderDiv1 = document.getElementById("loaderDiv1");
document.body.style.cssText = `
overflow-y: hidden
`
setTimeout(function(){
    loader.remove();
    loaderDiv1.remove();
    document.body.style.cssText = `
    overflow-y: auto
`;
},2000)