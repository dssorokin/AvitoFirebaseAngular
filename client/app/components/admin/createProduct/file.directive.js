/**
 * Created by projs on 05.08.16.
 */
let currencyDirective = function() {
  return {
    link: function (scope, elm, attrs, ngModelController) {
      ngModelController.$formatters.push(function (data) {
        return data + ' $';
      });

      ngModelController.$parsers.unshift((value) => {
        var regExpPrice = /\d+ \$/;
        if(regExpPrice.test(value)) {
          ngModelController.$setValidity('formatPrice', true);
        } else {
          ngModelController.$setValidity('formatPrice', false);
        }
        return value;
      });
    },
    require: 'ngModel'
  }
}

export default currencyDirective;
