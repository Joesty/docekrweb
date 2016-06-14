import attachContainerComponent from './attachContainer.component';

export default app => {
  app.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('attach', {
        url: '/attach',
        template: '<attach></attach>'
      });
  }).directive('attach', attachContainerComponent);
}
