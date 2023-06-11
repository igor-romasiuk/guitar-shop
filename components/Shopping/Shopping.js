/* eslint-disable no-undef */
class Shopping {

	render() {

		const productsStore = localStorageUtil.getProducts();
		let htmlCatalog = '';
		let sumCatalog = 0;

		// eslint-disable-next-line no-undef
		CATALOG.forEach(({ id, name, price }) => {
			if (productsStore.indexOf(id) !== -1) {
				htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">🗑 ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} USD</td>
                    </tr>
                `;
				sumCatalog += price;
			}
		});

		const html = `
            <div class="shopping-container">
                <table>
                    ${htmlCatalog}
					<tr>
                        <td class="shopping-element__name">🗑 Сума:</td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} USD</td>
                    </tr>
                </table>
				<button class="shopping-close" onclick="root_shopping.innerHTML=''">X</button>
            </div>
        `;
		console.log(html);

		root_shopping.innerHTML = html;
	}
}
// eslint-disable-next-line no-unused-vars
const shoppingPage = new Shopping();
