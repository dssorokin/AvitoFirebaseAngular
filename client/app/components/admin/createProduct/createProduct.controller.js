import modalTpl from './modal.html';

class CreateProductController {
  constructor(productService, $uibModal) {
    "ngInject";
    this.productService = productService;
    this.$uibModal = $uibModal;
    this.product = {
      price: 1
    }
  }

  create() {
    this.productService.createProduct(this.product)
      .then(() => this.showModal());
  }

  fileChange() {
    var file = document.getElementById('exampleInputFile').files[0];
    this.product.file = file;
  }

  showModal() {
    var modalInstance = this.$uibModal.open({
      animation: true,
      template: modalTpl,
    });
    setTimeout(() => {
      modalInstance.close();
    }, 1000);
  }


}

export default CreateProductController;
