
 var usertypedetail= JSON.parse(window.localStorage.getItem("userdetail"));
 var usertype= usertypedetail.acc_type;
 
 
 
 var menuhtml='<div class="gw-sidebar"><div id="gw-sidebar" class="gw-sidebar"><div class="nano-content"><ul class="gw-nav gw-nav-list">';
 menuhtml+='<li class="init-un-active" style="height:60px;"> <a onClick="slide(\'index.html\')" style="padding:0px;"> <img src="images/log.jpg" width="260" height="60" class="img-responsive" style="height:60px !important;"> </a> </li>';
 menuhtml+='<li class="init-un-active" style="">  <input type="text" id="filtersearch" class="form-control" placeholder="Search Page" style="border-radius:0px; border:none !important; height:40px;"> </li>';
 menuhtml+='<li class="init-un-active"> <a onClick="slide(\'index.html\')"> <i class="fa fa-align-justify"></i> DASHBOARD </a> </li>';
 menuhtml+='<li class="init-arrow-down mnli"> <a href="javascript:void(0)"> <span class="gw-menu-text"><i class="fa fa-comments"></i> SMS</span> <b class="gw-arrow"></b> </a>';

 menuhtml+='<ul class="gw-submenu">';
 menuhtml+='<li><a  onClick="slide(\'compose-sms.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> Compose SMS</a></li>';
 menuhtml+='<li><a onClick="slide(\'all-sent-sms.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> All Sent SMS</a></li>';
 menuhtml+='<li><a onClick="slide(\'schedule-sms.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> Schedule SMS</a>';
 menuhtml+='<li><a onClick="slide(\'quick-compose.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> Quick Compose</a></li>';
 menuhtml+='<li><a onClick="slide(\'quick-sent-item.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> Quick Sent Item</a></li>';
 menuhtml+='</ul>';
 menuhtml+='</li>';
 menuhtml+='<li class="init-arrow-down mnli"> <a href="javascript:void(0)"> <span class="gw-menu-text"><i class="fa fa-phone"></i> Miss Call Alerts</span> <b class="gw-arrow icon-arrow-up8"></b> </a>';
 menuhtml+='<ul class="gw-submenu">';
 menuhtml+='<li><a onClick="slide(\'view-miss-call-alerts.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> View Miss Call Alerts</a></li>';
 menuhtml+='</ul>';
 menuhtml+='</li>';
 menuhtml+='<li class="init-arrow-down mnli"> <a href="javascript:void(0)"> <span class="gw-menu-text"><i class="fa fa-th"></i> Short/Long Code</span> <b></b> </a>';
 menuhtml+='<ul class="gw-submenu">';
 menuhtml+='<li><a onClick="slide(\'view-short-long-code.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> View Short/Long Code</a></li>';
 menuhtml+='</ul>';
 menuhtml+='</li>';

 menuhtml+='<li class="init-arrow-down mnli"> <a href="javascript:void(0)"> <span class="gw-menu-text"> <i class="fa fa-file"></i> Others</span> <b></b> </a>';
 menuhtml+='<ul class="gw-submenu">';
 menuhtml+='<li><a onClick="slide(\'add-template.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> Add Template</a></li>';
 menuhtml+='<li><a onClick="slide(\'view-template.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> View Template</a></li>';
 menuhtml+='<li><a onClick="slide(\'add-group.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> Add Group</a></li>';
 menuhtml+='<li><a onClick="slide(\'view-group.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> View Group</a></li>';
 menuhtml+='</ul>';
 menuhtml+='</li>';

 menuhtml+='<li class="init-arrow-down mnli"> <a href="javascript:void(0)"> <span class="gw-menu-text"> <i class="fa fa-user"></i> Users</span> <b></b> </a>';
 menuhtml+='<ul class="gw-submenu">';
 if(usertype!='user')
 {
   menuhtml+='<li><a onClick="slide(\'add-user.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> Add User</a></li>';
 }
 menuhtml+='<li><a onClick="slide(\'view-user.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> View User</a></li>';
 menuhtml+='</ul>';
 menuhtml+='</li>';

 menuhtml+='<li class="init-arrow-down mnli"> <a href="javascript:void(0)"> <span class="gw-menu-text"> <i class="fa fa-users"></i> Reseller</span> <b></b> </a>';
 menuhtml+='<ul class="gw-submenu">';
 if(usertype!='user')
 {
   menuhtml+='<li><a onClick="slide(\'add-reseller.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> Add Reseller</a></li>';
 }
 menuhtml+='<li><a onClick="slide(\'view-reseller.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> View Reseller</a></li>';
 menuhtml+='</ul>';
 menuhtml+='</li>';

 menuhtml+='<li class="init-arrow-down mnli"> <a href="javascript:void(0)"> <span class="gw-menu-text"> <i class="fa fa-cogs"></i> Settings</span> <b></b> </a>';
 menuhtml+='<ul class="gw-submenu">';

 if(usertype!='user')
 {
   menuhtml+='<li><a onClick="slide(\'changeusertype.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> Change User Type </a></li>';
 
 
    menuhtml+='<li><a onClick="slide(\'transfer-credits.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> Transfer Credits </a></li>';
 }
 
 menuhtml+='<li><a onClick="slide(\'transsactionin.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> Transactions In </a></li>';
 menuhtml+='<li><a onClick="slide(\'transsactionout.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> Transactions Out </a></li>';
 //menuhtml+='<li><a onClick="slide(\'smsapi.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> HTTP API </a></li>';

 //menuhtml+='<li><a onClick="slide(\'bulksmsapi.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> Bulk SMS API </a></li>';
 //menuhtml+='<li><a onClick="slide(\'xmlapi.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> XML API </a></li>';
 //menuhtml+='<li><a onClick="slide(\'credit-api.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> Credits API </a></li>';
 //menuhtml+='<li><a onClick="slide(\'delivery-api.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> Delivery API </a></li>';
 menuhtml+='<li><a onClick="slide(\'view-sender-ids.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> View Sender IDs </a></li>';
 //menuhtml+='<li><a onClick="slide(\'viewactualcredits.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> View Actual Credits </a></li>';
 menuhtml+='<li><a onClick="slide(\'send-notifications.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> Send Notifications </a></li>';
 //menuhtml+='<li><a onClick="slide(\'delivery-cutting.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> Delivery Cutting </a></li>';
 //menuhtml+='<li><a onClick="slide(\'delivery-cutting-users-list.html\')" href=""><i class="fa fa-angle-right" aria-hidden="true"></i> Delivery Cutting Users List</a></li>';
 menuhtml+='<li><a onClick="slide(\'website-settings.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> Website Settings</a></li>';
 //menuhtml+='<li><a onClick="slide(\'check-dnd-number.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> Check DND Number</a></li>';
 //menuhtml+='<li><a onClick="slide(\'block-number.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> Block Number</a></li>';
 //menuhtml+='<li><a onClick="slide(\'my-transactions.html\')" ><i class="fa fa-angle-right" aria-hidden="true"></i> My Transactions </a></li>';

 menuhtml+='</ul>';
 menuhtml+='</li>';
 
 document.getElementById("menu").innerHTML =menuhtml;

 var footerhtml='<div class="row">';
 footerhtml+='<div class="col-sm-3 col-xs-3 col-sm-3-me"><a onClick="slide(\'index.html\')" ><i class="fa fa-home fav-icon"></i><br>Dashboard </a></div>';

  footerhtml+='<div class="col-sm-3 col-xs-3 col-sm-3-me"><a onClick="slide(\'quick-compose.html\')" ><i class="fa fa-envelope-o fav-icon"></i><br>Quick SMS </a></div>';

 footerhtml+='<div class="col-sm-3 col-xs-3 col-sm-3-me">';
 footerhtml+='<a onClick="slide(\'quick-sent-item.html\')" >';
 footerhtml+='<i class="fa fa-pencil-square-o fav-icon"></i><br>';
 footerhtml+='Sent Item</a> </div>';

 footerhtml+='<div class="col-sm-3 col-xs-3 col-sm-3-me">';
 footerhtml+='<a onClick="slide(\'view-group.html\')" >';
 footerhtml+='<i class="fa fa-users fav-icon"></i><br>';
 footerhtml+='Contact List</a></div>';


 footerhtml+='<div class="col-sm-3 col-xs-3 col-sm-3-me">';
 footerhtml+='<span id="notifactionsicon" class="notifactions-icon"></span>';
 footerhtml+='<a onClick="slide(\'notification.html\')" >';
 footerhtml+='<i class="fa fa-bell fav-icon"></i><br>';
 footerhtml+='Notification </a></div>';

 footerhtml+='</div>'; 
 
 document.getElementById("footercredits").innerHTML =footerhtml;
 
 
 $('#filtersearch').keyup(function(){

    var that = this, $allListElements = $('.gw-nav > li, .mnli  > ul > li');

    var $matchingListElements = $allListElements.filter(function(i, li){
        var listItemText = $(li).text().toUpperCase(), 
            searchText = that.value.toUpperCase();
        return ~listItemText.indexOf(searchText);
    });    
    $allListElements.hide();
	
	jQuery('.init-un-active').show();
    $matchingListElements.show();
	
    
    $(".mnli  > ul").show();
    
    if($.trim($('#filtersearch').val())=='')
    {
        $(".mnli  > ul").hide();
    }
});

 

