var MOB = MOB || {};

var router = Backbone.Router.extend({
	routes: {
		"" : "home",
		"notes" : "index",
		"notes/:id" : "show",
		"notes/new" : "new",
		"notes/:id/edit" : "edit"
	},

	initialize: function() {
		var navbar = new MOB.Navbar();
		navbar.render();
	},

	home: function() {
		var homeView = new MOB.HomeView();
		homeView.render();
	},

	index: function() {
		var notes = new MOB.Notes();
		notes.fetch({
			success: function() {		
				var notesView = new MOB.NotesView({collection: notes});
				notesView.render();
			}
		});
	},

	show: function() {

	},

	new: function() {

	}
});

MOB.Router = new router();
MOB.Router.on('route', function() {
	var navbar = new MOB.Navbar();
	navbar.render();
});

Backbone.history.start();