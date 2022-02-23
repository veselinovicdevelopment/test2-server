$(document).ready(function (e) {
	$('.form').submit(function (e) {
		e.preventDefault();
		search();
	});

	$("#home-link").click(function (e) {
		e.preventDefault();
		$("#search-type").val("");
		$("#search-country").val("");
		search();
	});

	$.ajax({
		type: 'get',
		url: 'https://apiproxyfree.com/proxyapi?type=SOCKS5',
		headers: {
			"accept": "application/json",
			"Access-Control-Allow-Origin":"*"
		},
		"crossDomain": true,
	})
	.done(result => {
		console.log(result);
	})

	search();

	function search() {
		var searchCountry = $("#search-country").val();
		var searchType = $('#search-type').val();
		var result = ips;

		if (searchCountry) {
			result = result.reduce((acc, cur) => {
				if (cur.country.includes(searchCountry)) {
					return [...acc, cur];
				}

				return acc;
			}, []);
		}

		if (searchType) {
			result = result.reduce((acc, cur) => {
				if (cur.type.includes(searchType)) {
					return [...acc, cur];
				}

				return acc;
			}, []);
		}

		var html = '';
		result.forEach((ip, index) => {
			html += '<tr>\
						<td>' + ip.ip + '</td>\
						<td>' + ip.port + '</td>\
						<td>' + ip.continent + '</td>\
						<td>' + ip.country + '</td>\
						<td>' + ip.region + '</td>\
						<td>' + ip.city + '</td>\
						<td>' + ip.type + '</td>\
					</tr>'
		});

		$(".search-result").html(html);
	}
});