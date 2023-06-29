function showAlert() {
    var alertBox = document.querySelector(".alert");
    alertBox.style.display = "block";
  }
  
  var closeButton = document.querySelector(".alert .close");
  closeButton.onclick = function() {
    alertBox.style.display = "none";
  }
  