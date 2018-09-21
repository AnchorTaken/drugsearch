<footer class="normal-footer">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<ul class="footer-links">
					<li><a href="">Lorem</a></li>
                    <li><a href="">Nesciunt</a></li>
                    <li><a href="">Delectus</a></li>
                    <li><a href="">Pariatur</a></li>
                    <li><a href="">Provident</a></li>
                    <li><a href="">Soluta</a></li>
				</ul>
			</div>
        </div>

		<div class="row">
			<div class="col-lg-12">
				<ul class="footer-icons">
					<li><a href=""><i class="fa fa-github" aria-hidden="true"></i></a></li>
					<li><a href=""><i class="fa fa-twitter-square" aria-hidden="true"></a></i></li>
					<li><a href=""><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
					<li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12">
				<span class="footer-bottom">Made by a human somewhere on the planet earth</span>
			</div>
		</div>
	</div>
</footer>










<?php if($this->session->userdata('logged_in'))
{
    redirect('/app');
}
