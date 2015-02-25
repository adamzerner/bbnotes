var MOB = MOB || {};

MOB.HomeView = Backbone.View.extend({
	el: $('.container'),

	template: _.template($('#home').html()),

	render: function() {
		this.$el.html(this.template());
	}
});