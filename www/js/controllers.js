angular.module('agribroka.controllers', [])

.controller('LoginCtrl', function($scope, $ionicModal, $timeout) {

  //Sidemenu Links for showcasing all pages

  // $scope.sideMenuLinks  = [
  //   {text: 'Home', url: '#/app/home'},
  //   {text: 'Feed', url: '#/app/feed'},
  //   {text: 'Start (Fullscreen)', url: '#/app/start'},
  //   {text: 'View Post', url: '#/app/viewpost'},
  //   {text: 'View Post 2', url: '#/app/viewposttwo'},
  //   {text: 'Friend (Grid)', url: '#/app/fgrid'},
  //   {text: 'Friend (List)', url: '#/app/flist'},
  //   {text: 'New Post', url: '#/app/newpost'},
  //   {text: 'Send Mail', url: '#/app/email'},
  //   {text: 'Profile', url: '#/app/profile'},
  //   {text: 'Profile 2', url: '#/app/profiletwo'},
  //   {text: 'Profile 3', url: '#/app/profilethree'},
  //   {text: 'Invite', url: '#/app/invite'},
  //   {text: 'News', url: '#/app/news'}
  // ]; 

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/user/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('SignUpCtrl', function($scope, $ionicModal, $timeout) {


  // Form data for the Sign Up modal
  $scope.signUpData = {};

  // Create the Sign Up modal that we will use later
  $ionicModal.fromTemplateUrl('templates/user/signUp.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the Sign Up modal to close it
  $scope.closeSignUp = function() {
    $scope.modal.hide();
  };

  // Open the Sign Up modal
  $scope.signUp = function() {
    $scope.modal.show();
  };

  // Perform the Sign Up action when the user submits the Sign Up form
  $scope.doSignUp = function() {
    console.log('Signing Up...', $scope.signUpData);

    // Sign Up code 
    $timeout(function() {
      $scope.closeSignUp();
    }, 1000);
  }; // end Sign Up function

})

