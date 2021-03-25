<?php if ($deviceType!="computer") {?>
  <div class="grid hidden-md">
    <div class="menumb">
      <?php include _template . "layout/cloud_menu.php"; ?>
    </div>

    <div class="logo_header">
      <a href="http://<?=$config_url?>" >
        <img src="<?=_upload_hinhanh_l.$row_photo['logo']?>" alt="<?=$row_setting['ten_'.$lang]?>" class="img-responsive" />
      </a>
    </div>
    
    <div class="btn_regis">
      <a href="<?=$row_setting["twitter"]?>">
        <img src="assets/images/me.jpg" />
      </a>
    </div>
  </div>
<?php } ?>