$(function() {
	$('.teaser').each(function() {
		var el = $(this);
		var long_text = el.html()
		var n_sentences = el.attr("data-teaser-length") || 1;
		var short_text = el.html().split(/([\.\?\!])\s/, (n_sentences * 2) ).map(function(d, i) {return i % 2 == 0 ? d : d + " " }).join("")

		if (long_text != short_text) {
			el.html('')
			el.append(
				"<span class='teaser-long'>" +
				long_text +
				"</span>" +
				'<span class="teaser-short">' +
				short_text +
				"<span class='teaser-see-more text-info' style='cursor:pointer;margin-top:5px;display:block;' " +
				"onclick='$(this).parent().hide();$(this).parent().siblings(\".teaser-long\").show();'> See more...</span>" +
				"</span>"
				)
			el.children('.teaser-long').hide()
		}
	})

	$('.teaser-see-more')
		.mouseenter(function() {$(this).css("text-decoration", "underline")})
		.mouseleave(function() {$(this).css("text-decoration", "none")})

})