orderApp.factory('CustomerFactory', function(){
	var customers = [
						{name: 'Peter Svetlichny', created_at: new Date(1990, 2, 29).getTime()},
						{name: 'Paul Newman', created_at: new Date(1925, 0, 26).getTime()},
						{name: 'Gary Oldman', created_at: new Date(1958, 2, 21).getTime()}
					];

	var factory = {};
	factory.getCustomers = function(){
		return customers;
	}
	
	var errors = false;
	
	factory.addNewCustomer = function(info){
		var inArray = false;
		for (var x in customers){
			if (angular.lowercase(customers[x].name) == angular.lowercase(info.name)){
				inArray = true;
				errors = true;
			}
		}
		if (inArray === false && info.name !== ''){
			customers.push({
				name: info.name,
				created_at: new Date().getTime()
			});
			errors = false;
		}
	}

	factory.showErrors = function(){
		return errors;
	}

	factory.removeCustomer = function($index){
		customers.splice($index, 1);
	}

	return factory;
});