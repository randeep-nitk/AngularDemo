var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            { name: "Randeep", dateOfBirth: new Date("November 2, 1985"), gender: "Male", salary: 100000 },
            { name: "Mr. X", dateOfBirth: new Date("June 5, 1988"), gender: "Male", salary: 90000.577 },
            { name: "Mrs. Y", dateOfBirth: new Date("August 21, 1982"), gender: "Female", salary: 80000 },
            { name: "Mr. A", dateOfBirth: new Date("December 2, 1985"), gender: "Male", salary: 70000 },
            { name: "Mr. B", dateOfBirth: new Date("September 2, 1984"), gender: "Male", salary: 85000 },
            { name: "Mr. Z", dateOfBirth: new Date("November 14, 1990"), gender: "Male", salary: 95000 },
            { name: "Mrs. Z", dateOfBirth: new Date("April 12, 1989"), gender: "Female", salary: 65000 }
        ];

        $scope.employees = employees;
        $scope.rowLimit = 3;
        $scope.sortOrder = "name";
    });
