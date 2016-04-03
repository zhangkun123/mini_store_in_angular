orderApp.controller('OrderController', function($scope, OrderFactory, CustomerFactory){
	$scope.orders = OrderFactory.getOrders();
	$scope.customers = CustomerFactory.getCustomers();

	$scope.errors = function(){
		return OrderFactory.showErrors();
	};

	$scope.addOrder = function(){
		OrderFactory.addNewOrder($scope.new_order);
		$scope.new_order = '';		
	}

});