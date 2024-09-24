document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    // Toggle navigation menu
    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    // Handle tab switching
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(event, tabname) {
        // Remove active classes from all tab links and contents
        Array.from(tablinks).forEach(link => link.classList.remove("active-link"));
        Array.from(tabcontents).forEach(content => content.classList.remove("active-tab"));

        // Add active class to the clicked tab link and show corresponding content
        event.currentTarget.classList.add("active-link");
        const activeContent = document.getElementById(tabname);
        if (activeContent) {
            activeContent.classList.add("active-tab");
        }
    }

    // Attach event listeners to tab links
    Array.from(tablinks).forEach(tablink => {
        tablink.addEventListener('click', function(event) {
            const tabName = this.innerText.toLowerCase(); // Get tab name based on text
            opentab(event, tabName);
        });
    });

    // Google Sheets form submission
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyNWpZFajVOjNl1iLlNvwT6pFXL4gGsy_djpZ61ke-MB4wJuJN6mdP4GF_t8xw0coF9QA/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Message sent successfully";
                setTimeout(() => { msg.innerHTML = ""; }, 5000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message));
    });

    // Show more certifications functionality
    const showMoreBtn = document.getElementById('showMoreBtn');
    const hiddenCertifications = document.querySelectorAll('.certifications-list .work.hidden');

    showMoreBtn.addEventListener('click', function () {
        hiddenCertifications.forEach(work => work.classList.toggle('hidden'));

        // Toggle button text between "See more" and "See less"
        if (this.innerText === 'See more') {
            this.innerText = 'See less';
        } else {
            this.innerText = 'See more';
        }
    });

    // Display current year for copyright
    document.getElementById("copyright-year").innerHTML = new Date().getFullYear();

    // Typewriter effect for name and description
    const name = "Hi, I am Akshay K M";
    const description = "Driven Salesforce Developer passionate about creating innovative solutions and enhancing user experiences. Committed to continuous learning and leveraging emerging technologies to deliver impactful projects. Let's connect and explore opportunities for collaboration!";
1
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
