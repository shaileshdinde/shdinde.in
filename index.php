<!DOCTYPE html>
<html lang="en">

<?php include "head.php" ?>

<body>
	<div class="page new-skin">
		<!-- preloader -->
		<div class="preloader">
			<div class="centrize full-width">
				<div class="vertical-center">
					<div class="spinner">
						<div class="double-bounce1"></div>
						<div class="double-bounce2"></div>
					</div>
				</div>
			</div>
		</div>

		<!-- background -->
		<div class="background gradient">
			<ul class="bg-bubbles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>

		<!--	Container		-->
		<div class="container opened" data-animation-in="rollIn" data-animation-out="rollOut">
			<!--	Header			-->
			<header class="header">
				<!-- header profile -->
				<div class="profile">
					<div class="title">Shailesh Dinde</div>
					<div class="subtitle subtitle-typed">
						<div class="typing-title">
							<p>Trainer</p>
							<p>Developer</p>
							<p>Traveller</p>
						</div>
					</div>
				</div>

				<!-- menu btn -->
				<a href="#" class="menu-btn"><span></span></a>

				<!-- menu -->
				<?php include "menu.php" ?>
			</header>

			<!--	Card - Started			-->
			<div class="card-started" id="home-card">
				<!--	Profile		-->
				<div class="profile no-photo">
					<!-- profile image -->
					<div class="slide" style="background-image: url(images/shailesh_2.jpg)"></div>

					<!-- profile titles -->
					<div class="title">Shailesh Dinde</div>
					<!--<div class="subtitle">Web Designer</div>-->
					<div class="subtitle subtitle-typed">
						<div class="typing-title">
							<p>Trainer</p>
							<p>Developer</p>
							<p>Traveller</p>
						</div>
					</div>

					<!-- profile socials -->
					<div class="social">
						<a target="_blank" href="https://www.facebook.com/dindeshailesh"><span class="fa fa-facebook"></span></a>
						<a target="_blank" href="https://www.linkedin.com/in/dindeshailesh/"><span class="fa fa-linkedin"></span></a>
						<a target="_blank" href="https://github.com/shaileshdinde"><span class="fa fa-github"></span></a>
						<a target="_blank" href="https://wa.me/918888763563"><span class="fa fa-whatsapp"></span></a>						
					</div>
					</br>
					<div class="subtitle subtitle-typed ">
						<div class="typing-title">
							<p>I Have No Special Talents.</p>
							<p>I Am Only Passionately Curious.</p>
						</div>
					</div>

					<!-- profile buttons -->
					<div class="lnks">
						<a href="images/Shailesh_Dinde.pdf" class="lnk" target="_blank">
							<span class="fa fa-download"></span><span class="text">Download CV</span>
						</a>
						<a href="https://wa.me/918888763563" class="lnk discover">
							<span class="fa fa-whatsapp"></span><span class="text">Contact Me</span>
						</a>
					</div>
				</div>
			</div>
			<!--Card - about -->
			<?php include "aboutcard.php" ?>

			<!--Card - skill -->
			<?php include "skillcard.php" ?>

			<!-- Card - Service	-->
			<?php include "servicecard.php" ?>

			<!--Card - Works	-->
			<?php include "workcard.php" ?>

			<!-- Card - Blog	-->
			<?php //include "blogcard.php" ?>

			<!-- Card - Contacts	-->
			<?php include "contactscard.php" ?>
		</div>
	</div>

	<!--
		jQuery Scripts
	-->
	<script src="js/jquery.min.js"></script>
	<script src="js/jquery.validate.js"></script>
	<script src="js/jquery.magnific-popup.js"></script>
	<script src="js/imagesloaded.pkgd.js"></script>
	<script src="js/isotope.pkgd.js"></script>
	<script src="js/jquery.slimscroll.js"></script>
	<script src="js/owl.carousel.js"></script>
	<script src="js/typed.js"></script>
	<script src="js/8da76d029b.js"></script>
	<script src="js/scripts.js"></script>
	 <script src="https://www.google.com/recaptcha/api.js?render=6Lfy4CArAAAAADjbTmU0UB_jJG90NfBLGusLYpF2"></script>
	<script>
        $(document).ready(function() {     
			$('#mailmsg').hide(); 
				$('#failmailmsg').hide();                              
        })
    </script>
        <script>
      function onClick(e) {
        e.preventDefault();
        grecaptcha.ready(function() {
          grecaptcha.execute('6Lfy4CArAAAAADjbTmU0UB_jJG90NfBLGusLYpF2', {action: 'submit'}).then(function(token) {
              // Add your logic to submit to your backend server here.
          });
        });
      }
  </script>
</body>

</html>