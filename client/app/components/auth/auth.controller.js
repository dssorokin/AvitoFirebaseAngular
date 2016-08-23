class AuthController {
  constructor(authService, $state) {
    "ngInject";

    this.name = 'auth';
    this.authService = authService;
    this.$state = $state;
    this.errors = null;
  }

  submitAction() {
    if(this.formTitle === "Register") {
      this.register(this.user);
    } else {
      this.login(this.user);
    }
  }


  register(user) {
    return this.authService.register(user)
      .then(() => {
        this.login(user);
      })
      .catch((err) => {
        this.errors = err;
      });
  }

  login(user) {
    var self = this;
    return this.authService.login(user)
      .then(() => {
        this.$state.go('home');
      })
      .catch((err) => {
        this.errors = err;
      });
  }
}

export default AuthController;
