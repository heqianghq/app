angular.module('starter.controllers', [])
	.controller('cz',function($scope,$state){
		$scope.zhuce=function(){
			$state.go('denglu')
		}
	})
	.controller('cd',function($scope,$state){
		$scope.denglu=function(){
			$state.go('zhuce')
		}
	})

