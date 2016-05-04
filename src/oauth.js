(function() {
  'use strict';

  angular.module("oauth.providers", [
    "oauth.utils",
    "oauth.500px",
    "oauth.azuread",
    "oauth.adfs",
    'oauth.dropbox',
    'oauth.digitalOcean',
    'oauth.google',
    'oauth.github',
    'oauth.facebook',
    'oauth.linkedin',
    'oauth.instagram',
    'oauth.box',
    'oauth.reddit',
    'oauth.slack',
    'oauth.twitter',
    'oauth.meetup',
    'oauth.salesforce',
    'oauth.strava',
    'oauth.withings',
    'oauth.foursquare',
    'oauth.magento',
    'oauth.vkontakte',
    'oauth.odnoklassniki',
    'oauth.imgur',
    'oauth.spotify',
    'oauth.uber',
    'oauth.windowslive',
    'oauth.yammer',
    'oauth.venmo',
    'oauth.stripe',
    'oauth.rally',
    'oauth.familySearch',
    'oauth.envato',
    'oauth.weibo',
    'oauth.jawbone',
    'oauth.untappd',
    'oauth.dribble',
    'oauth.pocket',
    'oauth.mercadolibre',
    'oauth.netatmo'])
    .factory("$cordovaOauth", cordovaOauth);

  function cordovaOauth(
    $q, $http, $cordovaOauthUtility, $ngCordovaAzureAD, $ngCordovaAdfs, $ngCordovaDropbox, $ngCordovaDigitalOcean,
    $ngCordovaGoogle, $ngCordovaGithub, $ngCordovaFacebook, $ngCordovaLinkedin, $ngCordovaInstagram, $ngCordovaBox, $ngCordovaReddit, $ngCordovaSlack,
    $ngCordovaTwitter, $ngCordovaMeetup, $ngCordovaSalesforce, $ngCordovaStrava, $ngCordovaWithings, $ngCordovaFoursquare, $ngCordovaMagento,
    $ngCordovaVkontakte, $ngCordovaOdnoklassniki, $ngCordovaImgur, $ngCordovaSpotify, $ngCordovaUber, $ngCordovaWindowslive, $ngCordovaYammer,
    $ngCordovaVenmo, $ngCordovaStripe, $ngCordovaRally, $ngCordovaFamilySearch, $ngCordovaEnvato, $ngCordovaWeibo, $ngCordovaJawbone, $ngCordovaUntappd,
    $ngCordovaDribble, $ngCordovaPocket, $ngCordovaMercadolibre, $ngCordovaNetatmo) {

    return {
      azureAD: $ngCordovaAzureAD.signin,
      adfs: $ngCordovaAdfs.signin,
      dropbox: $ngCordovaDropbox.signin,
      digitalOcean: $ngCordovaDigitalOcean.signin,
      google: $ngCordovaGoogle.signin,
      github: $ngCordovaGithub.signin,
      facebook: $ngCordovaFacebook.signin,
      linkedin: $ngCordovaLinkedin.signin,
      instagram: $ngCordovaInstagram.signin,
      box: $ngCordovaBox.signin,
      reddit: $ngCordovaReddit.signin,
      slack: $ngCordovaSlack.signin,
      twitter: $ngCordovaTwitter.signin,
      meetup: $ngCordovaMeetup.signin,
      salesforce: $ngCordovaSalesforce.signin,
      strava: $ngCordovaStrava.signin,
      withings: $ngCordovaWithings.signin,
      foursquare: $ngCordovaFoursquare.signin,
      magento: $ngCordovaMagento.signin,
      vkontakte: $ngCordovaVkontakte.signin,
      odnoklassniki: $ngCordovaOdnoklassniki.signin,
      imgur: $ngCordovaImgur.signin,
      spotify: $ngCordovaSpotify.signin,
      uber: $ngCordovaUber.signin,
      windowsLive: $ngCordovaWindowslive.signin,
      yammer: $ngCordovaYammer.signin,
      venmo: $ngCordovaVenmo.signin,
      stripe: $ngCordovaStripe.signin,
      rally: $ngCordovaRally.signin,
      familySearch: $ngCordovaFamilySearch.signin,
      envato: $ngCordovaEnvato.signin,
      weibo: $ngCordovaWeibo.signin,
      jawbone: $ngCordovaJawbone.signin,
      untappd: $ngCordovaUntappd.signin,
      dribble: $ngCordovaDribble.signin,
      pocket: $ngCordovaPocket.signin,
      mercadolibre: $ngCordovaMercadolibre.signin,
      netatmo: $ngCordovaNetatmo.signin
    };
  }

  cordovaOauth.$inject = [
    "$q", '$http', "$cordovaOauthUtility",
    "$ngCordovaAzureAD",
    "$ngCordovaAdfs",
    '$ngCordovaDropbox',
    '$ngCordovaDigitalOcean',
    '$ngCordovaGoogle',
    '$ngCordovaGithub',
    '$ngCordovaFacebook',
    '$ngCordovaLinkedin',
    '$ngCordovaInstagram',
    '$ngCordovaBox',
    '$ngCordovaReddit',
    '$ngCordovaSlack',
    '$ngCordovaTwitter',
    '$ngCordovaMeetup',
    '$ngCordovaSalesforce',
    '$ngCordovaStrava',
    '$ngCordovaWithings',
    '$ngCordovaFoursquare',
    '$ngCordovaMagento',
    '$ngCordovaVkontakte',
    '$ngCordovaOdnoklassniki',
    '$ngCordovaImgur',
    '$ngCordovaSpotify',
    '$ngCordovaUber',
    '$ngCordovaWindowslive',
    '$ngCordovaYammer',
    '$ngCordovaVenmo',
    '$ngCordovaStripe',
    '$ngCordovaRally',
    '$ngCordovaFamilySearch',
    '$ngCordovaEnvato',
    '$ngCordovaWeibo',
    '$ngCordovaJawbone',
    '$ngCordovaUntappd',
    '$ngCordovaDribble',
    '$ngCordovaPocket',
    '$ngCordovaMercadolibre',
    '$ngCordovaNetatmo'
  ];
})();
