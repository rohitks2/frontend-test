
// The states module
angular.module('states')


.controller('statesController', function ($scope, statesModelSvc) {

    
	statesModelSvc.getAllStatesAbbreviations().then(function (data) {
        $scope.statesAbbreviations = data;
    }, function (error) {
        $scope.dataError = error;
    });

    $scope.screens = ["browse", "detail"]; 
    $scope.screenHeaders = [
        "States in US, Want to learn more"
    ];
    $scope.currentScreen = $scope.screens[0]; 
    $scope.currentScreenHeader = $scope.screenHeaders[0];

    
    $scope.setScreen = function (index)
    {
        if ($scope.currentScreen != $scope.screens[index])
        {
            $scope.currentScreen = $scope.screens[index];
            $scope.currentScreenHeader = $scope.screenHeaders[index];
        }

        if (index == 0)
        { $scope.currentState = ''; }         
    };

   
    $scope.getScreen = function ()
    {
        if($scope.currentScreen == $scope.screens[0]){
        	return "html/modules/states/stateViewsDiff/statesGrid.html";
        }else
        	return "html/modules/states/stateViewsDiff/statesDetail.html";
    	
    };

    $scope.stateSelected = function(stateAbbr)
    {
        $scope.setScreen(1);
    }
})

