  // Get the modal
  var modal = document.getElementById("myModal");
  
  var body = document.getElementById("body")

  //Getting the button that opens then the modal
  var openButton = document.getElementById("openButton");

    //Getting the button that opens then the modal
    var logo = document.getElementById("nav-img");
  
  //On click of the close icon, the modal dissappears
  openButton.addEventListener('click',displayModal);
  // When the user clicks the button, open the modal 

  body.addEventListener('click',closeModal);
  
  // Function that removes the modal i.e makes the display none
  function displayModal() {
    modal.style.display = "block";
    logo.style.display = "none"
    openButton.style.display = "none"
    body.style.backgroundColor = "#fafafa"
  }

  function closeModal() {
    modal.style.display = "none";
    logo.style.display = "block"
    openButton.style.display = "block"
  }
 
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    logo.style.display = "block"
    openButton.style.display = "block"
    }
 
  }
  
    var slideIndex = 0;
    function checkValue(){
    if(window.innerWidth <= '600'){
      var slideIndex = 0;
    showSlides();
    }
    else 
    {
      var slides = document.getElementsByClassName("mySlides");
      slides.style.display = "block";
    }
    }
    
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 8000); 
    }