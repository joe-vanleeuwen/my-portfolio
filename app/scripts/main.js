var count = 0;

var projectList = [

	{
		info:  'This just looks nice.',
		link:  'http://joe-vanleeuwen.github.io/checkerboard',
		image: '../images/some-squares.png'
	},
	{
		info:  'This is a simple to-do list using Parse.',
		link:  'http://joe-vanleeuwen.github.io/to-do-list',
		image: '../images/to-do.png'
	},
	{
		info:  'My first markup practice.',
		link:  'http://joe-vanleeuwen.github.io/mobber',
		image: '../images/mobber.png'
	},	
	{
		info:  'A group project chat program.',
		link:  'http://joe-vanleeuwen.github.io/buzzME',
		image: '../images/buzz-me.png'
	},

	// first and last are the same for sliding purposes
	{
		info:  'This just looks nice.',
		link:  'http://joe-vanleeuwen.github.io/checkerboard',
		image: '../images/some-squares.png'
	}
]

var infoTemplate  =  _.template($('#description').text());
var imageTemplate = _.template($('#image').text());

$('.description').append(infoTemplate({project: projectList[0]}));

projectList.forEach(function(project, index) {

	$('.slider').append(imageTemplate({project: project}));

	if (index < projectList.length - 1) {
		project = $.extend(project, {index: index});
		var thumbnail = new ThumbnailView(project);		
	}
})

var interval = function() {

	if (count === (projectList.length - 1)) {
		count = 0;
		$('.slider').css({'left': '0px'})
	}

	var left = $('.slider').css('left');
	left     = parseInt(left.slice(0, -2)) - 800;

	$('.slider').animate({'left': left}, 200);

	count++;

	$('.description').html('');
	$('.description').append(infoTemplate({project: projectList[count]}));
}

var sliderInterval = setInterval(interval, 8000)
// setInterval(interval, 1000)



