import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
	constructor(){
		this.siteHeader = $('.site-header');
		this.headerTrigger = $('.large-hero__title');
		this.createHeaderWaypoint();
	}

	createHeaderWaypoint() {
		var classThis = this;

		new Waypoint(
			{
				element: classThis.headerTrigger[0],
				handler: function(direction){
					if (direction == 'down'){
						classThis.siteHeader.addClass('site-header--dark');
					} else {
						classThis.siteHeader.removeClass('site-header--dark');
					}
				}
			}
		);
	}

}

export default StickyHeader;
