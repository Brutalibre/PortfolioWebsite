// Get all elements with class .image-zoom to listen on them.
Array.from(document.getElementsByClassName("image-zoom")).forEach(el => {
  el.addEventListener("click", (e) => { 
    e.preventDefault();
    ZoomOnImage(el); 
  }, false);
});


function ZoomOnImage (item) {
  var img;


  // Check if user has clicked on the <img> or on the <a>. We need the <img> tag.
  if (item.classList.contains == "image") {
    img = e.target;
  }
  else {
    img = item.getElementsByClassName('image')[0];
  }

  // Change the "isZoomed" boolean to toggle <img> width and height.
  if (img.getAttribute("isZoomed") == "true") {
    img.classList.remove("image-zoomed");
    img.setAttribute("isZoomed", false);
  }
  else {
    img.classList.add("image-zoomed");
    img.setAttribute("isZoomed", true);
  }
}