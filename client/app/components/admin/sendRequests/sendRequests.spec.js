import SendRequestsModule from './sendRequests'
import SendRequestsController from './sendRequests.controller';
import SendRequestsComponent from './sendRequests.component';
import SendRequestsTemplate from './sendRequests.html';

describe('SendRequests', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SendRequestsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SendRequestsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(SendRequestsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SendRequestsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SendRequestsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SendRequestsController);
      });
  });
});
