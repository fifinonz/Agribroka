angular.module('agribroka.controllers', [])

.controller('LoginCtrl', function($scope, $state, $ionicModal, $timeout) {

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
  $scope.doLogin = function () {
    console.log('Doing login', $scope.loginData);

    // Login in using Parse User Account
    // 
      Parse.User.logIn($scope.loginData.username, $scope.loginData.password , {
     
          success: function(user) {
      // Hooray! Let them use the app now.
          alert("success!");
          $scope.closeLogin();

    },
    error: function(user, error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }
  });
  }; // end doLogin
})

.controller('SignUpCtrl', function($scope, $state, $ionicModal, $timeout) {


  // Intialize Parse application
  Parse.initialize("jTvSONYT1KnJvGyhzSFGuYwIwWKiXoeS6DAueN5c", "KKI1prB0sao3o4MGTOtWCiQeWEPAe5f1tPWiy0Gw");

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
        var user = new Parse.User();
    user.set("username", $scope.signUpData.username);
    user.set("password", $scope.signUpData.password);
    user.set("email", $scope.signUpData.email);
    user.set("first_name", $scope.signUpData.first_name);
    user.set("last_name", $scope.signUpData.last_name);
    user.set("mobileNo", $scope.signUpData.mobileNo);

  user.signUp(null, {
    success: function(user) {
      // Hooray! Let them use the app now.
      alert("success!");
          $scope.closeSignUp();
          $state.go('app-profile');    },
    error: function(user, error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }
  });

  }; // end Sign Up function


})
// Guest Controller
.controller('GuestCtrl', function($scope, Data, $state) {
  $scope.items = Data.items;
})

