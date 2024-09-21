// Toggle the menu visibility when the menu icon is clicked
document.querySelector('.bx-menu').addEventListener('click', function() {
    const menu = document.getElementById('menu'); // Selector for the menu `<ul>`
    menu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
    const menuItems = document.querySelectorAll('.menu-item');

// Function to change the color on hover
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        // Change background color and add padding and border radius on hover
        item.style.backgroundColor = 'transparent';
        item.style.cursor='pointer';
        item.style.boxShadow="2px #ffff"
        item.style.color='#ffff';
        item.style.border='2px solid #ffff'
        item.style.padding = '12px 14px'; // Increase padding on hover to expand the background
        item.style.borderRadius = '30px'; // Apply a border-radius of 30px for rounded corners
    });

    item.addEventListener('mouseout', () => {
        // Reset background color and padding when not hovering
        item.style.backgroundColor = '';
        item.style.cursor='';
        item.style.color='';
        item.style.padding = ''; // Increase padding on hover to expand the background
        item.style.borderRadius = ''; // Apply a border-radius of 30px for rounded corners
    });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navi');
    const section2 = document.getElementById('section2');
    const menuList = document.querySelector('nav ul'); // Selector for the `<ul>` in the nav

    window.addEventListener('scroll', () => {
        const section2Top = section2.offsetTop; // Get the top position of section2
        const scrollPosition = window.scrollY; // Get the current scroll position

        // Change navbar and menu background color based on scroll position
        if (scrollPosition >= section2Top) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; // Change navbar color when scrolled past section2
            navbar.style.boxShadow=' 0 0px 25px rgba(0, 0, 0, 0.2)';
            navbar.style.border='2px rgba(255, 255, 255, 0.5)';
            navbar.style.borderRight='2px rgba(255, 255, 255, 0.2)';
            navbar.style.borderBottom='2px rgba(255, 255, 255, 0.5)';
            navbar.style.backdropFilter=' blur(10px)';
            navbar.style.marginTop='0px'

        } else {
            navbar.style.backgroundColor = ''; // Change navbar color when scrolled past section2
            navbar.style.boxShadow='';
            navbar.style.border='';
            navbar.style.borderRight='';
            navbar.style.borderBottom='';
            navbar.style.backdropFilter='';
            navbar.style.marginTop='20px'
        }
    });
});document.addEventListener('DOMContentLoaded', () => {
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');
    const section4 = document.getElementById('section4');

    const home = document.getElementById('home');
    const projects = document.getElementById('projects');
    const skills = document.getElementById('skills');
    const contact = document.getElementById('contact');

    // Default style for home section
    home.style.borderBottom = '3px solid #fca5f1';
    home.style.paddingBottom = '5px';

    window.addEventListener('scroll', () => {
        const section1Top = section1.offsetTop;
        const section2Top = section2.offsetTop;
        const section3Top = section3.offsetTop;
        const section4Top = section4.offsetTop;

        const scrollPosition = window.scrollY;

        // Reset all menu items
        const resetMenuStyles = () => {
            home.style.borderBottom = 'none';
            projects.style.borderBottom = 'none';
            skills.style.borderBottom = 'none';
            contact.style.borderBottom = 'none';
        };

        // Check which section is currently in view
        resetMenuStyles();

        if (scrollPosition >= section1Top && scrollPosition < section2Top) {
            home.style.borderBottom = '3px solid #fca5f1';
            home.style.paddingBottom = '5px';
        } else if (scrollPosition >= section2Top && scrollPosition < section3Top) {
            projects.style.borderBottom = '3px solid #fca5f1';
            projects.style.paddingBottom = '5px';
        } else if (scrollPosition >= section3Top && scrollPosition < section4Top) {
            skills.style.borderBottom = '3px solid #fca5f1';
            skills.style.paddingBottom = '5px';
        } else if (scrollPosition >= section4Top) {
            contact.style.borderBottom = '3px solid #fca5f1';
            contact.style.paddingBottom = '5px';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const pr1 = document.querySelectorAll('.prct1');
    const pr2 = document.querySelectorAll('.prct2');
    const pr3 = document.querySelectorAll('.prct3');
    const pr4 = document.querySelectorAll('.prct4');
    const pr5 = document.querySelectorAll('.prct5');

    const section2 = document.querySelector('.section3'); // Assurez-vous que '.section3' est une seule section

    const addExpandClass = () => {
        pr1.forEach(el => el.classList.add('expand'));
        pr2.forEach(el => el.classList.add('expand'));
        pr3.forEach(el => el.classList.add('expand'));
        pr4.forEach(el => el.classList.add('expand'));
        pr5.forEach(el => el.classList.add('expand'));
    };

    const removeExpandClass = () => {
        pr1.forEach(el => el.classList.remove('expand'));
        pr2.forEach(el => el.classList.remove('expand'));
        pr3.forEach(el => el.classList.remove('expand'));
        pr4.forEach(el => el.classList.remove('expand'));
        pr5.forEach(el => el.classList.remove('expand'));
    };

    window.addEventListener('scroll', () => {
        const section2Top = section2.offsetTop; // Get the top position of section2
        const scrollPosition = window.scrollY; // Get the current scroll position

        if (scrollPosition >= section2Top) {
            addExpandClass();
        } else {
            removeExpandClass();
        }
    });
});
