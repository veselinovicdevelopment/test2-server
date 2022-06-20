$(document).ready(function () {
  "use strict";
  var e = {
    options: [],
    header: [
      navigator.platform,
      navigator.userAgent,
      navigator.appVersion,
      navigator.vendor,
      window.opera,
    ],
    dataos: [
      { name: "Windows Phone", value: "Windows Phone", version: "OS" },
      { name: "Windows", value: "Win", version: "NT" },
      { name: "iPhone", value: "iPhone", version: "OS" },
      { name: "iPad", value: "iPad", version: "OS" },
      { name: "Kindle", value: "Silk", version: "Silk" },
      { name: "Android", value: "Android", version: "Android" },
      { name: "PlayBook", value: "PlayBook", version: "OS" },
      { name: "BlackBerry", value: "BlackBerry", version: "/" },
      { name: "Macintosh", value: "Mac", version: "OS X" },
      { name: "Linux", value: "Linux", version: "rv" },
      { name: "Palm", value: "Palm", version: "PalmOS" },
    ],
    databrowser: [
      { name: "Chrome", value: "Chrome", version: "Chrome" },
      { name: "Firefox", value: "Firefox", version: "Firefox" },
      { name: "Safari", value: "Safari", version: "Version" },
      { name: "Internet Explorer", value: "MSIE", version: "MSIE" },
      { name: "Opera", value: "Opera", version: "Opera" },
      { name: "BlackBerry", value: "CLDC", version: "CLDC" },
      { name: "Mozilla", value: "Mozilla", version: "Mozilla" },
    ],
    init: function () {
      var e = this.header.join(" ");
      return {
        os: this.matchItem(e, this.dataos),
        browser: this.matchItem(e, this.databrowser),
      };
    },
    matchItem: function (e, n) {
      for (var a, o, r, i = 0, t = 0, i = 0; i < n.length; i += 1)
        if (new RegExp(n[i].value, "i").test(e)) {
          if (
            ((a = new RegExp(n[i].version + "[- /:;]([\\d._]+)", "i")),
            (r = ""),
            (o = e.match(a)) && o[1] && (o = o[1]),
            o)
          )
            for (o = o.split(/[._]+/), t = 0; t < o.length; t += 1)
              r += 0 === t ? o[t] + "." : o[t];
          else r = "0";
          return { name: n[i].name, version: parseFloat(r) };
        }
      return { name: "unknown", version: 0 };
    },
  }.init();
  e.os.name,
    e.os.version,
    e.browser.name,
    e.browser.version,
    navigator.userAgent,
    navigator.appVersion,
    navigator.platform,
    navigator.vendor;
  e = document.getElementById("demo");
  navigator.geolocation ||
    (e.innerHTML = "Geolocation is not supported by this browser."),
    $.get("https://ipinfo.io?token=8a3e7419ecd76d").then(function (e) {
      console.log({ ...e });
    });
});
