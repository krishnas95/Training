window.s=[];
window.country=[];
temp=0;
var app = angular.module('app', ['ngRoute']);
app.controller('main',function($scope,$http){
	$http.get('http://country.io/names.json').then(function success(output){
		console.log('Name Success');
		temp++;
		s.push(output.data);
		country = output.data;
		arr=[];
		for(var x in output.data){
  			arr.push(output.data[x]);
		}	
		$scope.countries= arr;
		$http.get(' http://country.io/iso3.json').then(function success(output){
		console.log('ISO3 Success');
		temp++;
		//console.log(output.data);
		s.push(output.data);
		$http.get('http://country.io/capital.json').then(function success(output){
		console.log('Capital Success');
		temp++;
		//console.log(output.data);
		s.push(output.data);
		$http.get('http://country.io/currency.json').then(function success(output){
		console.log('Currency Success');
		temp++;
		//console.log(output.data);
		s.push(output.data);
		$http.get('http://country.io/phone.json').then(function success(output){
		console.log('Phone Success');
		temp++;
		//console.log(output.data);
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

function getKey(newVal)
{
		
		for(var x in country){
  			if(country[x].toLowerCase() == newVal.toLowerCase())
  			{	
  				//console.log(x);
  				return x;
		
			}	
	}
		return -1 ;
}
$scope.$watch('search', function(newVal, oldVal){
    var key=getKey(newVal);
    //console.log(key);
    //console.log(temp);
    if(key!=-1 && temp==5)
    {
    $scope.name=s[0][key];
    $scope.iso=s[1][key];
    $scope.capital=s[2][key];
    $scope.currency=s[3][key];
    $scope.phone=s[4][key];
	}
});  

	
});
