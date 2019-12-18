$(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 712) {
			$('body #navbar ').addClass('colorBack');
		}
		if ($(this).scrollTop() < 712) {
			$('body #navbar').removeClass('colorBack');
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
	strings: ['', "Hi, I'm Slav ^1000 <br> I'm a Computer Science Student"],
	typeSpeed: 90
};

var typed = new Typed('.element', options);
