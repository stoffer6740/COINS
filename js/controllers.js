angular.module('starter.controllers', [])

.controller('LineCtrl', function($scope, TabFactory) {
      $scope.submit = function () {
        $scope.hidden = TabFactory.setState(true);
        console.log('test');
      }
    })

.controller('TabCtrl', function ($scope, TabFactory) {
      $scope.hidden = TabFactory.getState();
    })

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('BDICtrl', function($scope, $ionicModal) {
  $scope.checklist = {
    ticketWorking: false,
    smokeSmell: false,
    driverSmoke: false,
    passSmoke: false,
    missPass: false,
    aTooManyPass: false,
    bCarelessDriver: false,
    incorrectTickets: false,
    firstComment: '',
    usingMobile: false,
    missAnnouncement: false,
    availability: false,
    availablePass: false,
    notAtLane: false,
    doorsClosed: false,
    other: false,
    missInfoMaterials: false,
    missingPictograms: false,
    aNoSmoking: false,
    bNoIceFood: false,
    cNoDrinks: false,
    dOther: false,
    missingUniform: false,
    missCleaning: false,
    inside: '',
    outside: '',
    secondComment: ''
  };

      $ionicModal.fromTemplateUrl('bdi-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });
      $scope.openModal = function() {
        $scope.modal.show();
      };

      console.table($scope.checklist);
});
