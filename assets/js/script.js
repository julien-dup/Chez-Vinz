

/* Function Modal */

let card = document.querySelectorAll(".card2")
let modal = document.querySelector(".modal")


card.forEach(element => {
   element.addEventListener("click", function(){
        console.log("ok")
        modal.style.display = "flex"
        modal.addEventListener("click", function(){
            modal.style.display = "none"
        })
    })
});


/* Function Toggle Menu Burger */

function toggleMenu() {
    const navbar = document.querySelector(".navbar")
    const burger = document.getElementById("containMenuBurger")
    burger.addEventListener("click", () => {
        navbar.classList.toggle("show_nav")
        burger.classList.toggle("show_nav")
        document.addEventListener("scroll", function() {    
            var intElemScrollDown = document.body.scrollTop || document.documentElement.scrollTop;
            if (intElemScrollDown > 250) {
                document.querySelector(".show_nav .navbar_links" ).style.top = "10%"
                document.querySelector(".show_nav .navbar_links" ).style.height = "calc(100vh - 10%)"
            } else {
                document.querySelector(".show_nav .navbar_links").style.top = "30%"
                document.querySelector(".show_nav .navbar_links" ).style.height = "calc(100vh - 30%)" 
            }
        })
    })
}

toggleMenu()


/* MOVER SCROLL */

const first = document.querySelector(".navbar_link_first")
const second = document.querySelector(".navbar_link_second")
const third = document.querySelector(".navbar_link_third")
const fourth = document.querySelector(".navbar_link_fourth")
const fifth = document.querySelector(".navbar_link_fifth")
const sixth = document.querySelector(".navbar_link_sixth")
const navbar = document.querySelector(".navbar")
const burger = document.getElementById("containMenuBurger")


first.addEventListener("click", function(){
    navbar.classList.toggle("show_nav")
    burger.classList.toggle("show_nav")
    document.getElementById("slogan").scrollIntoView({behavior: 'smooth',  block: "end"})
})

second.addEventListener("click", function(){
    navbar.classList.toggle("show_nav")
    burger.classList.toggle("show_nav")
    document.getElementById("containMenuCard").scrollIntoView({behavior: 'smooth',block: "start"})
})

third.addEventListener("click", function(){
    navbar.classList.toggle("show_nav")
    burger.classList.toggle("show_nav")
    document.getElementById("Nous_trouver").scrollIntoView({behavior: 'smooth', block: "start"})
})


fourth.addEventListener("click", function(){
    navbar.classList.toggle("show_nav")
    burger.classList.toggle("show_nav")
    document.getElementById("Nous_contacter").scrollIntoView({behavior: 'smooth', block: "start"})
})

fifth.addEventListener("click", function(){
    navbar.classList.toggle("show_nav")
    burger.classList.toggle("show_nav")
    document.getElementById("Notre_histoire").scrollIntoView({behavior: 'smooth' , block: "start"})
})

sixth.addEventListener("click", function(){
    navbar.classList.toggle("show_nav")
    burger.classList.toggle("show_nav")
    document.getElementById("La_Carte").scrollIntoView({behavior: 'smooth' , block: "start"})
})


/* HEADER EFFECT */

// document.addEventListener("scroll", function() {    
// var intElemScrollDown = document.body.scrollTop || document.documentElement.scrollTop;
// console.log(intElemScrollDown)
// if (intElemScrollDown > 250) {
//     console.log("ok")
//     document.getElementById("header").style.height = "30%" 
//     document.getElementById("logo").style.width = "30%"   
//     document.getElementById("header").style.justifyContent = "space-around"
  
//     } else {
//         document.getElementById("header").style.height = "30%"  
//         document.getElementById("logo").style.width = "70%"   
//         document.getElementById("header").style.justifyContent = "none"
//     }
// })




/* Card Generator*/

    /* chargement du json preparations */
fetch("../assets/json/preparations.json")
.then(response => {
return response.json();
})
.then(menu => {

    /* affichage des données */
    menu.forEach(element =>  {
        document.getElementById("containMenuCard").innerHTML += `
        <div class="card">
                <div class="photoCard">
                    <img src="assets/img/${element[0]}" alt="logo" width="100%" height="100%">
                </div>
                <div class="titleCard">
                    <p>"${element[1]}"</p>
                </div>
                <div class="descriptionCard">
                    <p>"${element[2]}"</p>
                </div>
                <div class="price">
                    <p>"${element[3]}"</p>
                </div>
            </div>
        `
    })

})



/* info emplacements */
let emplacementSelect = document.getElementById('emplacementSelect')
let recap = document.getElementById('recap')

emplacementSelect.addEventListener('click', function(){

    /* appel du json emplacements  */
        fetch("../assets/json/emplacements.json")
        .then(response => {
        return response.json();
        })
        .then(emplacements => {
      
        /* affichage des données */
        recap.innerHTML =``
        let index = emplacementSelect.value -1
        console.log(index)
        console.log(emplacements[index].length)
        recap.innerHTML +=`<div class="recapCat">
        <div class="recapTitle"> <p>Emplacements : </p></div> <div class="recapAdress"><p>${emplacements[index][0]}</p></div>
        </div>
        <div class="recapCat">
        <div class="recapTitle"> <p> Adresse : </p></div><p> <div class="recapAdress"><p>${emplacements[index][1]}</p></div>
        </div>`
        for ( let i = 3 ; i < emplacements[index].length ; i ++) {
            console.log('ok' +i)
            console.log(emplacements[index][i])
            recap.innerHTML += `
                                <div class="recapCatCreneaux">
                                <div class="recapTitle"><p>Créneau : </p> </div> <p> ${emplacements[index][i]}</p>
                                </div>
                                `
                                
        }
        recap.innerHTML += `
        <div id="googleMap">
        <iframe src=${emplacements[index][2]}
        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"</iframe>
        </div>
        `
    })
})

