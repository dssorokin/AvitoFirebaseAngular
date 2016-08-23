class CommentBoxController {
  constructor(commentService, authService) {
    "ngInject";

    this.commentService = commentService;
    this.authService = authService;
    console.log(this.comments);
  }

  $onInit() {
    this.sendError = false;
    if(this.isLoggedIn()) {
      this.userId = this.authService.getCurrentUserId();
    }
  }


  sendComment() {
    if(!this.text) {
      this.sendError = true;
      return;
    }
    this.sendError = false;
    this.commentService.createComment(this.userId, this.productId, this.text)
      .then(() => {
        this.text = '';
      })
      .then(() => this.commentService.getCommentsByProduct(this.productId))
      .then((comments) => this.comments = comments);
  }
}

export default CommentBoxController;
