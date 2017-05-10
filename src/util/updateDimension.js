function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);        

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
};

  // To change heights on resize
  export default function updateDimension() {
    let leftsidebar = document.getElementById('leftsidebar'),
      rightsidebar = document.getElementById('rightsidebar'),
      tracklist = document.getElementById('tracklist');

    let scrollbarWidth = getScrollbarWidth();
    if(window.innerWidth < 1280) {
      leftsidebar.style.height = `${window.innerHeight -80 - scrollbarWidth}px`;
      rightsidebar.style.height = `${window.innerHeight - 80 - scrollbarWidth}px`;
      tracklist.style.height = `${window.innerHeight - 80 - scrollbarWidth}px`;
    } else {
      leftsidebar.style.height = `${window.innerHeight -80}px`;
      rightsidebar.style.height = `${window.innerHeight - 80}px`;
      tracklist.style.height = `${window.innerHeight - 80}px`;
    }
  }