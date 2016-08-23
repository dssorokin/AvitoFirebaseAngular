class HomeController {
  constructor(productService, User, $q, $rootScope) {
    "ngInject";
    
    this.name = 'home';
    this.User = User;
    this.productService = productService;
    this.$q = $q;
    
    this.$rootScope = $rootScope;
  }
  $onInit() {
    // this.products = [];
    // this.productService.getAll()
    //   .then((products) => {
    //     this.products = products;
    //     var promises = [];
    //     products.forEach((product) => {
    //       var promise = this.User.getUserInfoById(product.user);
    //       promises.push(promise);
    //     });
    //     return this.$q.all(promises);
    //   })
    //   .then((users) => {
    //     console.log(users);
    //     this.products.map((product, index) => {
    //       product.user = users[index]["username"];
    //       return product;
    //     });
    //   });
  }
}

export default HomeController;
