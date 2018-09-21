<!-- <div style="margin-bottom:102px"></div> -->
<nav class="navbar navbar-expand-lg fixed-top navbar-dark">
	<div class="nav-placeholder">
		<button class="nav-button-clear" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
			<div class="nav-placeholder" style=" width:  100%; position:relative">
				<a class="navbar-brand-smol">
				<div class="sprinkle-holder">
				<img src="assets/img/logo-lite.svg" alt="">
					<span class="menu-sprinkle left-center"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></span>
					<span class="menu-sprinkle right-center"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></span>
				</div>
				</a>
			</div>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<a class="navbar-brand default-logo" href="/">
				<img src="assets/img/logo-lite.svg" alt="">
			</a>
			<ul class="navbar-nav navbar-front mr-auto">
				<li class="nav-item active">
					<a class="nav-link" href="/">Home</a>
				</li>
				<li class="nav-item active">
					<a class="nav-link" href="#">Services</a>
				</li>
				<li class="nav-item active">
					<a class="nav-link" href="#" onclick="scrollServices();">How it Works?</a>
				</li>
				<li class="nav-item active">
					<a class="nav-link" href="/supporters"> Our Supporters
						<span class="sr-only">(current)</span>
					</a>
				</li>
				<li class="nav-item active">
					<a class="nav-link" href="/faq">Faq
						<span class="sr-only">(current)</span>
					</a>
				</li>
			</ul>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav custom-ul">
					<?php 	if($this->uri->segment(1) === "login"){?>
					<li class="nav-item active">
						<a class="nav-link btn btn-lite" href="/register">Register
							<span class="sr-only">(current)</span>
						</a>
					</li>
					<?php
					} 
					else {
					?>
						<li class="nav-item active">
							<a class="nav-link btn btn-lite" href="/login">Login
								<span class="sr-only">(current)</span>
							</a>
						</li>
						<?php } ?>
				</ul>
			</div>
		</div>
</nav>
