let navbar_adjust = 890;

function myFunction(x) {
	if (x.matches) {
		// If media query matches
		navbar_adjust = 807;
	}
}

var x = window.matchMedia('(max-width: 800px)');
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

$(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > navbar_adjust) {
			$('body #navbar ').addClass('colorBack', 1000, 'easeOutBounce');
		}
		if ($(this).scrollTop() < navbar_adjust) {
			$('body #navbar').removeClass('colorBack', 1000, 'easeOutBounce');
		}
	});
});

$('[data-aos]')
	.parent()
	.addClass('hideOverflowOnMobile');

$('#skills-button').click(function() {
	$('#education-description').fadeOut(400);
	$('#aboutme-description').fadeOut(400);
	$('#skills-buttona').addClass('active-button');
	$('#aboutme-buttona').removeClass('active-button');
	$('#education-buttona').removeClass('active-button');

	setTimeout(function() {
		$('#skills-description').fadeIn();
	}, 400);
});
$('#education-button').click(function() {
	$('#aboutme-description').fadeOut(400);
	$('#skills-description').fadeOut(400);
	$('#education-buttona').addClass('active-button');
	$('#skills-buttona').removeClass('active-button');
	$('#aboutme-buttona').removeClass('active-button');

	setTimeout(function() {
		$('#education-description').fadeIn();
	}, 400);
});
$('#aboutme-button').click(function() {
	$('#education-description').fadeOut(400);
	$('#skills-description').fadeOut(400);
	$('#aboutme-buttona').addClass('active-button');
	$('#skills-buttona').removeClass('active-button');
	$('#education-buttona').removeClass('active-button');

	setTimeout(function() {
		$('#aboutme-description').fadeIn();
	}, 400);
});

$(document).on('click', 'a[href^="#"]', function(event) {
	event.preventDefault();

	$('html, body').animate(
		{
			scrollTop: $($.attr(this, 'href')).offset().top
		},
		500
	);
});

var granimInstance = new Granim({
	element: '#canvas-basic',
	direction: 'diagonal',
	isPausedWhenNotInView: true,
	states: {
		'default-state': {
			gradients: [
				['#ff9966', '#ff5e62'],
				['#00F260', '#0575E6'],
				['#e1eec3', '#f05053']
			]
		}
	}
});

AOS.init();

var options = {
	strings: ['', "Hi, I'm Slav! ^800 <br> I'm a Computer Science Student."],
	typeSpeed: 90
};

var typed = new Typed('.element', options);

particlesJS('particles-js', {
	particles: {
		number: {value: 150, density: {enable: true, value_area: 800}},
		color: {value: '#ffffff'},
		shape: {
			type: 'circle',
			stroke: {width: 0, color: '#000000'},
			polygon: {nb_sides: 5},
			image: {src: 'img/github.svg', width: 100, height: 100}
		},
		opacity: {
			value: 0.8,
			random: false,
			anim: {enable: false, speed: 1, opacity_min: 0.1, sync: false}
		},
		size: {
			value: 4,
			random: true,
			anim: {enable: false, speed: 40, size_min: 0.1, sync: false}
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
			attract: {enable: false, rotateX: 600, rotateY: 1200}
		}
	},
	interactivity: {
		detect_on: 'canvas',
		events: {
			onhover: {enable: true, mode: 'bubble'},
			onclick: {enable: true, mode: 'repulse'},
			resize: true
		},
		modes: {
			grab: {distance: 400, line_linked: {opacity: 1}},
			bubble: {
				distance: 100,
				size: 5,
				duration: 2,
				opacity: 10,
				speed: 3
			},
			repulse: {distance: 80, duration: 0.4},
			push: {particles_nb: 4},
			remove: {particles_nb: 2}
		}
	},
	retina_detect: true
});

const burst = new mojs.Burst({
	left: 0,
	top: 0,
	radius: {4: 60},
	angle: 45,
	children: {
		shape: 'line',
		radius: 3,
		scale: 2,
		stroke: '#FD7932',
		strokeDasharray: '100%',
		strokeDashoffset: {'-100%': '100%'},
		duration: 700,
		easing: 'quad.out'
	}
});

document.addEventListener('click', function(e) {
	burst.tune({x: e.pageX, y: e.pageY}).replay();
});
