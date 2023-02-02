var aux=document.getElementById('dropdown');
window.addEventListener("click", function(event) {
	if (event.target!=aux){
		aux.style.display="none";
	};
});