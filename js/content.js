var elements = document.getElementsByTagName('a');

for(var i = 0; i < elements.length; i++) {
	var href_original = elements[i].getAttribute("href");
	var text_original = elements[i].text;

	if(href_original && href_original.match(/(http(s)?:\/\/)?(www\.)?\*{7}\.[a-z]{2,}\/watch\?v=.*/)) {
		var href_replaced = href_original.replace(/\*{7}/, "youtube");
		var text_replaced = text_original.replace(/\*{7}/, "youtube");

		if(href_original !== href_replaced) {
			elements[i].setAttribute("href", href_replaced);
			elements[i].text = text_replaced;

			if(text_original != text_replaced) {
				console.log("Replaced href %s with %s and text %s with %s.", href_original, href_replaced, text_original, text_replaced);
			} else {
				console.log("Replaced href %s with %s.", href_original, href_replaced);
			}
		}
	}
}
