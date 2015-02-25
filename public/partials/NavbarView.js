var MOB = MOB || {};

MOB.Navbar = Backbone.View.extend({
	el: $('#navbar'),

	template: _.template($('#navbar-view').html()),

	render: function() {
		this.$el.html(this.template());
	}
});