import $ from 'jquery';
/*jquery-smooth-scroll needs jquery to be called 'jquery', duplicating here */
import jquery from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor(){
		//sticky header
		this.siteHeader = $('.site-header');
		this.headerTrigger = $('.large-hero__title');
		this.createHeaderWaypoint();
		//link highlights
		this.pageSections = $('.page-section');
		this.headerLinks = $('.primary-nav a');
		this.createPageSectionWaypoints();
		//smooth scrolling
		this.addSmoothScrolling();
	}

	addSmoothScrolling(){
		this.headerLinks.smoothScroll();
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

	//highlight anchor links when anchor waypoints are hit, unhighlight any others
	createPageSectionWaypoints(){
		var classThis = this;

		this.pageSections.each(function(){
			var currentPageSection = this;

			new Waypoint({
				element: currentPageSection,
				handler: function(direction){
					if (direction == 'down'){
//					var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
						var matchingHeaderLink = $(currentPageSection).data('matching-link');
						classThis.headerLinks.removeClass('is-current-link');
						$(matchingHeaderLink).addClass('is-current-link');
					}
				},
				offset: '18%'
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction){
					if (direction == 'up'){
//					var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
						var matchingHeaderLink = $(currentPageSection).data('matching-link');
						classThis.headerLinks.removeClass('is-current-link');
						$(matchingHeaderLink).addClass('is-current-link');
					}
				},
				offset: '-40%'
			});
		});
	}

}

export default StickyHeader;
