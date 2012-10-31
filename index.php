<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<html lang="fr" ng-app="websitesapp">
<head>
    <!-- TITLE -->
    <title>Benjamin Vauchel</title>

    <!-- META -->    
	<meta charset="utf-8">
    <meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
    <meta name="description" content="" />
    <meta name="author" content="Bejamin Vauchel" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
	<meta name="apple-mobile-web-app-capable" content="yes"/>
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>

	<!-- FAVICON -->
    <link rel="shortcut icon" href="images/favicon_32.png" type="image/x-icon" />
    <link rel="apple-touch-icon" href="images/favicon_129.png"/>

    <!-- CSS -->
    <link rel="stylesheet" media="screen" href="css/screen.css" />
    <link rel="stylesheet" media="print" href="css/print.css" />

    <!-- JS -->
    <!--[if lt IE 9]>
      <script type="text/javascript" src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.2/angular.min.js"></script>
	<script src="js/app-ck.js"></script>
	<script src="js/filters-ck.js"></script>
	<script src="js/controllers-ck.js"></script>

</head>
<body ng-controller="WebsiteListCtrl">
	<!--[if lt IE 7]>
        <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
    <![endif]-->
	<section id="sidebar">
		<div id="profile" class="sidebar-section">
			<img alt="" height="96" class="avatar" src="images/avatar.png" width="96" />
			<!--<div style="border-left:solid 1px #ccc;padding-left:10px;overflow:hidden">
				<p class="social">
					<a href="https://twitter.com/BenjaminVauchel" class="btn-twitter" title="Twitter">Twitter</a>
					<a href="https://github.com/benjamin-vauchel" class="btn-github" title="Github">Github</a>
				</p>
				<hgroup>
					<h1>Benjamin Vauchel</h1>
					<h2>Développeur Web</h2>
				</hgroup>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.</p><br/>
				<p>&#10029; Technos favorites &#10029; : <br/>HTML5, CSS3, jQuery, MODx, PHP, MySQL</p>
			</div>-->
			<p class="social">
				<a href="https://twitter.com/BenjaminVauchel" class="btn-twitter" title="Twitter">Twitter</a>
				<a href="https://github.com/benjamin-vauchel" class="btn-github" title="Github">Github</a>
			</p>
			<hgroup>
				<h1>Benjamin Vauchel</h1>
				<h2>Développeur Web</h2>
			</hgroup>

			<script>document.write('<n uers="znvygb:orawnzvadotinhpuryattznvydotpbz" pynff="oga oga-uvtuyvtug"><fcna>Pbagnpg</fcna></n>'.replace(/at/g,"@").replace(/dot/g,".").replace(/[a-zA-Z]/g,  function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);}));</script>
		
			<!--
			<form name="contactForm" id="form-contact">
				<p ng-class="{error: contactForm.email.$invalid}">
					<label for="form-contact-email">Votre email</label>
					<input class="text" id="form-contact-email" name="email" ng-model="mail.email" required type="email"/> 
					<span ng-show="contactForm.email.$error.required" class="help-inline">Veuillez indiquer votre adresse email</span>
					<span ng-show="contactForm.email.$error.email" class="help-inline">Cette adresse email n'est pas valide</span>
				</p>
				<p ng-class="{error: contactForm.msg.$invalid}">
					<label for="form-contact-msg">Votre message</label>
					<textarea id="form-contact-msg" name="msg" ng-model="mail.msg" required></textarea>
					<span ng-show="contactForm.msg.$error.required" class="help-inline">Veuillez rédiger un message</span>
				</p>
				<button class="submit" id="form-contact-submit" ng-click="sendForm()" ng-disabled="isClean() || contactForm.$invalid" type="submit">Envoyer</button>
			</form>
				{{mail}}-->

			<p class="bio">&#10029; Technos favorites &#10029; : <br/>HTML5, CSS3, jQuery, MODx, PHP, MySQL</p>
		</div>
		
		<nav id="nav">
			<p class="sidebar-section">Ci-dessous la liste de mes compétences classées en fonction du nombre de sites dans lesquels elles ont été utilisées.</p>
			<div id="search" class="sidebar-section">
				<input autofocus class="search" ng-model="query" onclick="this.select()" type="search" placeholder="Exemples : html, css3, ldap"/>
			</div>
			<div id="skills" class="sidebar-section">
				<div ng-repeat="skillCategory in skills">
					<h3><span>{{skillCategory.name}}</span></h3>
					<ul>
						<li ng-repeat="skill in skillCategory.skills | filter:query | orderBy:skillsOrder:true">
							<input id="{{skill.name}}" type="checkbox" ng-click="checkSkill(skill)" checked="{{skill.checked | check}}"/>
							<label for="{{skill.name}}">{{skill.name}} {{skill.favorite | favorite}}</label>
							<meter min="0" max="{{websites.length}}" title="Nombre de sites correspondants : {{skill.proficiency}}" value="{{skill.proficiency}}">
								<p class="meter"><span class="value" style="width:{{skill.proficiency | percent:websites.length}}%"></span></p>
							</meter>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</section>
	<section id="websites" role="main">
		<div class="firm">
			<h1><span>Développeur indépendant, 2010-2012</span></h1>
			<ul>
				<li class="website" ng-repeat="website in websites | filter:omycodeFilter | orderBy:websitesOrder:true">
					<a href="http://{{website.url}}" rel="no-follow" target="_blank">
						<div class="screenshot">
							<img ng-src="{{website.image}}" alt="{{website.name}}"/>
						</div>
						<hgroup>
							<h1>{{website.name}}</h1>
							<h2>{{website.url}}</h2>
						</hgroup>
						<p>{{website.description}}</p>
					</a>
				</li>
			</ul>
		</div>
		<div class="firm">
			<h1><span>IDEA Conseil, 2007-2010</span></h1>
			<ul>
				<li class="website" ng-repeat="website in websites | filter:ideaFilter | orderBy:websitesOrder:true">
					<a href="http://{{website.url}}" ng-mouseover="{{highlightSkills(website)}}" rel="no-follow" target="_blank">
						<div class="screenshot">
							<img ng-src="{{website.image}}" alt="{{website.name}}"/>
						</div>
						<hgroup>
							<h1>{{website.name}}</h1>
							<h2>{{website.url}}</h2>
						</hgroup>
						<p>{{website.description}}</p>
					</a>
				</li>
			</ul>
		</div>
	</section>
</body>
</html>