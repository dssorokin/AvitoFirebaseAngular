import HomeController from './home.controller';


describe('Home', () => {
  let ctrl;
  let productService, productServiceMock;

  beforeEach(() => {
    productService = {
      createProduct: (product) =>{},
      getProductsByUser: () => {},
      getAll: () => {},
      getProductById: () => {},
      changeUidOnUsername: () => {},
      getProductsId: () => {}
    };
    productServiceMock = sinon.mock(productService);
    ctrl = new HomeController(productService);
  });
  var $rootScope;

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
  }));

  it('controller has name propery', () => {
    expect(ctrl.name).to.be.equal('home');
  });

  it('controller has name propery', () => {
    expect(ctrl).to.exist;
  });

  it('should have products', () => {
    $rootScope.$apply();
    expect(ctrl.products).to.exist;
  });


  // describe('Module', () => {
  //   // top-level specs: i.e., routes, injection, naming
  //   it('default component should be home', () => {
  //     $location.url('/');
  //     $rootScope.$digest();
  //     expect($state.current.component).to.eq('home');
  //   });
  // });


});
