ThumbnailView = Backbone.View.extend({

	template: _.template($('#selector').text()),

	className: 'thumbnail',

	events: {
		'click': 'display'
	},

	initialize: function(options) {
		this.options = options;

		$('.mini-slider').append(this.$el);
		this.render();
	},

	render: function() {
		this.$el.append(this.template({project: this.options}))
	},

	display: function() {
		count = this.options.index

		$('.description').html('');
		$('.description').append(infoTemplate({project: this.options}));

		var slideDistance = '-' + (this.options.index * 800).toString() + 'px';

		$('.slider').css({'left': slideDistance});

		clearInterval(sliderInterval);
		clearInterval(timeOut)

		timeOut = setTimeout(function() {
			sliderInterval = setInterval(interval, 5000)
		}, 4000)
	}
})

