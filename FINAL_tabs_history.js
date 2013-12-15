
//  Tabs with History 
	
$(document).ready(function() {
		
	$('div.tabs').each(function (){
		// For each set of tabs keep track of which tab is active and it's associated content
	  	var $active, $content, $links = $(this).find('a');

		// If the location.hash matches one of the links, use that as the active tab.
	  	// If no match is found, use the home link as the initial active tab.
	  	$active = $($links.filter('[href="'+location.hash+'"]')[4] || $links[4]);
	  	$active.addClass('active');
	  	$content = $($active.attr('href'));
	
	  	// Hide the remaining content
	  	$links.not($active).each(function () {
			$($(this).attr('href')).hide();
	  	});
	
	  	// Click event handler
	  	$(this).on('click', 'a', function(e){
		
			// *HISTORY* add a hash to the URL on link click 
			history.pushState(null, null, $(this).attr('href'));
			
			// Make the old tab inactive.
			$active.removeClass('active');
			$content.hide();
		
			// Update the variables with the new link and content
			$active = $(this);
			$content = $($(this).attr('href'));
		
			// Make the tab active.
			$active.addClass('active');
			$content.show();
		
			// Prevent the anchor's default click action
			e.preventDefault();
	  	});
	
	
		// navigate to a tab when the history changes
		window.addEventListener("popstate", function(e) {
					
			//If there is a hash tag in the location - show the active content
			//if there is no hash - show default (Home)
			if(window.location.hash) {
				
				$active = $('[href=' + location.hash + ']');
				$content = $($active.attr('href'));
				$links.not($active).each(function () {
					$($(this).attr('href')).hide();
				});
				$content.show();
				
			} else {		
				$content.show($links[4]);
			}
			e.preventDefault();
		});
	});
});
