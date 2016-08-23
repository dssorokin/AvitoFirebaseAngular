class NavbarController {
  constructor(authService, User) {
    "ngInject";

    // this.isLoggedIn = authService.isLoggedIn;
    this.isLoggedIn = authService.isLoggedIn;
    this.User = User;
    authService.firebaseAuthObject.$onAuthStateChanged((authData) => {
      User.getUserInfoById(authData.uid)
        .then((user) => {
          this.user = user;
        });
    });
    this.authService = authService;
    // this.user = User.getUserById(this.userId);
  }

  getUsername() {
  	
  }
  
  logout() {
    this.authService.logout();
  }

}

export default NavbarController;
