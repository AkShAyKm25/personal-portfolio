document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});




var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbyNWpZFajVOjNl1iLlNvwT6pFXL4gGsy_djpZ61ke-MB4wJuJN6mdP4GF_t8xw0coF9QA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
});

document.getElementById('showMoreBtn').addEventListener('click', function() {
    var hiddenCertifications = document.querySelectorAll('.certifications-list .work.hidden');
    if (hiddenCertifications.length > 0) {
        hiddenCertifications[0].classList.remove('hidden');
        if (document.querySelectorAll('.certifications-list .work.hidden').length === 0) {
            document.getElementById('showMoreBtn').innerText = 'Show less';
        }
    } else {
        document.querySelectorAll('.certifications-list .work:not(.hidden)')[3].classList.add('hidden');
        document.getElementById('showMoreBtn').innerText = 'See more';
    }
});


document.getElementById("copyright-year").innerHTML = new Date().getFullYear();
  

  
document.addEventListener("DOMContentLoaded", function() {
    const name = "Hi, I am Akshay K M";
    const description = "Associate System Engineer at Tata Consultancy Services, demonstrating versatility and problem-solving skills across various IT roles. With certifications in Salesforce administration, ServiceMax administration, Python programming, and full-stack web development, emphasizes continuous skill enhancement.";

    const nameElement = document.getElementById('name');
    const descriptionElement = document.getElementById('description');

    function displayText(element, text) {
        const words = text.split(' ');
        let i = 0;
        const interval = setInterval(() => {
            if (i < words.length) {
                element.innerHTML += words[i] + ' ';
                i++;
            } else {
                clearInterval(interval);
            }
        }, 200);
    }

    displayText(nameElement, name);
    displayText(descriptionElement, description);
});