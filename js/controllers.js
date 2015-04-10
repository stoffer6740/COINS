angular.module('coins.controllers', [])

.controller('LineCtrl', function($scope, TabFactory) {
      $scope.submit = function () {

      };

      $scope.endStation = ['Esbjerg st', 'Skolegade', 'Spangsbjerg Kirkevej'];
    })

.controller('TabCtrl', function ($scope, TabFactory) {
      $scope.hidden = TabFactory.getState();
    })

.controller('TicketCtrl', function($scope, $ionicModal) {
    $scope.ticketinspection = {
        passName: '',
        passAddress: '',
        passZip: '',
        passCity: '',
        passID: ['Social security card', 'Drivers license', 'Other form of ID'],
        passCPR: '',
        aSeasonPass: false,
        bNoValidTicket: false,
        cNoCheckIn: false,
        passPhone: '',
        passEmail: '',
        passComments: ''
    };

        $ionicModal.fromTemplateUrl('templates/modal/ticket-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function() {
            $scope.modal.show();
        };
        $scope.closeModal = function () {
            $scope.modal.hide();
        };

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
    inside:3,
    outside: 4,
    secondComment: ''
  };

  $ionicModal.fromTemplateUrl('templates/modal/bdi-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function () {
      $scope.modal.hide();
  };

      console.table($scope.checklist);
});
