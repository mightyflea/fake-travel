import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
//	constructor(){
//		this.itemsToReveal = $('.feature-item');
	constructor($elements, offset){
		this.itemsToReveal = $elements;
		this.offsetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially(){
		this.itemsToReveal.addClass('reveal-item');
	}

	//gives each selected element a trigger that is then used to reaveal the element
	createWaypoints(){
		//need to preserve class "this" context before changed by the each loop
		var that = this;
		
		this.itemsToReveal.each(function(){
			//	The Waypoint below creates a new closue, and, therefore, a new "this",
			//so we must pass the current "this" to another variable name that will be
			//unique in the new closure.
			var currentItem = this;

			new Waypoint({
				element: currentItem,
				handler: function(){
					$(currentItem).addClass('reveal-item--is-visible');
				},
				offset: that.offsetPercentage //when top of element hits a point 85% of the way down the page
			});
		});
	}
}

export default RevealOnScroll
