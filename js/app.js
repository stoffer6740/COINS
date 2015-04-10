// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'coins' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'coins.services' is found in services.js
// 'coins.controllers' is found in controllers.js
angular.module('coins', ['ionic', 'coins.controllers', 'coins.services', 'coins.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html",
    controller: 'TabCtrl'
  })

  // Each tab has its own nav history stack:

  .state('tab.line', {
    url: '/line',
    views: {
      'tab-line': {
        templateUrl: 'templates/tab-line.html',
        controller: 'LineCtrl'
      }
    }
  })

  .state('tab.tickets', {
      url: '/tickets',
      views: {
        'tab-tickets': {
          templateUrl: 'templates/tab-tickets.html',
          controller: 'TicketCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.bdi', {
    url: '/bdi',
    views: {
      'tab-bdi': {
        templateUrl: 'templates/tab-bdi.html',
        controller: 'BDICtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/line');

});
