var Rect 	= require('./module.js'),
	assert 	= require('assert')

describe('Rect', function() {
	it('area of rect should be 200', function() {
		var r = new Rect(10, 20);
		assert.equal(r.area(), 200);
	});
});