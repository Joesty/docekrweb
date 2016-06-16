import AttachModule from './attach'
import AttachService from './attach.service';

describe('Attach', () => {
  let $rootScope, makeController;

  beforeEach(window.module('app'));

  describe('Service', () => {
    // component/directive specs
    let service = AttachService();

    it('has property: name' ,() => {
      expect(service).to.have.property('name');
    });

    it('the name property has the correct value', () => {
      expect(service.name).to.equal('attach');
    });
  });
});
