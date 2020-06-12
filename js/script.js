// AOS JS
AOS.init();

$('[data-aos]').parent().addClass('hideOverflowOnMobile');

// Scroll smooth

$(document).on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();

	$('html, body').animate(
		{
			scrollTop: $($.attr(this, 'href')).offset().top
		},
		500
	);
});

// Project data

let projects = [
	{
		name: "SCW Learning App",
		tech: ["Electron", "SQLite3", "D3"],
		description: "An app that allows sailors to test their knowledge in Seabee Combat Warfare theory. It has functionality of a quiz and collects statistics that are displayed using d3 Javascript library. Data allows users to improve in areas that they are suffering with taylored tests.",
		img: "./img/img10.png"
	},
	{
		name: "Be On The Look Out",
		tech: ["Angular", "Spring", "MSSQL Server"],
		description: "An app that allows sailors to test their knowledge in Seabee Combat Warfare theory. It has functionality of a quiz and collects statistics that are displayed using d3 Javascript library. Data allows users to improve in areas that they are suffering with taylored tests."
	},
	{
		name: "Geek Text Bookstore",
		tech: ["React", "NodeJS", "Express", "MariaDB"],
		description: "A website completed by a team of 5 students as part of Software Engineering I. Features included: Book Browsing, Filtering and Sorting, Account Creation, Multiple Address and Credit Cards storage, Saved for later lists and Cart. Update: Database server that was serving the website is disabled as the project was completed. Deploying it over Google Cloud Services is currently in the works."
	},
	{
		name: "Cook.io",
		tech: ["React", "NodeJS", "Express", "MongoDB"],
		description: "A UI/UX project under production by a team of 5 students. The websites focus lies on creating a recipe website that would encourage younger people to cook more. The application will contain a recipe database, a user system with ratings and favorites, and a widget that will allow users to add the food that they have at home and suggest recipes based on that."
	},
	{
		name: "PHP Crud",
		tech: ["MySQL", "PHP"],
		description: "Two simple websites built to demonstrate knowledge in Create, Read, Update and Delete operations using PHP with a MySQL database. Simple Bootstrap elements were used as design was not of the essence."
	},
	{
		name: "BSD Socket Chatroom",
		tech: ["Python"],
		description: "Simple Client and Server Chat Room using Python BSD sockets"
	}
]

let techUsed = ["NodeJS", "React", "Express", "MongoDB", "Spring", "Angular", "PHP", "SQL", "Electron", "Python"];

// Initial fill

projects.forEach(function (project, id) {
	fillProjectTemplate(project, id);
});

techUsed.forEach(function (element) {
	fillTech(element);
})

function fillTech(element) {
	let template = `<button type="button" class="btn btn-outline-dark btn-lg tech-button" id="${element}"
	value="${element}" >${element}
	</button>`;
	$('.selector').append(template);
}

function fillProjectTemplate(project, id) {

	var stringArray = project.tech.join(', ');
	var projectTemplate = `
				<div class="project-card-n" id="project-${id}">
					<div class="project-card-n-top">
						<h1 class="center">${project.name}</h1>
					</div>
					<div class="project-card-n-bottom">
						<h1 class="center"> ${stringArray}</h1>
						<div class="d-flex flex-column justify-content-center align-items-center"><button class="custom-button-card"><i class="fa fa-github"
									aria-hidden="true"></i> &nbsp
								GitHub</button></div>
					</div>
				</div>
	`;

	$('.project-card-container').append(projectTemplate);
	// $('.img-' + id).css('background-image', 'url(' + project.img + ')');
}

const searchTech = new Set();

$('.tech-button').on('click', function (e) {

	e.preventDefault();

	// Clear the HTML
	$('.project-card-container').empty();
	console.log(searchTech)

	// Reset the found array
	let foundProjects = [];

	// Toggle button color
	$('#' + this.id).toggleClass('btn-outline-dark');
	$('#' + this.id).toggleClass('btn-dark');

	// Removes or adds ingredient from/to filter
	if (searchTech.has($(this).val())) {
		searchTech.delete($(this).val());
		if (searchTech.size == 0) {
			projects.forEach(function (project, id) {
				fillProjectTemplate(project, id);
			});
		}
	} else {
		searchTech.add($(this).val());
	}


	// Filter only works as an OR but not AND as desired
	searchTech.forEach(function (tech) {

		projects.forEach(function (project) {
			// Actual filter
			if (project.tech.indexOf(tech) !== -1) {
				//Check if the recipe is already found
				if (foundProjects.indexOf(project) === -1) {
					foundProjects.push(project);
				}
			}
		});
	});

	// Map to html
	foundProjects.forEach(function (foundRecipe, id) {
		fillProjectTemplate(foundRecipe, id);
	});
});


// Typing logic

var options = {
	strings: ['', "Hi, I'm Slav! ^600 <br> I'm a Software Developer."],
	typeSpeed: 90,
	backSpeed: 30, backDelay: 1000,
	loop: true
};
var typed = new Typed('.typing', options);

// Particles JS

particlesJS('particles-js', {
	particles: {
		number: { value: 150, density: { enable: true, value_area: 800 } },
		color: { value: '#ffffff' },
		shape: {
			type: 'circle',
			stroke: { width: 0, color: '#000000' },
			polygon: { nb_sides: 5 },
			image: { src: 'img/github.svg', width: 100, height: 100 }
		},
		opacity: {
			value: 0.8,
			random: false,
			anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
		},
		size: {
			value: 4,
			random: true,
			anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: '#ffffff',
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 2,
			direction: 'none',
			random: false,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: { enable: false, rotateX: 600, rotateY: 1200 }
		}
	},
	interactivity: {
		detect_on: 'canvas',
		events: {
			onhover: { enable: true, mode: 'bubble' },
			onclick: { enable: true, mode: 'repulse' },
			resize: true
		},
		modes: {
			grab: { distance: 400, line_linked: { opacity: 1 } },
			bubble: {
				distance: 100,
				size: 5,
				duration: 2,
				opacity: 10,
				speed: 3
			},
			repulse: { distance: 80, duration: 0.4 },
			push: { particles_nb: 4 },
			remove: { particles_nb: 2 }
		}
	},
	retina_detect: true
});
