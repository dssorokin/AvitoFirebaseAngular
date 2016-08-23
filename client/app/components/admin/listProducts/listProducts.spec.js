import ListProductsModule from './listProducts'
import ListProductsController from './listProducts.controller';
import ListProductsComponent from './listProducts.component';
import ListProductsTemplate from './listProducts.html';

describe('ListProducts', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ListProductsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ListProductsController();
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
      expect(ListProductsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ListProductsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ListProductsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ListProductsController);
      });
  });
});
