
<div class="content-detail1">
	<div class="container">
		<div class="box_content">

			<div class="contents">
				<div class="row">
					<div class="col-md-3 col-sm-3 hidden-xs">
							<div class="category__tile">
								<?=_danhmuc?>
							</div>
			        <ul class="category_left">
                <div class="col-md">
									<?php foreach($tintuc as $k => $v) {
											$linkb = 'gioi-thieu/'.$v['tenkhongdau'].'-'.$v['id'].'.html'
									?>
		
										<?php if($deviceType=="computer") {?>
											<li>
											<a href="<?=($v['link'] != '') ? $v['link'] : $linkb ?>" class="<?= $tintuc_detail[0]['id'] === $v["id"] ? "active" : "" ?>">
											<i class="fa fa-angle-right" style="margin-right: 10px"></i> <?=$v["ten"]?>
											</a>
										</li>
							<?php } else {?>
								<li><a href="<?=($v['file'] != '') ? _upload_tintuc_l.$v['file'] : $linkb ?>" <?php if($idc==$v["id"]) echo 'class="active"'; ?> title="<?=$v["ten"]?>"><i class="fa fa-angle-right" style="margin-right: 10px"></i> <?=$v["ten"]?></a></li>
							<?php } ?>
									<?php }?>
								</div>
					    </ul>
					</div>
					<div class="col-md-9 col-sm-9 col-xs-12">
						<div class="col-md mt-65">
							<!-- <div class="tcat"><div class="icon"><h1><?= $tintuc_detail[0]['ten'] ?></h1></div></div> -->
								<?php if($tintuc_detail[0]['h1']=='nhan-su') {?>
                  <?php if($deviceType =="computer"){?>
                    <div class="row">
                      <div class="box_product center ">
                        <?php foreach($tintuc_nhansu as $k => $v) if ($k < 3) {?>
                          <div class="col-md-4 mb-25">

                            <div class="nhansu">
                              <div class="nhansu_image">
                                <img src="<?=_upload_tintuc_l.$v["photo"]?>" alt="<?= $v['ten'] ?>"/>
                              </div>
                              <div class="nhansu_info jcenter">
                                <div class="nhansu_title">
                                  <a href="nhan-su/<?= $v['tenkhongdau'] ?>-<?= $v['id'] ?>.html"><?= $v['ten'] ?></a>
                                </div>
                                <div class="dec">
                                  <?= $v['mota'] ?>
                                </div>
                              </div>
                            </div>

                          </div>
                        <?php }?>
                        <?php foreach($tintuc_nhansu as $k => $v) if ($k > 2) {?>
                          <div class="col-md-5 mb-25">

                            <div class="nhansu">
                              <div class="nhansu_image">
                                <img src="<?=thumb($v["photo"],_upload_tintuc_l,$v["tenkhongdau"],280,170,1,80)?>" alt="<?= $v['ten'] ?>"/>
                              </div>
                              <div class="nhansu_info jcenter">
                                <div class="nhansu_title">
                                  <a href="nhan-su/<?= $v['tenkhongdau'] ?>-<?= $v['id'] ?>.html"><?= $v['ten'] ?></a>
                                </div>
                                <div class="dec">
                                  <?= $v['mota'] ?>
                                </div>
                              </div>
                            </div>

                          </div>
                        <?php }?>
                      </div>
                    </div>

                  <?php }else {?>
                    <div class="employer">
                      <?php foreach($tintuc_nhansu as $k => $v) {?>
												<div class="nhansu">
                          <div class="nhansu_image">
                            <img src="<?=_upload_tintuc_l.$v["photo"]?>" alt="<?= $v['ten'] ?>"/>
                          </div>
                          <div class="nhansu_info jcenter">
                            <div class="nhansu_title">
                              <a href="nhan-su/<?= $v['tenkhongdau'] ?>-<?= $v['id'] ?>.html"><?= $v['ten'] ?></a>
                            </div>
                            <div class="dec">
                              <?= $v['mota'] ?>
                            </div>
                          </div>
                        </div>
											<?php }?>
                    </div>
                    <script>
                      $(document).ready(function(){
                        $('.employer').owlCarousel({
                            loop: true,
                            margin: 0,
                            items: 1,
                            nav: true,
                            autoplay: false,
                            navText: true,
                            dots: false,
                            scrollPerPage: 1,
                            slideSpeed: 500
                        });
                      });
                    </script>
                  <?php } ?>
								<?php } else if ($tintuc_detail[0]['h1']=='iso') { ?>
									<img src="<?= _upload_tintuc_l.$tintuc_detail[0]['photo'] ?>" alt="<?= $tintuc_detail[0]['ten'] ?>"/>
								<?php } else {?>
									<?= $tintuc_detail[0]['noidung'] ?>
								<?php }?>

							<div class="clear"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="clear height"></div>

	</div>
</div>