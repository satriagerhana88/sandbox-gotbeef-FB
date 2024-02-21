// Filter
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

// bottom sheet
function show() {
            let container = document.querySelector ('#overlay');
            let bottomSheet = document.querySelector ('#overlay #bottomSheet');

            container.classList.add('active');
            setTimeout(() => {
                bottomSheet.classList.add('active');
            }, 1);
        }

        function hideOverlay() {
            let container = document.querySelector ('#overlay');
            let bottomSheet = document.querySelector ('#overlay #bottomSheet');

            bottomSheet.classList.remove('active');

            setTimeout(() => {
                container.classList.remove('active')
            }, 400)
        }