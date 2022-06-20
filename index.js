$(document).ready(function () {
  $.get("https://ipinfo.io?token=8a3e7419ecd76d").then(function (result) {
    console.log({ ...result });
  });
});
