angular.module('midterm', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                controller: 'MainCtrl',
                templateUrl: 'views/main.html'
            })
            .when('/signup', {
                controller: 'SignUpCtrl',
                templateUrl: 'views/signup.html'
            })
            .otherwise({
                redirectTo: '/'
            })
    }])

    .controller('MainCtrl', ['$scope', function($scope){
        $scope.pageTitle = 'CS4220 Midterm'
    }])

    .controller('SignUpCtrl', ['$scope', function($scope){
        $scope.moduleList=[]
        $scope.addModule = () =>{

            let count = 0;
            for(let  i = 0 ;i< $scope.moduleList.length ; i++)
            {
                if($scope.moduleList[i].moduleName === $scope.moduleName.toUpperCase())
                {
                    $scope.moduleList[i].repeat++
                    count = $scope.moduleList[i].repeat
                }
            }
            if(count === 0)
            {
                const module={
                    moduleName: $scope.moduleName.toUpperCase().trim(),
                    moduleURL: "http://"+$scope.moduleURL,
                    repeat : 1,
                    members: []
                }
                $scope.moduleList.push(module)
            }
            else
            {
                 const module={
                    moduleName: $scope.moduleName.toUpperCase().trim() + ' - Group '+ count,
                    moduleURL: "http://"+$scope.moduleURL,
                    repeat : 0,
                    members: []
                }
                $scope.moduleList.push(module)
            }

            $scope.moduleList.sort(function(a,b) {return (a.moduleName > b.moduleName) ? 1 : ((b.moduleName > a.moduleName) ? -1 : 0);} );
            $scope.moduleName = ''
            $scope.moduleURL = ''
            module = ''
        }

        $scope.removeModule= (index)=>{
            const module = $scope.moduleList[index]
            $scope.moduleList.splice(index,1)
            const name = module.moduleName.split(' ')
            if(module.repeat === 0)
            {
               for(let  i = 0 ;i<$scope.moduleList.length;i++)
               {
                    if(name[0] === $scope.moduleList[i].moduleName)
                    {
                        $scope.moduleList[i].repeat--
                    }
                    else if($scope.moduleList[i].moduleName.startsWith(name[0]))
                    {
                         const c= $scope.moduleList[i].moduleName.trim().split(' ')
                        if(name[name.length-1]< c[c.length-1] )
                            $scope.moduleList[i].moduleName = name[0] + ' - Group ' + (c[c.length-1]-1)
                    }
               }
            }

            if(module.repeat > 1)
            {
                for(let  i = 0 ;i<$scope.moduleList.length;i++)
               {
                    if($scope.moduleList[i].moduleName.startsWith(name[0]))
                        {
                            if(module.repeat === 2)
                            {
                                $scope.moduleList[i].moduleName = name[0]
                                $scope.moduleList[i].repeat = 1
                            }
                            else
                            {
                               const c= $scope.moduleList[i].moduleName.trim().split(' ')
                                if(c[c.length-1] == 2)
                                {
                                    $scope.moduleList[i].moduleName = name[0]
                                    $scope.moduleList[i].repeat = (module.repeat -1)
                                }
                                else
                                {
                                    $scope.moduleList[i].moduleName = name[0] + ' - Group ' + (c[c.length-1]-1)
                                }
                            }
                        }
                }
            }
        $scope.moduleList.sort(function(a,b) {return (a.moduleName > b.moduleName) ? 1 : ((b.moduleName > a.moduleName) ? -1 : 0);} );
        }

        $scope.addStudent = () =>{
            const student = {
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                email : $scope.email
            }
            $scope.moduleList[$scope.group].members.push(student)
            $scope.firstName= ''
            $scope.lastName = ''
            $scope.email = ''
            $scope.group = 0
            student = ''
        }

        $scope.deleteStudent = (parentIndex,index) =>{
            $scope.moduleList[parentIndex].members.splice(index,1)
        }
    }])