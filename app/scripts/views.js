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

		var slideDistance = '-' + (this.options.index * 800).toString() + 'px';

		$('.slider').css({'left': slideDistance});
		clearInterval(sliderInterval);
		sliderInterval = setInterval(interval, 8000)
	}
})