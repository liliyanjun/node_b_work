angular.module("Smartisan",["ui.router"]).config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.when('','/online_shop/online_jingxuan')
	$stateProvider.state("online_shop",{
		templateUrl:"online_shop.html",
		url:"/online_shop"		
	})
	.state("Smartisan_M1",{
		templateUrl:"Smartisan_M1.html",
		url:"/Smartisan_M1"
	})
	.state("Smartisan_OS",{
		templateUrl:"Smartisan_OS.html",
		url:"/Smartisan_OS"
	})
	.state("cloud",{
		templateUrl:"cloud.html",
		url:"/cloud"
	})
	.state("apps",{
		templateUrl:"apps.html",
		url:"/apps"
	})
	.state("talks",{
		templateUrl:"talks.html",
		url:"/talks"
	}).state("online_shop.jingxuan",{
		templateUrl:"l_jingxuan.html",
		url:"/online_jingxuan"
	}).state("online_shop.phone",{
		templateUrl:"l_phone.html",
		url:"/online_phone"
	}).state("online_shop.erji",{
		templateUrl:"l_erji.html",
		url:"/online_erji"
	}).state("online_shop.protect",{
		templateUrl:"l_protect.html",
		url:"/online_protect"
	}).state("online_shop.beike",{
		templateUrl:"l_beike.html",
		url:"/online_beike"
	}).state("online_shop.other",{
		templateUrl:"l_other.html",
		url:"/online_other"
	}).state("online_shop.service",{
		templateUrl:"l_service.html",
		url:"/online_service"
	}).state("online_shop.all",{
		templateUrl:"l_all.html",
		url:"/online_all"
	})
})
