angular.module('mobionicApp.data', [])

// Home Data: Home page configuration
.factory('Data', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'News',
            icon: 'ion-calendar',
            note: 'Latest News',
            url: '#/app/youtubevideos'
        },
        { 
            title: 'Products',
            icon: 'ion-bag',
            note: 'My Products',
            url: '#/app/products'
        },
        { 
            title: 'Activity',
            icon: 'ion-stats-bars',
            note: 'Recent Activity',
            url: '#/app/contact'
        },

        { 
            title: 'About',
            icon: 'ion-person-stalker',
            note: 'About Us',
            url: '#/app/member'
        },


    ]; 
    
    return data;
})

// Guest Data: Guest page configuration
.factory('GuestData', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'Farm Profiles',
            icon: 'ion-calendar',
            note: 'Visit the farms',
            url: '#/app/news'
        },

        { 
            title: 'Create Account',
            icon: 'ion-person-add',
            note: 'Join today',
            url: 'signUp()'
        },
        { 
            title: 'Products',
            icon: 'ion-ios-cart',
            note: 'Available produce',
            url: '#/app/feed'
        },
        { 
            title: 'Login',
            icon: 'ion-home',
            note: 'Go to your account',
            url: 'login()'
        },

    ]; 
    
    return data;
})

// Menu Data: Menu configuration
.factory('MenuData', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'Home',
            icon: 'ion-home',
            url: '#/app'
        },        
        { 
            title: 'Seasons',
            icon: 'ion-code',
            url: '#/app/elements'
        },        
        { 
            title: 'Crops Catalouge',
            icon: 'ion-drag',
            url: '#/app/tabs'
        },
        { 
            title: 'Price List',
            icon: 'ion-grid',
            url: '#/app/grid'
        },

    ]; 
    
    return data;
})

// Plugins Data: Mobile Plugins configuration
.factory('PluginsData', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'Device',
            icon: 'ion-ipad',
            note: 'Device API',
            url: '#/app/plugins/device'
        },
        { 
            title: 'Geolocation',
            icon: 'ion-location',
            note: 'Geolocation API',
            url: '#/app/plugins/geolocation'
        },
        { 
            title: 'Notifications',
            icon: 'ion-alert',
            note: 'Dialogs API',
            url: '#/app/plugins/notifications'
        },
        { 
            title: 'Barcode',
            icon: 'ion-qr-scanner',
            note: 'Barcode Scanner',
            url: '#/app/plugins/barcodescanner'
        }
    ]; 
    
    return data;
})

// Map Data: Map configuration
.factory('MapData', function(){
    var data = {};
    
    data.map = {
        zoom: 12,
        center: {
            latitude: 40.74,
            longitude: -74.18
        },
        markers: [
        {
            id: 1,
            icon: 'img/marker.png',
            latitude: 40.71,
            longitude: -74.21,
            title: 'This is our main store'
        }, 
        {
            id: 2,
            icon: 'img/marker.png',
            latitude: 40.72,
            longitude: -74.20,
            title: 'This is our second store'
        },
        {
            id: 3,
            icon: 'img/marker.png',
            latitude: 40.73,
            longitude: -74.19,
            title: 'This is our third store'
        },
        {
            id: 4,
            icon: 'img/marker.png',
            latitude: 40.74,
            longitude: -74.18,
            title: 'This is our fourth store'
        },
        {
            id: 5,
            icon: 'img/marker.png',
            latitude: 40.75,
            longitude: -74.17,
            title: 'This is our fifth store'
        },
        {
            id: 6,
            icon: 'img/marker.png',
            latitude: 40.76,
            longitude: -74.16,
            title: 'This is our sixth store'
        },
        {
            id: 7,
            icon: 'img/plane.png',
            latitude: 40.77,
            longitude: -74.15,
            title: 'Airport'
        }]
    };

    return data;
})

// Gallery Data: Gallery configuration
.factory('GalleryData', function(){
    var data = {};
    
    data.items = [
        { 
            label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            src: 'img/gallery-1.jpg',
            location: 'New York, June 2014'
        },
        { 
            label: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            src: 'img/gallery-2.jpg',
            location: 'Athens, August 2013'
        },
        { 
            label: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            src: 'img/gallery-3.jpg',
            location: 'Tokyo, May 2013'
        }
    ]; 
    
    return data;
})

// News Data: JSON
.factory('NewsData', function($http, $q, NewsStorage) {
    
    var json = 'json/news.json';

    var deferred = $q.defer();
    var promise = deferred.promise;
    var data = [];
    var service = {};
    
    service.async = function() {
    $http({method: 'GET', url: json, timeout: 5000}).
    // this callback will be called asynchronously
    // when the response is available.
    success(function(d) {
        data = d.result;
        NewsStorage.save(data);
        deferred.resolve();
    }).
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    error(function() {
        data = NewsStorage.all();
        deferred.reject();
    });
        
    return promise;
        
    };
    
    service.getAll = function() { return data; };

    service.get = function(newId) { return data[newId]; };

    return service;
})

// Products Data: JSON
.factory('ProductsData', function($http, $q, ProductsStorage) {
    
    var json = 'json/products.json';

    var deferred = $q.defer();
    var promise = deferred.promise;
    var data = [];
    var service = {};

    service.async = function() {
    $http({method: 'GET', url: json, timeout: 5000}).
    // this callback will be called asynchronously
    // when the response is available.
    success(function(d) {
        data = d.result;
        ProductsStorage.save(data);
        deferred.resolve();
    }).
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    error(function() {
        data = ProductsStorage.all();
        deferred.reject();
    });
        
    return promise;
        
    };

    service.getAll = function() { return data; };

    service.get = function(productId) { return data[productId]; };

    service.getLetterLimit = function() { return 100; };

    return service;
})

// Gallery Data: Gallery configuration
.factory('GalleryData', function(){
    var data = {};
    
    data.items = [
        { 
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            src: 'img/gallery-1.jpg',
            location: 'New York, June 2014'
        },
        { 
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            src: 'img/gallery-2.jpg',
            location: 'Athens, August 2013'
        },
        { 
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            src: 'img/gallery-3.jpg',
            location: 'Tokyo, May 2013'
        }
    ]; 
    
    return data;
})

// About Data: JSON
.factory('AboutData', function($http, $q, AboutStorage) {
    
    var json = 'json/about.json';
    
    var deferred = $q.defer();
    var promise = deferred.promise;
    var data = [];
    var service = {};
    
    service.async = function() {
    $http({method: 'GET', url: json, timeout: 5000}).
    // this callback will be called asynchronously
    // when the response is available.
    success(function(d) {
        data = d.result;
        AboutStorage.save(data);
        deferred.resolve();
    }).
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    error(function() {
        data = AboutStorage.all();
        deferred.reject();
    });
        
    return promise;
        
    };
    
    service.getAll = function() { return data; };

    service.get = function(memberId) { return data[memberId]; };

    return service;
})

// Posts Data: JSON Wordpress Posts configuration
.factory('PostsData', function($http, $q, PostsStorage) {
    
    /* (For DEMO purposes) Local JSON data */
    var json = 'json/wordpress.json';
    
    /* Set your URL as you can see in the following example */
    // var json = 'YourWordpressURL/?json=get_recent_posts';
    
    /* With user-friendly permalinks configured */
    // var json = 'YourWordpressURL/api/get_recent_posts';

    var deferred = $q.defer();
    var promise = deferred.promise;
    var data = [];
    var service = {};
    
    service.async = function() {
    $http({method: 'GET', url: json, timeout: 5000}).
    // this callback will be called asynchronously
    // when the response is available.
    success(function(d) {
        data = d;
        PostsStorage.save(data);
        deferred.resolve();
    }).
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    error(function() {
        data = PostsStorage.all();
        deferred.reject();
    });
        
    return promise;
        
    };
    
    service.getAll = function() { return data; };

    service.get = function(postId) { return data.posts[postId]; };

    return service;
})

// ServerPosts Data: JSON Wordpress Posts configuration with Server Side pagination
.factory('ServerPostsData', function($http, $q, ServerPostsStorage) {
    
    var data = [];
    var service = {};
    
    /* (For DEMO purposes) Local JSON data */
    var json = 'json/serverposts&';
    
    /* Set your URL as you can see in the following example */
    /* NOTE: In case of the default permalinks, you should add '&' at the end of the url */
    // var json = 'YourWordpressURL/?json=get_recent_posts&';
    
    /* With user-friendly permalinks configured */
    /* NOTE: In case of the user-friendly permalinks, you should add '?' at the end of the url */
    // var json = 'YourWordpressURL/api/get_recent_posts?';
    
    service.getURL = function() { return json; };
    
    service.setData = function(posts) { data = posts; };

    service.get = function(serverpostId) { return data[serverpostId]; };
    
    return service;
})

// RSS Feeds Data: JSON
.factory('FeedsData', function($http, $q, FeedsStorage) {
    
    var xml = 'http://www.huffingtonpost.com/feeds/index.xml';
    var url = 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(xml);
    
    var deferred = $q.defer();
    var promise = deferred.promise;
    var data = [];
    var service = {};
    var entries = []; 
    
    service.async = function() {
    $http({method: 'JSONP', url: url, timeout: 5000}).
    // this callback will be called asynchronously
    // when the response is available.
    success(function(d) {
        data = d;
        FeedsStorage.save(data.responseData.feed);
        entries = data.responseData.feed.entries;
        deferred.resolve();
    }).
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    error(function() {
        data = FeedsStorage.all();
        entries = data.entries;
        deferred.reject();
    });
        
    return promise;
        
    };
    
    service.getAll = function() { return data.responseData.feed; };

    service.get = function(entryId) { return entries[entryId];  };

    return service;
})

// Settings Data: Settings configuration
.factory('SettingsData', function(){
    var data = {};
    
    data.items = {
        options: [
        {
           name: 'First Option',
           value: true
        }, 
        {
           name: 'Second Option',
           value: false
        }, 
        {
           name: 'Third Option',
           value: false
        }, 
        {
           name: 'Fourth Option',
           value: false
        }, 
        {
           name: 'Fifth Option',
           value: false
        }],
        sorting: 'A',
        range:30
    };

    return data;
})

// Feed Plugin Data: JSON
.factory('FeedPluginData', function($http, $q) {
    
    var json = 'json/structure.json';
    var api_url = 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=';
    
    var data = [];
    var result = [];
    var entries = [];
    var service = {};
    
    service.asyncCategories = function() {
        
        var deferred = $q.defer();
        var promise = deferred.promise;
        
        $http({method: 'GET', url: json, timeout: 5000}).
        // this callback will be called asynchronously
        // when the response is available.
        success(function(d) {
            data = d;
            deferred.resolve();
        }).
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        error(function() {
            deferred.reject();
        });
        
        return promise;
        
    };
    
    service.getCategories = function() { return data.categories; };

    service.getCategory = function(id) { return data.categories[id].items; };
    
    service.getCategoryTitle = function(id) { return data.categories[id].title; };
    
    service.async = function(categoryId, id) {
        
        var deferred = $q.defer();
        var promise = deferred.promise;

        $http({method: 'JSONP', url: api_url + encodeURIComponent(data.categories[categoryId].items[id-1].url), timeout: 5000}).
        // this callback will be called asynchronously
        // when the response is available.
        success(function(d) {
            result = d;
            entries = result.responseData.feed.entries;
            deferred.resolve();
        }).
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        error(function() {
            deferred.reject();
        });
        
        return promise;
        
    };
    
    service.getResult = function() { return result.responseData.feed; };
    
    service.setFeeds = function(feeds) { result = feeds; };

    service.getFeed = function(feedId) { return result[feedId]; };

    return service;
})


// YouTube Data: YouTube Videos configuration
.factory('YouTubeData', function($http, $q) {
    
    var youtubeKey = 'AIzaSyClMa-MaKro_m95tb--4LaAorl-NmGPJxc';
    var apiUrl = 'https://www.googleapis.com/youtube/v3/';
    var videosUrl    = apiUrl + 'playlistItems?part=snippet&key=' + youtubeKey + '&maxResults=' + 20;
    var playlistsUrl = apiUrl + 'channels?part=contentDetails&key=' + youtubeKey;
    
    var username = 'Princessflyra';

    var data = [];
    var result = [];
    var videos = [];
    var service = {};

    service.async = function(categoryId, id) {
        
        var deferred = $q.defer();
        var promise = deferred.promise;
        
        service.getPlaylistId().then(function(playlistId) {

            if (!playlistId) {
            deferred.reject();
            }

            var url = videosUrl + '&playlistId=' + playlistId;

            $http({method: 'GET', url: url, timeout: 5000}).
            // this callback will be called asynchronously
            // when the response is available.
            success(function(d) {
            result = d;
            data = result.items;
            deferred.resolve();
            }).
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            error(function() {
            deferred.reject();
            });

        });
        
        return promise;
        
    };

    service.getPlaylistId = function() {
        
        var url = playlistsUrl + '&forUsername=' + username;

        return $http.get(url).then(function(response) {
            var items = response.data.items;
            if (items.length && items[0].contentDetails.relatedPlaylists.likes) {
                return items[0].contentDetails.relatedPlaylists.likes;
            }

            return null;
        });
    }
    
    service.getVideos = function() { return data; };

    service.getVideo = function(videoId) { return data[videoId]; };
    
    return service;
    
})
