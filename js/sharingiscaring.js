/* required vars & functions */
function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}
var w = h = null;

/* create required elements */
const d = document.createElement("div");
d.id = "popup";
const sstyle = document.createElement("style");

window.onload = function init(size="lg", dark=false, font="sans-serif", displayLogo=true) {
    /*
        default id is container
        default url is current url
        large by default, or screen size, whichever is is smaller
        "sans-serif" font is used on popup by default
        logo is displayed by default
    */

    /* define sizes */
    if(size == "sm") {
        w = "100px";
        h = "200px";
    }
    if(size == "md") {
        w = "200px";
        h = "400px";
    }
    if(size == "lg") {
        w = "300px";
        h = "500px";
    }
    if(size == "xl" || size == "1xl") {
        w = "500px";
        h = "700px"
    }
    if(size == "2xl" || size == "xxl") {
        w = "600px";
        h = "1000px";
    }
    if(w == null) { w = "300px"; }
    if(h == null) { h = "500px"; }

    if(dark) {
        d.style.background = "rgba(0,0,0,0.5)";
        d.style.color = "#fff";
    } else {
        d.style.background = "rgba(255,255,255,0.5)";
        d.style.border = "2px solid #f0f0f0";
        d.style.color = "#000";
    }

    if(displayLogo) {
        water = "block";
    } else {
        water = "none";
    }

    d.style.margin = "10px";
    d.style.marginLeft = "0";
    d.style.marginRight = "0";
    d.style.borderRadius = "10px";
    d.style.width = w;
    d.style.height = h;
    d.style.position = "absolute";
    d.style.maxWidth = "100vw";
    d.style.padding = "10px";
    d.style.fontFamily = font;

    sstyle.innerHTML = `/* SharingIsCaring sharing popup box */ .sic_popup_watermark { position: absolute; bottom: 2px; right: 5px; display: ${water}; } .sic_popup_input { width: 100%; margin: 0; overflow: auto; padding: 0; padding-bottom: 5px; padding-top: 5px; }`;
    document.head.appendChild(sstyle);
}


/* Share popup box will open */
function openShare(id="container", id2="popup", url = window.location, w, h) {
    if(document.body.contains(d)) return d.remove();

    d.innerHTML = `
        <h2>Share this page</h2>
        <p>Share this page to your friends!</p>
        <input type="text" value="${url}" class="sic_popup_input">
        <p class="sic_popup_watermark">⚡ by SharingIsCaring</p>
    `;

    document.getElementById(id).appendChild(d);
    
    var bounding = d.getBoundingClientRect();
    if (bounding.top < 0) {
        // Top is out of viewport
        d.style.top = "0";
    }

    if (bounding.left < 0) {
        // Left side is out of viewoprt
        d.style.left = "0";
    }

    if (bounding.bottom > (window.innerHeight || document.documentElement.clientHeight)) {
        // Bottom is out of viewport
        d.style.button = "0";
    }

    if (bounding.right > (window.innerWidth || document.documentElement.clientWidth)) {
        // Right side is out of viewport
        d.style.right = "0";
    }
}