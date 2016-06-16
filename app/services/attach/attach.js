import attachService from './attach.service';

export default app => {
  app.factory('attach', attachService);

  if (ENVIRONMENT === 'test') {
    require('./attach.test.js');
  }
}
