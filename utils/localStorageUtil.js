class LocalStorageUtil {
	constructor() {
		this.keyName = 'products';
	}

	getProducts() {
		const productsLocalStorage = localStorage.getItem(this.keyName);
		if (productsLocalStorage !== null) {
			return JSON.parse(productsLocalStorage);
		}
		return [];
	}

	putProduct(id) {
		let products = this.getProducts();
		let pushProduct = false;
		const index = products.indexOf(id);

		if (index === -1) {
			products.push(id);
			pushProduct = true;
		} else {
			products.splice(index, 1);
		}

		localStorage.setItem(this.keyName, JSON.stringify(products));
		return {
			pushProduct,
			products
		};
	}
}
// eslint-disable-next-line no-unused-vars
const localStorageUtil = new LocalStorageUtil();
