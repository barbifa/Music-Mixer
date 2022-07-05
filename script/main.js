(() => {
	// set up 

	let icons = document.querySelectorAll('.relax-image'),
	dropzone = document.querySelectorAll('.relax-drop');
	

	function allowDrag(event) {
		console.log('started draggin me');

		// create a reference to the element we're dragging so we can retrieve it later
		event.dataTransfer.setData('draggedEl', this.id);
	}

	function allowDragOver(event) {
		// override default behaviour on certain elements when an event happens
		event.preventDefault();
		console.log('started draggin over me');
	}

	function allowDrop(event) {
		event.preventDefault();
		let droppedElId = event.dataTransfer.getData('draggedEl');
		console.log("dropped");
		// retrieve the dragged el by its ID, and then put it inside the current drop zone

	
		this.appendChild(document.querySelector(`#${droppedElId}`));

		// match the dragged id with the id of the song
		let targetAudio = document.querySelector(`audio[id="${droppedElId}"]`);
		targetAudio.currentTime = 0;
		targetAudio.play();
	}





	icons.forEach(piece => piece.addEventListener('dragstart', allowDrag));
	// set up the drop zone event handling
	dropzone.forEach(zone => {
	zone.addEventListener('dragover', allowDragOver);
	zone.addEventListener('drop', allowDrop);
	});
})();
