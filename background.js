function injectedFunction() {
	const getNextSibling = (elem, selector) => {
		// Get the next sibling element
		var sibling = elem.nextElementSibling;

		// If the sibling matches our selector, use it
		// If not, jump to the next sibling and continue the loop
		while (sibling) {
			console.log(sibling.style.zIndex);
			if (sibling.matches(selector) && sibling.style.zIndex === '2147483646') return sibling;
			sibling = sibling.nextElementSibling;
		}
	};

	const hola = document.querySelector('#_hola_popup_iframe__');
	const div = getNextSibling(hola, 'div');
	hola && hola.remove();
	div && div.remove();
}

chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: injectedFunction,
	});
});
