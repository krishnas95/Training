window.s=[];
window.country=[];
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
        $routeProvider. 
           when('/', {
             template: '<h3>Country</h3><ul><li ng-repeat="country in countries | filter:search"><a href="#/{{country}}">{{country}}</a></li><ul>',
             //templateUrl:'main.html',
             controller: 'mainctrl'
           }).
           when('/:param', {
             template: '<p>Name:{{name}}</p><p>ISO:{{iso}}</p><p>Capital:{{capital}}</p><p>Currency:{{currency}}</p><p>Phone:{{phone}}</p>',
             //templateUrl:'detail1.html',
             controller: 'detailctrl'
           }).
           otherwise({
             redirectTo: '/'
           });
      });

app.controller('mainctrl',function($scope,$http){
	$http.get('http://country.io/names.json').then(function success(output){
		s.push(output.data);
		country=output.data;
		arr=[];
		for(var x in output.data){
  			arr.push(output.data[x]);
		}	
		$scope.countries= arr;
		$http.get(' http://country.io/iso3.json').then(function success(output){
		s.push(output.data);
		$http.get('http://country.io/capital.json').then(function success(output){
		s.push(output.data);
		$http.get('http://country.io/currency.json').then(function success(output){
		s.push(output.data);
		$http.get('http://country.io/phone.json').then(function success(output){
		s.push(output.data);
	},
	function error()
	{
		console.log('Phone Failure');
	});
	},
	function error()
	{
		console.log('Currency Failure');

	});
	},
	function error()
	{
		console.log('Capital Failure');

	});
	},
	function error()
	{
		console.log('ISO3 Failure');

	});
	},
	function error()
	{
		console.log('Name Failure');

	});


	
});
app.controller('detailctrl',function($scope,$http,$routeParams)
	{
		$http.get('http://country.io/names.json').then(function success(output){
		s.push(output.data);
		country = output.data;
		$http.get(' http://country.io/iso3.json').then(function success(output){
		s.push(output.data);
		$http.get('http://country.io/capital.json').then(function success(output){
		s.push(output.data);
		$http.get('http://country.io/currency.json').then(function success(output){
		s.push(output.data);
		$http.get('http://country.io/phone.json').then(function success(output){
		s.push(output.data);
		getKey=function(countryname)
		{
	
			for(var x in country)
			{	
  					if(country[x].toLowerCase() == countryname.toLowerCase())
  					{	
  						$scope.search=countryname;
  						$scope.name=s[0][x];
    					$scope.iso=s[1][x];
    					$scope.capital=s[2][x];
    					$scope.currency=s[3][x];
    					$scope.phone=s[4][x];
					}	
				}
		}
		getKey($routeParams.param);
		
	},
	function error()
	{
		console.log('Phone Failure');

});
	},
	function error()
	{
		console.log('Currency Failure');

});
	},
	function error()
	{
		console.log('Capital Failure');

});
	},
	function error()
	{
		console.log('ISO3 Failure');

});
	},
	function error()
	{
		console.log('Name Failure');

});
    
	});
