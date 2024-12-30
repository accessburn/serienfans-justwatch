// ==UserScript==
// @name         Finde Film-/Serienfans in JustWatch
// @description  Fügt Link zu JustWatch.org in Filmfans/Serienfans hinzu
// @version      0.1
// @copyright    2024 by accessburn
// @author       accessburn
// @license      GNU General Public License v2.0
// @match        https://filmfans.org/*
// @match        https://serienfans.org/*
// @homepageURL https://github.com/accessburn/serienfans-justwatch
// @downloadURL https://github.com/accessburn/serienfans-justwatch/blob/main/Finde_Film--Serienfans_in_JustWatch.user.js
// @updateURL   https://github.com/accessburn/serienfans-justwatch/blob/main/Finde_Film--Serienfans_in_JustWatch.user.js
// @run-at document-end
// ==/UserScript==
(function() {
    var justwatch = document.createElement("div");
    const text = document.querySelector('#milk > div.content.splitview > h2').textContent;
    const searchlink = "https://www.justwatch.com/de/Suche?providers_type=all&q=" + encodeURIComponent(text);
    justwatch.innerHTML = "<div style=\"text-align:center\"><a href=\"" + searchlink + "\" target=\"_blank\"><img title=\"In JustWatch suchen\" src=\"https://www.justwatch.com/appassets/img/logo/JustWatch-logo-small.png\" style=\"width: 90%;padding-top: 20px;\" /></a></div>";
    document.querySelector('#milk > div.content.splitview > div:nth-child(3) > div:nth-child(1)').appendChild (justwatch);
})();
