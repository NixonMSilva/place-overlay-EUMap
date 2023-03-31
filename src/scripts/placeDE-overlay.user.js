// ==UserScript==
// @name         r/placeEU Template (fork from r/placeDE Template)
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  try to take over the canvas!
// @author       mp1404 / NixonMSilva
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/NixonMSilva/place-overlay-EUMap/blob/main/src/scripts/placeDE-overlay.user.js
// @downloadURL  https://github.com/NixonMSilva/place-overlay-EUMap/blob/main/src/scripts/placeDE-overlay.user.js
// ==/UserScript==
let url = "https://github.com/NixonMSilva/place-overlay-EUMap/blob/main/src/resources/overlay.png"
//url = "https://i.imgur.com/0fRq2nu.png"
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
            (function () {
                const i = document.createElement("img");
                i.src = url;
                i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
                return i;
            })())
    }, false);
}
