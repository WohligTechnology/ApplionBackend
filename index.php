<!doctype html>
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->

<head>

    <script>
        var apiurl = "http://104.154.90.138/";
//        var apiurl = "http://localhost:1337/";
    </script>
    <meta charset="utf-8">
    <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'>
    <title>Web Application</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic' rel='stylesheet' type='text/css'>
    <!-- needs images, font... therefore can not be part of ui.css -->
    <link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="bower_components/weather-icons/css/weather-icons.min.css">
    <!-- end needs images -->

    <link rel="stylesheet" href="styles/main.css">

</head>

<body data-ng-app="app" id="app" data-custom-background data-off-canvas-nav>
    <!--[if lt IE 9]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

    <div data-ng-controller="AppCtrl">
        <div data-ng-hide="isSpecificPage()" data-ng-cloak class="no-print">
            <section data-ng-include=" 'views/header.html' " id="header" class="top-header"></section>

            <aside data-ng-include=" 'views/nav.html' " id="nav-container"></aside>
        </div>

        <div class="view-container">
            <section data-ng-view id="content" class="animate-fade-up"></section>
        </div>
    </div>


    <script src="http://maps.google.com/maps/api/js?sensor=false"></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.3/tests.js"></script>-->
    <!-- build:js scripts/vendor.js -->
    <!--    <script src="js/vendor.js"></script>-->
    <!-- endbuild -->
    <script src="lib/jquery-2.1.3.min.js"></script>
    <script src="lib/angular.min.js"></script>
    <script src="lib/angular-route.min.js"></script>
    <script src="lib/angular-animate.min.js"></script>
    <script src="lib/angular-file-upload.js"></script>
    <script src="lib/angular-file-upload-shim.js"></script>
    <script src="lib/angular-file-upload-html5-shim.js"></script>
    <script src="lib/FileAPI.min.js"></script>
    <script src="lib/FileAPI.js"></script>
    <script src="lib/upload.js"></script>
    <script src="lib/underscore-min.js"></script>
    <script src="scripts/moment.js"></script>

    <!-- build:js scripts/ui.js -->
    <script src="js/ui.js"></script>

    <!--Libraries-->

    <script src="scripts/lodash.min.js"></script>
    <!--    <link href="scripts/select2.css" rel="stylesheet"></script>-->
    <!-- endbuild -->
    <!-- build:js({.tmp,client}) scripts/app.js -->
    <script src="scripts/app.js"></script>
    <script src="scripts/shared/main.js"></script>
    <script src="scripts/shared/directives.js"></script>
    <script src="scripts/shared/localize.js"></script>
    <script src="scripts/UI/UICtrl.js"></script>
    <script src="scripts/UI/UIDirective.js"></script>
    <script src="scripts/UI/UIService.js"></script>
    <script src="scripts/Form/FormDirective.js"></script>
    <script src="scripts/Form/FormCtrl.js"></script>
    <script src="scripts/Form/FormValidation.js"></script>
    <script src="scripts/Table/TableCtrl.js"></script>
    <script src="scripts/Map/Map.js"></script>
    <script src="scripts/Task/Task.js"></script>
    <script src="scripts/Chart/ChartCtrl.js"></script>
    <script src="scripts/Chart/ChartDirective.js"></script>
    <script src="scripts/Page/PageCtrl.js"></script>
    <script src="scripts/user/user.js"></script>
    <script src="scripts/user/userrest.js"></script>
    <script src="scripts/article/article.js"></script>
    <script src="scripts/article/articlerest.js"></script>
    <script src="scripts/scheduler/scheduler.js"></script>
    <script src="scripts/scheduler/schedulerrest.js"></script>
    <script src="scripts/video/video.js"></script>
    <script src="scripts/video/videorest.js"></script>
    <script src="scripts/image/image.js"></script>
    <script src="scripts/image/imagerest.js"></script>
    <script src="scripts/vote/vote.js"></script>
    <script src="scripts/vote/voterest.js"></script>
    <script src="scripts/registeruser/registeruser.js"></script>
    <script src="scripts/registeruser/registeruserrest.js"></script>
    <script src="scripts/membership/membership.js"></script>
    <script src="scripts/membership/membershiprest.js"></script>
    <script src="scripts/mlaconstituency/mlaconstituency.js"></script>
    <script src="scripts/mlaconstituency/mlaconstituencyrest.js"></script>
    <script src="scripts/mpconstituency/mpconstituency.js"></script>
    <script src="scripts/mpconstituency/mpconstituencyrest.js"></script>
    <script src="scripts/position/position.js"></script>
    <script src="scripts/position/positionrest.js"></script>
    <script src="scripts/region/region.js"></script>
    <script src="scripts/region/regionrest.js"></script>
    <script src="scripts/upload/upload.js"></script>
    <script src="scripts/upload/uploadrest.js"></script>
    <script src="scripts/center/center.js"></script>
    <script src="scripts/center/centerrest.js"></script>
    <script src="scripts/login/login.js"></script>
    <script src="scripts/login/loginrest.js"></script>
    <script src="scripts/brand/brand.js"></script>
    <script src="scripts/brand/brandrest.js"></script>
    <script src="scripts/appliance/appliance.js"></script>
    <script src="scripts/appliance/appliancerest.js"></script>
    <script src="scripts/store/store.js"></script>
    <script src="scripts/store/storerest.js"></script>
    <script src="scripts/feedback/feedback.js"></script>
    <script src="scripts/feedback/feedbackrest.js"></script>
    <script src="scripts/notification/notification.js"></script>
    <script src="scripts/notification/notificationrest.js"></script>
    <script src="scripts/rating/rating.js"></script>
    <script src="scripts/rating/ratingrest.js"></script>
    <script src="scripts/callrating/callrating.js"></script>
    <script src="scripts/callrating/callratingrest.js"></script>
    <script src="scripts/warranty/warranty.js"></script>
    <script src="scripts/warranty/warrantyrest.js"></script>
    <script src="scripts/pincode/pincode.js"></script>
    <script src="scripts/pincode/pincoderest.js"></script>
    <script src="scripts/district/district.js"></script>
    <script src="scripts/district/districtrest.js"></script>
    <script src="scripts/country/country.js"></script>
    <script src="scripts/country/countryrest.js"></script>
    <script src="scripts/state/state.js"></script>
    <script src="scripts/state/staterest.js"></script>
    <script src="scripts/holidaycalender/holidaycalender.js"></script>
    <script src="scripts/holidaycalender/holidaycalenderrest.js"></script>
    <script src="scripts/appliancetype/appliancetype.js"></script>
    <script src="scripts/appliancetype/appliancetyperest.js"></script>
    <!-- endbuild -->
</body>

</html>