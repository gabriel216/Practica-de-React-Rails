// Simple counter example

const incrementCounter = document.getElementById('increment');
const decrementCounter = document.getElementById('decrement');
const input = document.getElementById('inputCounter');

const counter = {
	initialize() {
		incrementCounter.addEventListener('click', ( event ) => {
			event.preventDefault();
			const currentValue = input.value;
			input.value = parseInt( currentValue, 0 ) + 1;
		})

		decrementCounter.addEventListener('click', ( event ) => {
			event.preventDefault();
			const currentValue = input.value;
			input.value = parseInt( currentValue, 0 ) - 1;
		})
	}
}

export default counter;