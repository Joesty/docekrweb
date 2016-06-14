import template from './ipAdd.html';
import controller from './ipAdd.controller';

let ipAddComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'ipAddCtrl',
    bindToController: true
  };
};

export default ipAddComponent;
