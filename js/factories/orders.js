orderApp.factory('OrderFactory', function(){
	var orders = [
					{customer: 'Peter Svetlichny', product_name: 'Nike Shoes', quantity: 2, date: new Date(1990, 2, 29).getTime()},
					{customer: 'Paul Newman', product_name: 'Black Belt', quantity: 7, date: new Date(1925, 0, 26).getTime()},
				 ];

	var factory = {};
	factory.getOrders = function(){
		return orders;
	}
	
	var errors = false;
	
	factory.addNewOrder = function(info){
		if (info == undefined ||
			info.customer === undefined ||
			info.product_name === undefined ||
			info.quantity === undefined)
		{
			errors = true;
		}
		else
		{
			orders.push({
							customer: info.customer,
							product_name: info.product_name,
							quantity: info.quantity,
							date: new Date().getTime()
						});
			errors = false;
		}		
	}

	factory.showErrors = function(){
		return errors;
	}

	return factory;
});