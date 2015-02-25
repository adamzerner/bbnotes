var MOB = MOB || {};

MOB.NotesView = Backbone.View.extend({
	el: $('.container'),

	template: _.template($('#notes-view').html()),

	render: function() {
		this.$el.html(this.template({notes: this.collection}));
	},

	events:  {
		'click .close' : 'remove'
	},

	remove: function(e) {
		var self = this;
		var id = $(e.target).data('id');
		var note = self.collection.get(id);

		note.destroy({
			success: function() {
				self.render(); // rerender list
			},
			error: function() {
				alert('unable to remove note');
			}
		});
	}
});