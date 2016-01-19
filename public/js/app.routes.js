angular.module('routerRoutes', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/state1");
    $stateProvider
      .state('home', {
        url          : '/home',
        templateUrl  : 'views/pages/home.html'
      })
      .state('home.message', {
        url          : '/message',
        templateUrl  : 'views/pages/home.message.html',
        controller   : 'homeController',
        controllerAs : 'home'
      })
      .state('about', {
        url          : '/about',
        templateUrl  : 'views/pages/about.html',
      })
      .state('about.message', {
        url          : '/message',
        templateUrl  : 'views/pages/about.message.html',
        controller   : 'aboutController',
        controllerAs : 'about'
      })
      .state('contact', {
        url          : '/contact',
        templateUrl  : 'views/pages/contact.html',
      })
      .state('contact.message', {
        url          : '/message',
        templateUrl  : 'views/pages/contact.message.html',
        controller   : 'contactController',
        controllerAs : 'contact'
      });
    $locationProvider.html5Mode(true);
  });
