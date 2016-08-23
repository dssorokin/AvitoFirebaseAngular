class SingleProductController {
  constructor($stateParams,
              requestService,
              authService,
              productService,
              $state,
              $uibModal) {
    "ngInject";
    this.requestService = requestService;
    this.authService = authService;
    this.productService = productService;
    this.$state = $state;
    this.$uibModal = $uibModal;

    this.productId = $stateParams.id;
    this.showError = false;
    
  }

  $onInit() {
    this._isProductBelongsToCurrentUser()
      .then((result) => {
        this.error = result;
      });
  }
  
  redirectToRegister() {
    this.$state.go('register');
  }


  makeRequest() {
    if(!this.isUserLoggedIn()) {
      this.redirectToRegister();
      return;
    } else if(this.error) {
      this.showError = true;
      return;
    }
    else {
      var senderId = this.authService.getCurrentUserId();
      this.productService.getProductById(this.productId)
        .then((product) => {
          var distId = product.user;
          this.requestService
            .createRequest(senderId, distId, this.productId)
            .then(() => this.showModal());
        });
    }
  }

  showModal() {
    var modalInstance = this.$uibModal.open({
      animation: true,
      template: `<h1>Ваша заявка была успешно отправлена!</h1>`
    });
    setTimeout(() => {
      modalInstance.close();
    }, 1500);
  }

  isUserLoggedIn() {
    return this.authService.isLoggedIn();
  }

  _isProductBelongsToCurrentUser() {
    var uid = this.authService.getCurrentUserId();
    return this.productService.getProductsId(uid)
      .then((products) => {
        var state = false;
        products.forEach((product) => {
          if(product.$id === this.productId) {
            state = true;
          }

        });
        return state;
      });

  }

}

export default SingleProductController;
