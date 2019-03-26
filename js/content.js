var elements = document.getElementsByTagName('a');
for(var i = 0; i < elements.length; i++) {
	var href_original = elements[i].getAttribute("href");
	var text_original = elements[i].text;

	if(href_original && href_original.match(/(http(s)?:\/\/)?(www\.)?((\*{7}\.[a-z]{2,})|(\*{6}\.be))\/watch\?v=.*/)) {
		var href_replaced = href_original.replace(/\*{6,7}/, "youtube");
		var text_replaced = text_original.replace(/\*{6,7}/, "youtube");

		if(href_original !== href_replaced) {
			elements[i].setAttribute("href", href_replaced);

			if(elements[i].firstChild.nodeType === Node.TEXT_NODE) {
				elements[i].text = text_replaced;
			}

			// if(text_original != text_replaced) {
			// 	console.log("Replaced href %s with %s and text %s with %s.", href_original, href_replaced, text_original, text_replaced);
			// } else {
			// 	console.log("Replaced href %s with %s.", href_original, href_replaced);
			// }
		}
	}
}

var elements = document.querySelectorAll('[id^="post_message_"]');
for(var i = 0; i < elements.length; i++) {
	var post_original = elements[i].innerHTML;

	if(post_original) {
		var post_replaced = post_original;
		var matches = Array.from(post_original.matchAll(/\[ame\](.*?)\[\/ame\]/g));

		if(matches.length != 0) {
			for(var j = 0; j < matches.length; j++) {
				var links = Array.from(matches[j]);
				var ame = links[0];
				var link = links[1];
				var video_id = link.replace(/.*watch\?v=/, "");

				link = link.replace(/\*{6,7}/, "youtube");
				post_replaced = post_replaced.replace(ame, "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/" + video_id + "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>");
			
				// console.log("Added embedded video %s for post %s.", link, elements[i].id.replace("post_message_", ""));
			}
		}

		if(post_original !== post_replaced) {
			elements[i].innerHTML = post_replaced;
		}
	}
}