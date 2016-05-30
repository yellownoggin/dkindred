(function () {
  'use strict';

  angular
    .module('mdExpressCard')
    .controller('MdExpressCardController', MdExpressCardController);

  function MdExpressCardController() {
    var vm = this;

    vm.cardImageMock = 'https://placehold.it/380x235';
    vm.cardImageStyleMock= {'background-image':'url(https://placehold.it/380x235)'};
    vm.cardImage = './assets/images/soda-pop-380.jpeg';
    vm.cardImageStyle= {'background-image':'url(./assets/images/soda-pop-380.jpeg)'};
    vm.cardImage1 = './assets/images/chutneys-380.jpeg';
    vm.cardImageStyle1 = {'background-image':'url(./assets/images/chutneys-380.jpeg)'};

    // angular.extend(vm, {
    //   function: function
    // });
    //
    // activate();
    //
    // function activate() {
    //
    // }
    //
    // function function() {
    //
    // }
  }
})();
