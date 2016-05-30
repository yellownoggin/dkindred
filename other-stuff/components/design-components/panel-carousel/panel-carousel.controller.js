// (function () {
//   'use strict';
//
//   angular
//     .module('ngCarousel')
//     .controller('NgCarouselsController', NgCarouselsController);
//
//   function NgCarouselsController() {
//     var vm = this;
//     vm.images = [
//       'https://placehold.it/380x235',
//       'https://placehold.it/380x236',
//       'https://placehold.it/380x237'
//     ];
//   }
// })();
(function () {
  'use strict';

  angular
    .module('panelCarousel')
    .controller('PanelCarouselController', PanelCarouselController);

  function PanelCarouselController($scope) {
    var vm = this;
    vm.images = [
      'https://placehold.it/380x235',
      'https://placehold.it/380x236',
      'https://placehold.it/380x237'
    ];

    $scope.arrayData = [
        { src: './assets/images/boybluehoving.jpg' },
        { src: './assets/images/chutneys-380.jpeg' },
        { src: './assets/images/soda-pop-380.jpeg' },
        { src: './assets/images/too-many-papers.jpg' }

  // { src: 'https://placehold.it/380x237' },
  // { src: 'https://placehold.it/380x238' }
];
  }
})();
