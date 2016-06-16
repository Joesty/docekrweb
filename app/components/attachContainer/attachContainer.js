import attachContainerComponent from './attachContainer.component';

export default app => {
  app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('attach', {
        url: '/attach',
        template: '<attach></attach>'
      });
  }).directive('attach', attachContainerComponent);
}
