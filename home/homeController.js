app.controller('homeController', function($scope,$http) {
   // alert("homeController");  
$scope.search = "";
$scope.photoList = [];
$scope.tempPhotoList = [];

//To get list of photos and their details
$scope.getPhotoList = function(){
    $http({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/photos'
        }).then(function (response){ 
            // $scope.photoList = angular.copy(response.data);
            $scope.photoList  = response.data.map((rec)=>{
                rec.isCompared = false;
                return rec;
            })
         },function (error){
            console.log(error);
     });

}//end of getPhotoList
$scope.getPhotoList();

//$scope.action = "compare"
$scope.addPhoto = function(item,index){

    $scope.photoList[index].isCompared = true;
    $scope.tempPhotoList.push(item);
    console.log("$scope.tempPhotoList",$scope.tempPhotoList)

}//end of compareOrRemovePhoto

$scope.removePhoto = function(item,index){

   let tempIndex = $scope.tempPhotoList.findIndex((obj)=> obj.id == item.id )
    if(tempIndex > -1){
        $scope.photoList[index].isCompared = false;
        $scope.tempPhotoList.splice(tempIndex,1)
    }
     
     
  }



});//end of homeController