var module = angular.module("controllers", ["services"]);

module.controller('AppCtrl', require('./AppCtrl'));
module.controller('PlayListsCtrl', require('./PlayListsCtrl'));
module.controller('PlayListCtrl', require('./PlayListCtrl'));