/* eslint-disable no-undef */
function render() {
	const productsStore = localStorageUtil.getProducts();
	
	headerPage.render(productsStore.length);
	productsPage.render();
}

render();
