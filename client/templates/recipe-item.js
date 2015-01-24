Template.recipeItem.helpers({
  path: function () {
    return Router.path('event', this.recipe);
  },
  
  highlightedClass: function () {
    if (this.size === 'large')
      return 'highlighted';
  },
  
  bookmarkCount: function () {
    var count = BookmarkCounts.findOne({recipeName: this.name});
    return count && count.count;
  },

  image: function() {
    return this.image || '/img/dinners/dp1.jpg';
  }
});