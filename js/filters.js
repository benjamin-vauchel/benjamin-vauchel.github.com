angular.module('websitesappFilters', [])
.filter('favorite', function(){
	return function(input) {
		return input ? '\u272D' : '';
	}
})
.filter('check', function() {
  return function(input) {
    return input ? 'checked' : '';
  };
})
.filter('join', function() {
  return function(input) {
    return input.join(', ');
  };
})
.filter('percent', function() {
  return function(input, val) {
    return input / val * 100;
  };
});