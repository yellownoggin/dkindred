(function () {
  'use strict';

// TODO add max width for card att
// TODO add Title att
// TODO add description
// TODO add call to action link

  angular
    .module('mdExpressCard')
    .directive('mdExpressCard', mdExpressCard);

  function mdExpressCard() {
    var directive = {
      restrict: 'EA',
      templateUrl: './app/components/design-components/mdexpress-card/mdexpress-card.html',
      scope: {
        image: '@cimage'
      },
      controller: MdExpressCardController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

  }

  function MdExpressCardController() {
    var vm = this;
    vm.cardImage = vm.image;
    vm.cardImageStyle= {'background-image':'url(' + vm.image +  ')'};
  }

})();
