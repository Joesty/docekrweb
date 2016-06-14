import template from './attachContainer.html';
import controller from './attachContainer.controller';

let attachContainerComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'attachContainerCtrl',
    bindToController: true
  };
};

export default attachContainerComponent;
