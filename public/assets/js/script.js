// let profil = document.querySelector('.contentProfil');
// let profilTitle = document.getElementById('profil');
// let profilTitle1 = document.getElementById('profil1');

// let skills = document.querySelector('.contentSkills');
// let skillsTitle = document.getElementById('skills');
// let skillsTitle1 = document.getElementById('skills1');

// let way = document.querySelector('.contentWay');
// let wayTitle = document.getElementById('way');
// let wayTitle1 = document.getElementById('way1');

// let hobbies = document.querySelector('.contentHobbies');
// let hobbiesTitle = document.getElementById('hobbies');
// let hobbiesTitle1 = document.getElementById('hobbies1');

// let portfolio = document.querySelector('.contentPortfolio');
// let portfolioTitle = document.getElementById('portfolio');
// let portfolioTitle1 = document.getElementById('portfolio1');

// let contact = document.querySelector('.contentContact');
// let contactTitle = document.getElementById('contact');
// let contactTitle1 = document.getElementById('contact1');


// profilTitle.addEventListener("click", () => {
//   if (getComputedStyle(profil).display != "none") {
//     profil.style.display = "none";
//   } else {
//     profil.style.display = "block";
//   }
// })

// profilTitle1.addEventListener("click", () => {
//   if (getComputedStyle(profil).display = "none") {
//     profil.style.display = "block";
//   }
// })


// skillsTitle.addEventListener("click", () => {
//   if (getComputedStyle(skills).display != "none") {
//     skills.style.display = "none";
//   } else {
//     skills.style.display = "block";
//   }
// })

// skillsTitle1.addEventListener("click", () => {
//   if (getComputedStyle(skills).display != "none") {
//     skills.style.display = "none";
//   } else {
//     skills.style.display = "block";
//   }
// })

// wayTitle.addEventListener("click", () => {
//   if (getComputedStyle(way).display != "none") {
//     way.style.display = "none";
//   } else {
//     way.style.display = "block";
//   }
// })

// wayTitle1.addEventListener("click", () => {
//   if (getComputedStyle(way).display != "none") {
//     way.style.display = "none";
//   } else {
//     way.style.display = "block";
//   }
// })

// hobbiesTitle.addEventListener("click", () => {
//   if (getComputedStyle(hobbies).display != "none") {
//     hobbies.style.display = "none";
//   } else {
//     hobbies.style.display = "block";
//   }
// })

// hobbiesTitle1.addEventListener("click", () => {
//   if (getComputedStyle(hobbies).display != "none") {
//     hobbies.style.display = "none";
//   } else {
//     hobbies.style.display = "block";
//   }
// })

// portfolioTitle.addEventListener("click", () => {
//   if (getComputedStyle(portfolio).display != "none") {
//     portfolio.style.display = "none";
//   } else {
//     portfolio.style.display = "block";
//   }
// })

// portfolioTitle1.addEventListener("click", () => {
//   if (getComputedStyle(portfolio).display != "none") {
//     portfolio.style.display = "none";
//   } else {
//     portfolio.style.display = "block";
//   }
// })

// contactTitle.addEventListener("click", () => {
//   if (getComputedStyle(contact).display != "none") {
//     contact.style.display = "none";
//   } else {
//     contact.style.display = "block";
//   }
// })

// contactTitle1.addEventListener("click", () => {
//   if (getComputedStyle(contact).display != "none") {
//     contact.style.display = "none";
//   } else {
//     contact.style.display = "block";
//   }
// })

const others = document.querySelector('.others');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    // console.log(scrollTop, clientHeight);

    const topElementToTopViewport = others.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 2){
        others.classList.add('active')
    }
})


const back = document.querySelector('.back');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    // console.log(scrollTop, clientHeight);

    const topElementToTopViewport = back.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1.8){
        back.classList.add('active')
    }
})


const front = document.querySelector('.front');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    // console.log(scrollTop, clientHeight);

    const topElementToTopViewport = front.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1.6){
        front.classList.add('active')
    }
})


// navbar aparait au scroll vers le haut 

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }

  prevScrollpos = currentScrollPos;
}
