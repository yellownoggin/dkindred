(function () {
'use strict';

angular
  .module('kindred.core', [
    'ui.router',
    'ngMaterial',
    'kindred.designComponents'
  ])
  .config(stateConfig);
  // TODO annotations



  /**
   * stateConfig - provides apps core routes functionality
   *
   * @param  {type} $urlRouterProvider description
   * @param  {type} $stateProvider     description
   * @return {type}                    description
   */

  function stateConfig($urlRouterProvider, $stateProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        views: {
          main_content: {
            templateUrl: './app/general-content/partials/home.html'
          }
        }
      });


     // Defines a path that is used when an
     // invalid route is requested.
      $urlRouterProvider.otherwise('/');
  }
})();
