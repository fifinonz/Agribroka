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
    $scope.modal1 = modal;
  });

  // Triggered in the Sign Up modal to close it
  $scope.closeSignUp = function() {
    $scope.modal1.hide();
  };
  // Cleanup the modal when we're done with it!
$scope.$on('$destroy', function() {
  $scope.modal1.remove();
});

  // Open the Sign Up modal
  $scope.signUp = function() {
    $scope.modal1.show();
  };


  // Create the Account modal that we will use later
  $ionicModal.fromTemplateUrl('templates/user/account-type.html', {
  scope: $scope,
  animation: 'slide-in-up'
  }).then(function(modal) {
  $scope.modal2 = modal;
  });

  // Open the Account Type modal
  $scope.accountType = function() {
  $scope.modal2.show();
  };

  // Triggered to close modal
  $scope.closeAccType = function() {
    $scope.modal2.hide();
  };
  // Cleanup the modal when we're done with it!
$scope.$on('$destroy', function() {
  $scope.modal2.remove();
});

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
      // Hooray! Let User create profile
      alert("success!");
      Parse.User.logIn($scope.signUpData.username, $scope.signUpData.password, {


        // check for succesful login
        success: function(user){
          console.log('Doing login', $scope.signUpData.username);
          alert("logged in");
          $timeout(function() {
          $scope.closeSignUp();
          $scope.accountType();
        }, 1000);
      },
      error: function(user, error) {
        // Show the error message somewhere
        alert("Error: " + error.code + " " + error.message);
      }
    }); //end login

  }, // end succesful signUp
    error: function(user, error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }

  }); // end user signup

}; // end doSignUp function


  // Form data for the Account type modal
  $scope.accTypeData = {};

  // Create Profile based on account type
  $scope.createProfile = function() {
    console.log('creatingProfile...', $scope.accTypeData);

        // Account Type
        // create a new sub-class of Parse.Object
        var AccountType = Parse.Object.extend("Account");

        // create a new class instance
        var accType = new AccountType();
        accType.set("accType", $scope.accTypeData.type);

        // add account type to user
        var userID = Parse.User.current();
        accType.set("userID",userID); // only works if user is logged in

        accType.save(null, {
          success: function(accType) {
              // Hooray! Account Type set
              alert("success!");
              if ($scope.accTypeData.type=='farmer') {
                $scope.closeAccType();
                $state.go('app-fprofile');
              }
              else {
                alert("buyer");
                $scope.closeAccType();
                $state.go('app-bprofile');
              }
          },
    error: function(accType, error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }

  });

}; // Account Type function

// create Farm Profile
 $scope.farmProfileData = {};

$scope.farmProfile = function() {
  console.log('Farm Profile...', $scope.farmProfileData);

      //
      // create a new sub-class of Parse.Object
      var FarmProfile = Parse.Object.extend("FarmProfile");

      // create a new class instance
      var farm = new FarmProfile();
      farm.set("farmName", $scope.farmProfileData.farmName);
      farm.set("farmSize", $scope.farmProfileData.farmSize);
      farm.set("farmDescr", $scope.farmProfileData.farmDescr);
      farm.set("farmAreaCode", $scope.farmProfileData.farmAreaCode);

      // add account type to user
      var farmerID = Parse.User.current();
      farm.set("farmerID",farmerID); // only works if user is logged in

          // get location
          // Save location
            var location = new Parse.GeoPoint.current({
              success: function(point){
                farmProfile.set("farmLocation",location);
                console.log(point);
              }
            });

      farm.save(null, {
        success: function(farm) {
            // Hooray! Profile saved
            alert("success!");
        },
  error: function(farm, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }

});

}; // Farm Profile function


// Form data for buyer profile
$scope.buyerProfileData = {};

// Create Profile based on account type
$scope.buyerProfile = function() {
  console.log('creatingProfile...', $scope.buyerProfileData);


      // create a new sub-class of Parse.Object
      var BuyerProfile = Parse.Object.extend("BuyerProfile");

      // create a new class instance
      var buyer = new BuyerProfile();
      buyer.set("paymentMethod", $scope.buyerProfileData.payment);
      buyer.set("buyerLocation", $scope.buyerProfileData.buyerlocation);
      buyer.set("buyerDescr", $scope.buyerProfileData.buyerDescr);

      // add buyer profile to user
      var buyerID = Parse.User.current();
      buyer.set("buyerID",buyerID); // only works if user is logged in

      buyer.save(null, {
        success: function(buyer) {
            // Hooray! Account Type set
            alert("success!");
          },
            error: function(buyer, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
          }
        });

}; // Account Type function


})

// Guest Controller
.controller('GuestCtrl', function($scope, Data, $state) {
  $scope.items = Data.items;
})
