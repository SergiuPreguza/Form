var dropdown = document.getElementById('dropdown');
var input = document.getElementById('input');
window.addEventListener("click", function(event) {
	if (event.target != dropdown && event.target != input) {
		dropdown.style.display="none";
	};
});
