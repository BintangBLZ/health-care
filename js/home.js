
   (function(){
	
	   
    let infoLink=document.getElementById("infoLink");
    infoLink.addEventListener("click",function(){
		loadPage('info');
        location.hash='info';
	
		
    });

   let  BMILink=document.getElementById("BMILink");
    BMILink.addEventListener("click",function(){
		loadPage('bmi');
        location.hash='bmi';
		
    });

    let kaloriLink=document.getElementById("kaloriLink");
    kaloriLink.addEventListener("click",function(){
		loadPage('kalori');
        location.hash='kalori';
		
    });
    function loadPage(page) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            let content = document.querySelector("#body-content");
            if (this.status == 200) {
              content.innerHTML = xhttp.responseText;
            } else if (this.status == 404) {
              content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
            } else {
              content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
            }
          }
        };
        xhttp.open("GET", "page/" + page + ".html", true);
        
        xhttp.send();
      };
	  
	  
	  
	  
	console.log("home.js is loaded");
	
	
    })();