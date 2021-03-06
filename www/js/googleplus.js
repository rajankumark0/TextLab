var googleapi = {
    authorize: function(options) {
        var deferred = $.Deferred();

        //Build the OAuth consent page URL
        var authUrl = 'https://accounts.google.com/o/oauth2/auth?' + $.param({
            client_id: options.client_id,
            redirect_uri: options.redirect_uri,
            response_type: 'code',
            scope: options.scope
        });

        //Open the OAuth consent page in the InAppBrowser
        var authWindow = window.open(authUrl, '_blank', 'location=no,toolbar=no');

        //The recommendation is to use the redirect_uri "urn:ietf:wg:oauth:2.0:oob"
        //which sets the authorization code in the browser's title. However, we can't
        //access the title of the InAppBrowser.
        //
        //Instead, we pass a bogus redirect_uri of "http://localhost", which means the
        //authorization code will get set in the url. We can access the url in the
        //loadstart and loadstop events. So if we bind the loadstart event, we can
        //find the authorization code and close the InAppBrowser after the user
        //has granted us access to their data.
        $(authWindow).on('loadstart', function(e) {
            var url = e.originalEvent.url;
            var code = /\?code=(.+)$/.exec(url);
            var error = /\?error=(.+)$/.exec(url);

            if (code || error) {
                //Always close the browser when match is found
                authWindow.close();
            }

            if (code) {
                //Exchange the authorization code for an access token
                $.post('https://accounts.google.com/o/oauth2/token', {
                    code: code[1],
                    client_id: options.client_id,
                    client_secret: options.client_secret,
                    redirect_uri: options.redirect_uri,
                    grant_type: 'authorization_code'
                }).done(function(data) {
                    deferred.resolve(data);
                }).fail(function(response) {
                    deferred.reject(response.responseJSON);
                });
            } else if (error) {
                //The user denied access to the app
                deferred.reject({
                    error: error[1]
                });
            }
        });

        return deferred.promise();
    }
};

 jQuery(document).ready(function()

{
    var $loginButton = $('#logingogle');
 
    $loginButton.on('click', function() {
		
        googleapi.authorize({
            client_id: '95225454408-ouikghqqv3ggs7oggm1bgba8kesiqdm1.apps.googleusercontent.com',
            client_secret: 'b6bOdet6evoQe7ANsS16N8d5',
            redirect_uri: 'http://control.textlab.in/index.php/pages/login',
            scope: 'https://www.googleapis.com/auth/userinfo.email'
        }).done(function(data) {
							
				 var url = 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token='+data.access_token;
	
					  $.ajax({
						type: 'GET',
						url: url,
					    	success: function(userInfo) {
						
						   window.localStorage.setItem('userdetail', JSON.stringify(userInfo));
							  window.localStorage.setItem("picture", userInfo.picture);
								window.localStorage.setItem("loggedIn", 1);
								window.localStorage.setItem("loggedwithfb", 1);
													
									window.plugins.nativepagetransitions.flip({
													 'backgroundColor' : "#BBBBBB",
													'direction': 'up',
													'duration': 2000,
													"href" : "index.html"
													 });
						  
						   
						
						},
						error: function(e) {
						 alert( JSON.stringify(e));

						}
					  });
			
        }).fail(function(data) {
            $loginStatus.html(data.error);
        });
    });
});
