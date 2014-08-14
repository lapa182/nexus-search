'use strict';

/**
 * @ngdoc filter
 * @name nexusSearchApp.filter:filters
 * @function
 * @description
 * # filters
 * Filter in the nexusSearchApp.
 */
angular.module('nexusSearchApp')
  .filter('filters', function () {
    return function (input) {
      return 'filters filter: ' + input;
    };
  });
