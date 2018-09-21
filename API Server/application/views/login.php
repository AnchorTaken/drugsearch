<div class="container-forsignin">
<div class="row" style="margin:0px">
<div class="col-lg-9" style="padding-left: 0px;">
      <div class="container-filler">
      <div class="text-container">
          <h1>Rave safly... or at least safer!</h1> 
          <h3>Look up drugs you are taking</h3> 
      </div>
      </div>
</div>
<div class="col-lg-3" style="margin-top: 200px;">
<?php echo form_open('users/login'); ?>

	
			<h1 class="text-center"><?php echo $title; ?></h1>
			<div class="form-group">
				<input type="text" name="username" class="form-control" placeholder="Enter Username" required autofocus>
			</div>
			<div class="form-group">
				<input type="password" name="password" class="form-control" placeholder="Enter Password" required autofocus>
			</div>
			<button type="submit" class="btn btn-primary btn-block">Login</button>
	

<?php echo form_close(); ?>
</div>
</div>
</div>