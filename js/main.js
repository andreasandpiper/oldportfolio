var portfolioInfo = {
    'memoryMatch': {
        'title': 'Memory Match',
        'short_description': "An elemental version of the classic, memory match game.",
        'tech_description': "The game is written in Javascript, with JQuery events and DOM manipulation. I used Object Oriented Programming to split up the functionality of the different parts of the game. The game object handles the logic such as telling the card object when to flip over, when the Cow object needs to produce methane gas, and the game stats when to add, subtract, or use a resource. It also instructs the Curium countdown object to start counting down or make the cow neon. Since there are many complicated parts to the game, creating seperate objects helped to keep the code organized and readable. I used Flask to serve the different pages, and plan to incorporate a leaderboard model in the next version.",
        'other_description': "I wanted to create a game in which the user passively learns about elements of the periodic table. The player must find all the element matches before losing all three lives. However, the game board can change based on finding molecule combinations. For example, Hydrogen and Chlorine create hydrochloric acid, which causes the player to loose a life. The game incorporate animated effects, countdowns, and board shuffles. I was inspired to create a science game based on my background of being a science teacher. The periodic table is iconic to science, and I wanted to create a game where people could learn some information about elements and molecules by playing a fun game.", 
        'technologies': 'Python, Flask, Heroku, Jinja2, HTML, CSS, JavaScript, jQuery, Git',
        'liveSiteUrl': 'https://memorymatch-flask.herokuapp.com/',
        'githubUrl': 'https://github.com/andreasandpiper/flask-memorymatch',
        'imageSrc': 'img/images/elementGame.jpg'
    },
    'hawkandheron': {
        'title': 'The Hawk and Heron',
        'short_description': "A user-friendly website to display a collection of handmade crafts.",
        'tech_description': "The website uses HTML and CSS to style the page and elements while using bootstrap to create responsive containers. I used Jekyll site generator as the framework for the project. Jekyll incorporates Liquid rendering to easily loop through a list of images and render them to the page using the same HTML template. I created reusable templates for the header and footer for each page. ",
        'other_description': "The Hawk and Heron was inspired by my need to create a simple website to display my crafts. The focus of the website is to display images of products and provide links to social media pages.",
        'technologies': 'HTML, CSS, Bootstrap, Jekyll, Liquid templating, GitHub Pages',
        'liveSiteUrl': 'http://thehawkandheron.com',
        'githubUrl': 'https://github.com/andreasandpiper/andreasandpiper.github.io',
        'imageSrc': 'img/images/hawkandheron.jpg'
    },
    'sbbikepark': {
        'title': 'Santa Barbara Bike Park',
        'short_description': "An informative Wordpress website about an upcoming project in Santa Barbara",
        'tech_description': "I used Wordpress as the CMS, Content Management System so others could also contribute content to the website. I incorporated a child theme to customize the CSS and add additional features to the homepage. I added the static background and sponsors bar using a php file. I currently maintain the website by updating content when needed and performing backups of the website.",
        'other_description': "Mountain biking is a big part of my life, and I am involved with the local group in Santa Barbara, updating their website and email and social media marketing. One of the projects was to build a new website to promote the building of pumptracks in the community. ",
        'technologies': 'CSS, HTML, Wordpress, sFTP',
        'liveSiteUrl': 'https://www.sbbikepark.com',
        'githubUrl': '',
        'imageSrc': 'img/images/sbbikepark.jpg'
    },
    'beetsandeats': {
        'title': 'Beets & Eats',
        'short_description': "Plan a night on the town, without having to walk too far!",
        'tech_description': "Beets and Eats uses data from GoogleMaps, Ticketmaster and Yelp to populate a map with restaurants and bars surrounding a desired event venue. We used AJAX to make cross-origin requests and passed specific data such as a zip code for the location. To use the application, users enter a location and date in which we request information from Ticketmaster to populate a list of all the events occuring on the specified date. When users click on the event, the website scrolls automatically to the map, which becomes populated with nearby restaurants and lounges from the Yelp API. We used closures to encapsulate data for each element on the page so when it is clicked, it shows the correct data. Users can click on the icons to learn more about each location. ",
        'other_description': "The project was accomplished during a 2 day Hackathon. The initial preparation was creating quick wireframes and a SCRUM list of all the desired features. We created a repository on GitHub, and included a Javascript file incorporating JSDocs to specify the location and description for each function to be written. Once set up, we delegated tasks and a sprint using Meistertask. We used Git as version control, and worked off of a development branch with seperate branches for each feature. By using these task managing systems, we were able to produce a functioning and appealing web application!",
        'technologies': 'HTML, CSS, JQuery, AJAX, Google Maps API, Yelp API, Ticketmaster API, Bootstrap',
        'liveSiteUrl': 'https://beetsandeats.andreawayte.com',
        'githubUrl': 'https://github.com/andreasandpiper/c12.17Hackathon2',
        'imageSrc': 'img/images/beetsandeats.jpg'
    },
    'closeyourtabs': {
        'title': 'Close Your Tabs',
        'short_description': "A Chrome extension to keep tabs on your tabs.",
        'tech_description': "Close Your Tabs incorporates a React website, Node.js Javascript environment with mySQL database, and a Chrome extension. The three components join together to create a system to keep track of the current tabs in a Chrome browser session and access those tabs on a different browser or device. The extension uses Chrome Platform APIs to listen for events within the browser, such as creating a new tab, moving a tab, deleting a tab, etc. The extension popup displays the all the current tabs and color codes them according to the time elapsed since last accessed. We used Google Oauth and passport for user authentication and cookie sessions. The extension is able to know if a user is logged in by injecting content scripts into the website to listen for the user’s actions within the website. This also enables injecting scripts to allow the user to manipulate their tabs in the browser from within the website. The extension communicates with the remote server using XHR requests.",
        'other_description': "The idea for Close Your Tabs spawned from observing developers with “mountains” of tabs, in which titles can become difficult to read when searching for a particular website open. My contribution was developing the extension and writing the FAQ React component as well as UI/UX design for the project. We used Agile methodologies to create an increasingly more complex product and Git as version control. Meistertask was the central hub for delegating tasks, reporting bugs, and keeping track of excel sheets and API documentation we created.",
        'technologies': 'Javascript, ReactJS, Chrome Extension, Chrome Platform API, XMLHTTPRequests, HTML5, CSS3, Node, MySQL, Google OAuth, Axios ',
        'liveSiteUrl': 'http://www.closeyourtabs.com',
        'githubUrl': 'https://github.com/andreasandpiper/closeyourtabs-chrome-extension',
        'imageSrc': 'img/images/closeyourtabs.jpg'
    }
}

$(document).ready(function () {


    /* Scroll hire me button to contact page */
    $('.hire-me').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });

    $('.navbar-nav > li > a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        $('.navbar-collapse').removeClass('in');
        $('.navbar-collapse').attr('aria-expanded', false);
        return false;
    })

    $(window).on('scroll', function () {
        $('.navbar-collapse').removeClass('in');
        $('.navbar-collapse').attr('aria-expanded', false);
        return false;
    })

    /* Magnific Popup */
    $('.grid-wrapper').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    /* Sticky menu */
    $(".navbar").sticky({
        topSpacing: 0
    });


    /* Scroll spy and scroll filter */
    $('#main-menu').onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollThreshold: 0.5,
        scrollSpeed: 750,
        filter: "",
        easing: "swing"
    });


    $('.overlay').on('click', showProjectInfo)



});

function showProjectInfo() {
    var projectInfo = $(this).closest('.portfolio-div').attr('data-title');
    var project =  portfolioInfo[projectInfo]; 
    var projectTitle = project.title;
    var projectImage = project.imageSrc;
    var projectTech = project.technologies;
    var liveLink = project.liveSiteUrl;
    var gitHubLink = project.githubUrl;
    var general_desc = project.short_description;
    var tech_desc = project.tech_description;
    var other_desc = project.other_description;
    $("#portfolioModal").find('.modal-title').text(projectTitle);
    $("#portfolioModal").find('.modal-body img').attr('src', projectImage);
    $("#portfolioModal").find('.modal-body span').html(projectTech);
    $("#portfolioModal").find('.modal-body .live').attr('href', liveLink);
    $("#portfolioModal").find('.modal-body .github').attr('href', gitHubLink);
    $("#portfolioModal").find('.modal-subtitle').text(general_desc);
    $("#portfolioModal").find('div.description > p:nth-child(2)').text(tech_desc);
    $("#portfolioModal").find('.modal-body .description p:last-child').text(other_desc);

    if (gitHubLink === '') {
        $("#portfolioModal").find('.modal-body .github').hide();
    } else {
        $("#portfolioModal").find('.modal-body .github').show();
    }
    $('#portfolioModal').modal('show');
}