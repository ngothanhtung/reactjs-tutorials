import * as types from '../constants/ActionTypes';


const baseUrl = "http://localhost:9000/product";

const products = (state = [], action) => {
	switch (action.type) {
		case types.ADD_PRODUCT:
			// INSERT
			var insertData = JSON.stringify({
				name: action.name,
				price: action.price,
				discount: 0,
				imageUrl: '#'
			});

			fetch(baseUrl, {
				method: 'POST',
				body: insertData,
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			})
				.then(res => res.json())
				.then((resultJson) => {
					return [
						...state,
						{
							name: action.name,
							price: action.price
						}
					];
				}).catch((err) => {
					console.log(err);
				});
			return state;
		case types.GET_PRODUCTS:
		console.log(types.GET_PRODUCTS);
			fetch(baseUrl + '/all')
			.then(res => res.json())
			.then((data) => {
				console.log(data);
				return [
					...state,
					data
				];
			});
			return state;			
		default:
			return state;
	}
}

export default products;
