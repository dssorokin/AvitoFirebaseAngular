/**
 * Created by projs on 13.08.16.
 */

export default function showDuringResolve($transitions, $rootScope) {
  "ngInject";
  return {
    template: `
      <div ng-show="isLoading">Loading...</div>
    `,
    link: function(scope, element) {

      $transitions.onBefore({to: 'home'}, () => {
        scope.isLoading = true;
        console.log('before');
      });

      $transitions.onSuccess({to: 'home'}, () => {
        scope.isLoading = false;
        console.log('success');
      });
    }
  }
}
