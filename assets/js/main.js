// typed js

var typed = new Typed(".auto-type", {
  strings: ['Web Developer', 'Programmer', 'Three.js Learner'],
  typeSpeed: 45,
  backSpeed: 45,
  loop:true
});





/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 390) {
      current = section.getAttribute('id');
    }
  })

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.classList.contains(current)) {
      link.classList.add('active');
    }
  })
})

// function linkAction() {
//   /*Active link*/
//   navLinks.forEach((n) => n.classList.remove("active"));
//   this.classList.add("active");

//   /*Remove menu mobile*/
const navMenu = document.getElementById("nav-menu");
//   navMenu.classList.remove("show");
// }
navLinks.forEach((n) => n.addEventListener("click", () => { navMenu.classList.remove("show") }));

/*===== COPY Email =====*/
const copy = document.getElementById("copy");
copy.addEventListener("click", () => {
  navigator.clipboard.writeText("subharoopkabi@gmail.com");
  copy.innerHTML = "copied";
  setTimeout(() => {
    copy.innerHTML = null;
  }, 1000);
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home-title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".home-social-icon", { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal(".about-img", {});
sr.reveal(".about-subtitle", { delay: 400 });
sr.reveal(".about-text", { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal(".skills-subtitle", {});
sr.reveal(".skills-text", {});
sr.reveal(".skills-data", { interval: 100 });
// sr.reveal(".skills-img", { delay: 600 });

/*SCROLL projects*/
sr.reveal(".project-img", { interval: 200 });

/*SCROLL CONTACT*/
  // sr.reveal(".contact-input", { interval: 200 });

  function myFunction(){
 
    var element = document.body;
    element.classList.toggle("dark-mode")

  }

  function myFunction1(){
    
    var image = document.getElementById("gif");

    if(image.src.match('assets/img/46207-programmer-1.gif')){
      image.src = "assets/img/programming1.gif";
      
    }
       
    else{
      image.src="assets/img/46207-programmer-1.gif";
    }
       
    
  }


  // var messageArr = ["MERN Developer", "Frontend Developer", "Backend Developer"];
  // var textPosition = 0;
  // var speed = 200;

  // typewriter = () => {
  //   // for(let i = 0; i < messageArr.length; i++) {
   
  //   if(textPosition ++  != messageArr[0].length)
  //       setTimeout(typewriter, speed)
  // }


  // window.addEventListener("load" , typewriter);


function Send(){
  console.log("function call");
  
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
 
   var body = "Name : " + name + "<br/> Email : " + email + "<br/> Phone number : " + phone + "<br/> Mesaage : " + message ;

   console.log(body);

   Email.send({
    SecureToken : "b172f7d1-b495-45e4-a488-5f290b827634",
    // Host : "smtp.elasticemail.com",
    // Username : "subharoopkabi@gmail.com",
    // Password : "5351D0DA151D417F88C6B24706D6DC7AD9D7",
    To : 'subharoopkabi@gmail.com',
    From : "subharoopkabi@gmail.com",
    Subject : "A new message from " + name,
    Body : body
}).then(
  message => {
    if(message=='OK'){
      swal("Successfull", "Your Message sent successfully....!", "success");
    }
  }
);
}


// 5351D0DA151D417F88C6B24706D6DC7AD9D7 - Password