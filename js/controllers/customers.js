orderApp.controller('CustomerController', function($scope, CustomerFactory){
	$scope.customers = CustomerFactory.getCustomers();

	$scope.errors = function(){
		return CustomerFactory.showErrors();
	};

	$scope.addCustomer = function(){
		CustomerFactory.addNewCustomer($scope.new_customer);
		$scope.new_customer = '';		
	}

	$scope.removeCustomer = function($index){
		CustomerFactory.removeCustomer($index);
	}
});