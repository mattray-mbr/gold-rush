angular.module('myApp', []);

angular.module('myApp')
    .controller('myController', ['$scope', function($scope){

        //--------declare variable ---------------
			$scope.coordinates = [];
            $scope.xPosition = 0;
            $scope.yPosition = 0;

        //--------click function to add ----------
			$scope.doClick = function(event) { //switched to doubleclick to make it easier
                
                 var spot = {  
                    coordinateX: $scope.xPosition = (event.pageX -8), //-8 is the offset on the image
                    coordinateY: $scope.yPosition = (event.pageY -20),
                    hover: false, //switch the visibility of the comment
                    hideForm: false, //switch the visibility of the form
                 }
                
            $scope.coordinates.push(spot); //add to array coordinates
            console.log($scope.coordinates); 
            }

        //--------click function to remove ---------
            $scope.removeIt = function(index){
                $scope.coordinates.splice(index, 1);//remove coordinate if clicked
            }

        //--------hover over mark to show comment -------
            $scope.comment = function (index){
                $scope.coordinates[index].hover = !$scope.coordinates[index].hover //switch value of hover
            }
                
        //--------hide input box when done editing ---------------
            $scope.blur = function(index){
                $scope.coordinates[index].hideForm = !$scope.coordinates[index].hideForm
            }
               
}])


      