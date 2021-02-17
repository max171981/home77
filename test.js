/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  
  var x = document.getElementById("myLinks");
  /*var h = document.getElementById("homo");*/
  var onh = document.getElementById("icon");
  var wigth=document.documentElement.scrollWidth ;
  var visible = "visible";
  //let visible = "hidden";

  if (x.style.visibility==visible)
  {
	 x.style.visibility= "hidden";
	     
     /*x.style.visibility="visible";*/
	
	  	 
	  	 return;
	  
  } 
		/*x.style.display = "block";*/
  else 
  {
		
 
			/*x.style.display = "block";*/
			x.style.visibility="visible";
	  		return;  
	   
  }
  
  
 
}


$(window).on('resize', function(){
      var win = $(this); //this = window
      if (win.width() >=996 ) { 
	var x = document.getElementById("myLinks");
	x.style.visibility="visible";
      /* ... */ }
});




