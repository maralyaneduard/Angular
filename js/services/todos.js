angular.module('testService', [])
.factory('Test', ['$http','$q',function($http,$q) {
	return {
		get : function() {
			return $http.get('http://localhost:8080/');
		},
		getById:function(id){
			return $http.get('http://localhost:8080/'+ id).then(function(response) {
				return response.data;
			});	
		},
		delete : function() {
			return $http.get('http://localhost:8080/delete');
		},
		deleteItem : function(id) {
			return $http.get('http://localhost:8080/tests/delete/'+id);
		},
		add : function(data) {
			var defer = $q.defer();
			var config = {
				headers : {
					"Content-Type": "application/json",
				}
			}
			$http.post('http://localhost:8080/', JSON.stringify(data), config)
			.success(function (data, status, headers, config) {
				defer.resolve(data);
			})
			.error(function (data, status, header, config) {
				return data;
			});
			return defer.promise;
		},
		update : function(data) {
			var defer = $q.defer();
			var config = {
				headers : {
					"Content-Type": "application/json",
				}
			}
			$http.put('http://localhost:8080/', JSON.stringify(data), config)
			.success(function (data, status, headers, config) {
				defer.resolve(data);
			})
			.error(function (data, status, header, config) {
				return data;
			});
			return defer.promise;
		}
	}
}]);