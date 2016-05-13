'use strict';

angular.module('app').directive('validation', function ($compile) {
    return {
        restrict: 'A',
        scope: true,
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            scope.ngModelCtrl = ngModelCtrl;
            scope.attrs = attrs;

            var el =
                '<ng-messages for="ngModelCtrl.$error" ng-if="ngModelCtrl.$dirty">' +
                '<ng-message when="required">This field is required</ng-message>' +
                '<ng-message when="minlength">Input must exceed {{attrs.minlength}} characters</ng-message>' +
                '<ng-message when="maxlength">Input must not exceed {{attrs.maxlength}} characters</ng-message>' +
                '<ng-message when="pattern">Input must not</ng-message>' +
                '</div>';

            element.after($compile(el)(scope));
        }
    };
});