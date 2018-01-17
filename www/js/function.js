


	 function slide(hrf) {
		 
		 window.plugins.nativepagetransitions.flip({
				 'backgroundColor' : "#BBBBBB",
				'direction': 'up',
				'duration': 2000,
				"href" : hrf
            });
			  
  }
  
  
   function logout() {
	   
	   window.localStorage.removeItem("loggedIn");
	     window.localStorage.removeItem("userdetail");
	    window.localStorage.removeItem("loggedwithfb");
	      
	   slide('login.html');
	   
   }
   
   function viewprofile() {
	   
   }
   
   
  
   
   function setuserinfo(logged_in)
   {
	   
	           var loggedwithfb= window.localStorage.getItem("loggedwithfb");
			   
			     var userdetail= JSON.parse(window.localStorage.getItem("userdetail"));
				 
				  
           var profilehtml='';                
	
	
				  
				  if(loggedwithfb==1)
				  {
				  
				    
					 
				        var username = userdetail.name;
					
						var picture='<img src="'+window.localStorage.getItem("picture")+'"  style="height: 50px;width: 50px;" class="img-responsive">';
						
						
						profilehtml='<a href="#" id="loginButton"><span>'+picture+'</span></a><div style="clear:both"></div><div id="loginBox">';
				  
				  
				  }else
				  
				  {

						var username = userdetail.username;
						   var ufna=username.charAt(0);
						
					
						
						profilehtml='<a href="#" id="loginButton"><span>'+ufna.toUpperCase()+'</span></a><div style="clear:both"></div><div id="loginBox">';
				  
				  
				  }  
				  
	profilehtml+='<form id="loginForm"><span><a onClick="slide(\'my-profile.html\')" ><i class="fa fa-user"></i> My Profile</a></span>';
	profilehtml+='<span><a onclick="logout()"><i class="fa fa-lock"></i> Log Out</a></span></form></div>';
	
	 document.getElementById("loginContainer").innerHTML =profilehtml;
	 
	 
	               jQuery('#loginButton').click(function(){
					   
					    if(jQuery(this).hasClass('active')) {
					      jQuery('#loginButton').removeClass('active');
					      jQuery('#loginBox').hide();
						}else{
							
							 jQuery('#loginButton').addClass('active');
					         jQuery('#loginBox').show();
						}
					    
					   
				   });
	 
	 
					
					
					
					
					
					 $.ajax({
						type:'POST',
						url:"http://manage.staticking.net/index.php/servicessms/unreadnotificationapi",
						data:'logged_in='+logged_in,
						success:function(data)
						{
							if(data.trim()=='0')
							{
								
								$("#notifactionsicon").removeClass('notifactions-icon');
								
							}else
								{
									
									$("#notifactionsicon").html(data);
								}
							
						}
					  });
					
					
					
					
					
					
	   
   }
   
  
   
   app.initialize();
   
   
   