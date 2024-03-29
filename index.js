document.addEventListener('DOMContentLoaded',function(){
    
    let elems = document.getElementById("slide-out");
    M.Sidenav.init(elems);
    
    
    
	loadNav();
  loadNavFooter();
	let page = window.location.hash.substr(1);
if (page == "") page = "home";
loadPage(page);
loadJS(page);
window.addEventListener("hashchange",function(){
	console.log("this is new "+window.location.hash.substr(1));
	let pages=window.location.hash.substr(1);
	loadJS(pages);
	location.reload();
	
});

 
function loadPage(page) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4) {
      let content = document.querySelector("#body-content");
      if (this.status === 200) {
        content.innerHTML = xhttp.responseText;
      } else if (this.status === 404) {
        content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
      } else {
        content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
      }
    }
  };
  xhttp.open("GET", "page/" + page + ".html", true);
  xhttp.send();
}
function loadNav() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status !== 200) return;
 
      // Muat daftar tautan menu
      document.querySelectorAll(".topnav, .sidenav").forEach(function(elm) {
        elm.innerHTML = xhttp.responseText;
      });
	  
 
      // Daftarkan event listener untuk setiap tautan menu
      document.querySelectorAll(".sidenav a, .topnav a").forEach(function(elm) {
        elm.addEventListener("click", function(event) {
          // Tutup sidenav
          let sidenav = document.querySelector(".sidenav");
          M.Sidenav.getInstance(sidenav).close();
 
          // Muat konten halaman yang dipanggil
          page = event.target.getAttribute("href").substr(1);
          loadPage(page);
		
      
     
        });
      });
    }
  };
  xhttp.open("GET", "nav.html", true);
  xhttp.send();
}
function loadNavFooter() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status !== 200) return;
 
      // Muat daftar tautan menu
      document.querySelectorAll(".footerNav").forEach(function(elm) {
        elm.innerHTML = xhttp.responseText;
      });
	  
 
      // Daftarkan event listener untuk setiap tautan menu
      document.querySelectorAll(".footerNav a").forEach(function(elm) {
        elm.addEventListener("click", function(event) {
          
         
 
          // Muat konten halaman yang dipanggil
          page = event.target.getAttribute("href").substr(1);
          loadPage(page);
		
      
     
        });
      });
    }
  };
  xhttp.open("GET", "navFooter.html", true);
  xhttp.send();
}

//menjalankan JS
function loadJS(page) {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "js/" + page + ".js", true);
  xhttp.onreadystatechange = function() {
    if (this.readyState ===XMLHttpRequest.DONE) {
        let status=xhttp.status;
      if (status===0||(status>=200&& status<400)){
        let myScript=document.getElementById("add-on");
        myScript.innerHTML=this.responseText;
        myScript.setAttribute("type","text/javascript");
      }
	else{
		document.getElementById("add-on").innerHTML="";
		return;
	}
    }
  }

	xhttp.send();
  };
  


             
});


