$(document).ready(function (e) {
	console.log("Hello Chloe, I have a good idea of making profits for both of us. If you are interested, please ping here through skype. my id is live:.cid.6e2e0978f28ebac1");
	$(".input-group .dropdown-item").click(function (e) {
		e.preventDefault();
		var value = $(this).text();
		$('#category').text(value);
	});

	$('.form').submit(function (e) {
		e.preventDefault();
		search();
	});

	search();

	function search() {
		var category = $("#category").text();
		if (category == 'Kategorien') {
			category = null;
		}

		var available = $('#available').prop('checked');
		var searchText = $("#search-text").val();

		var result = books;
		if (available) {
			result = result.reduce((acc, cur) => {
				if (cur.lieferbar) {
					return [...acc, cur];
				}
				return acc;
			}, []);
		}

		if (category) {
			result = result.reduce((acc, cur) => {
				if (cur.kat == category) {
					return [...acc, cur];
				}
				return acc;
			}, []);
		}

		if (searchText) {
			result = result.reduce((acc, cur) => {
				if (cur.titel.includes(searchText) || cur.autor.includes(searchText)) {
					return [...acc, cur];
				}

				return acc;
			}, []);
		}

		var html = '';
		result.forEach((user, index) => {
			html += '<div class="user-box">\
						<p><span>Autor: </span>' + user.autor + '</p>\
						<p><span>Titel: </span>' + user.titel + '</p>\
						<p><span>Isbn: </span>' + user.isbn + '</p>\
						<p><span>Price: </span>' + user.preis + '</p>\
					</div>';
		});

		$(".search-result-box").html(html);
	}
});