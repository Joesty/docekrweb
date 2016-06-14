import ipAddComponent from './ipAdd.component';

export default app => {
  app.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('ip', {
        url: '/ip-add',
        template: '<ip></ip>' //Essentially Treats the Home Directive as the Route View.
      });
  }).directive('ip', ipAddComponent);
}