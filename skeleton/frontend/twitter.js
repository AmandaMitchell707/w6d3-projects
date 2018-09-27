const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

$(() => $('.follow-toggle').each(function(i, button) {
  let newButton = new FollowToggle(button);
}));

$(() => $('.users-search').each(function(i, search) {
  let newSearch = new UsersSearch(search);
}));