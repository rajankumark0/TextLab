
function countwordcontact() {
	
    var value = document.getElementById('contactnumberst').value;

	var regex = /\s+/gi;
	if(value!=='')
	{
		
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;
	
	jQuery('#totalcontacts').html('Total Contact No\'s: '+wordCount+')');
	jQuery('#totalcontactrow').val(wordCount);
	}
	else
	{
		jQuery('#totalcontacts').html("Total Contact No's: 0)");
		jQuery('#totalcontactrow').val("0");
	}
}
jQuery(document).ready(function()
{
	countwords();
	countwordcontact();
	
	
});

function countwords()
{
	
	var words= document.getElementById('smscontent').value;
	
	var totalwords= words.length;
	document.getElementById('wordsremain').innerHTML=totalwords;
	var divid=document.getElementById('msgtype').value;
	
	if(divid=='unicodemsg' || divid=='unicodeflashmsg')
	{
	
		if(totalwords > 71)
		{
		dvdby=63;
		}
		else
		{
		dvdby=70;	
		}
	}
	else
	{
		if(totalwords > 161)
		{
		dvdby=153;
		}
		else
		{
		dvdby=160;
		}
		
		
		
	}
	if(totalwords > 0)
	{
		
		
		var ff= Math.ceil(totalwords / dvdby);
		
		document.getElementById('countsms').innerHTML=parseInt(ff);
		document.getElementById('countsmshidden').value=parseInt(ff);
		
	}
	if(totalwords == 0)
	{
	document.getElementById('countsms').innerHTML=0;
	document.getElementById('countsmshidden').value=0;	
	}
	
}




		/*jQuery(function(){
			jQuery('*[name=date]').appendDtpicker();
			$('*[name=date]').val("");

		});*/
	
		jQuery(document).ready(function()
		{
			jQuery("#scheduleison").click(function()
			{
				jQuery("#schedulenew").toggle();
			});
		});
	
jQuery(document).ready(function(){
jQuery("#removeduplicate").click(function(){
	
	if(jQuery("#contactnumberst").val()!='')
 	{
	alert("Please Wait For Few Seconds, Duplicacy Will Be Removed Soon");
	}
	//var remove = ['1','2','3','4','5','6'];   
	//position=arrDistinct.indexOf(remove);
	//for(i=0;i< position;i++)
	//	{	
		//  arrDistinct.splice(position);
	//} 
   var arr = jQuery("#contactnumberst").val().split("\n");
   var arrDistinct = new Array();
   jQuery(arr).each(function(index, item) {
      if(jQuery.inArray(item, arrDistinct) == -1)
        arrDistinct.push(item); 		   
  });
	
 jQuery("#contactnumberst").val(arrDistinct.join('\n'));

  return countwordcontact();
  
});
});

