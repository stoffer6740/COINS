angular.module('coins.directives', [])

.directive('bdiDirective', function () {
    return {
        restrict: 'E',
        scope: {
            name: '=',
            data: '='
        },
        templateUrl: 'templates/directives/bdi-dir.html'
    }
});