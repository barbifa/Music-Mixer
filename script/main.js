(() => {

	
	const icons = document.querySelectorAll('.relax-image');

	icons.forEach(icon => icon.addEventListener('dragstart', dragStart));

	console.log("js fired");



	function dragStart(e) {
		console.log('drag starts...');
	 }


})();
