(function () {
  'use strict';

  angular
    .module('kindred.designComponents')
    .config(stateConfig);

    function stateConfig($stateProvider) {
      $stateProvider
      .state('designComponents', {
        url: '/design-components',
        views: {
          main_content: {
            templateUrl: './app/components/design-components/designComponents.html'
          }
        }
      })
      .state('mdexpress', {
        url: '/mdexpress',
        views: {
          main_content: {
            templateUrl: './app/components/design-components/mdexpress-card/mdexpress-card-kindred-page.html'
          }
        }
      })
      .state('panel-carousel', {
        url: '/panel-carousel',
        views: {
          main_content: {
            templateUrl: './app/components/design-components/panel-carousel/panel-carousel.html'
          }
        }
      });
    }
})();
