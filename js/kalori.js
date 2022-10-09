(function(){
          let btnHitungKalori=document.getElementById("btnHitungKalori");
          let btnCloseKalori=document.getElementById("btnCloseKalori");
          let radioPria=document.getElementById("kalPria");
          let radioWanita=document.getElementById("kalWanita");
          let kalUsia=document.getElementById("kalUsia");
          let kalBeratBadan=document.getElementById("kalBeratBadan");
          let kalTinggiBadan=document.getElementById("kalTinggiBadan");
          let totalKalori=document.getElementById("totalKalori");
          let totalKarbohidrat=document.getElementById("totalKarbohidrat");
          let totalProtein=document.getElementById("totalProtein");
          let totalLemak=document.getElementById("totalLemak");
          let kalRingan=document.getElementById("kalRingan");
          let kalSangatRingan=document.getElementById("kalSangatRingan");
          let kalSedang=document.getElementById("kalSedang");
          let kalBerat=document.getElementById("kalBerat");
          
          btnHitungKalori.addEventListener("click",function(){

            let jenisKelamin=cekJenisKelamin();
            let aktivitas=cekJenisAktivitas();
            let beratBadan=parseInt(kalBeratBadan.value);
            let tinggiBadan=parseInt(kalTinggiBadan.value);
            let usia=parseInt(kalUsia.value);
            let kalBBError=document.getElementById("kalBBError");
            let kalTBError=document.getElementById("kalTBError");
            let kalUsiaError=document.getElementById("kalUsiaError");
            clearKal();
            btnHitungKalori.classList.remove("activator");
            
            if(isNaN(beratBadan)){
              kalBBError.innerText="Must fill and Number Only";
              kalBBError.style.color="red";
            }
            else if(beratBadan<=0){
              kalBBError.innerText="can't lower than or equal 0";
              kalBBError.style.color="red";
            }
            else if(isNaN(tinggiBadan)){
              kalTBError.innerText="Must fill and Number Only";
              kalTBError.style.color="red";
            }
            else if(tinggiBadan<=0){
              kalTBError.innerText="can't lower than or equal 0";
              kalTBError.style.color="red";
            }
            else if(isNaN(usia)){
              kalUsiaError.innerText="Must fill and Number Only";
              kalUsiaError.style.color="red";
            }
            else if(usia<=0){
              kalUsiaError.innerText="can't lower than or equal 0";
              kalUsiaError.style.color="red";
            } else{
              btnHitungKalori.classList.add("activator");
              let kalori=hitungKalori(jenisKelamin,beratBadan,tinggiBadan,usia,aktivitas);
              let karbohidrat=hitungKarbohidrat(kalori);
              let protein=hitungProtein(kalori);
              let lemak=hitungLemak(kalori);
              totalKalori.innerHTML=`${kalori} cal`;
              totalKarbohidrat.innerHTML=`${karbohidrat} gram`;
              totalLemak.innerHTML=`${lemak} gram`;
              totalProtein.innerHTML=`${protein} gram`;

            }

          });
          function clearKal(){
            let kalBBError=document.getElementById("kalBBError");
            let kalTBError=document.getElementById("kalTBError");
            let kalUsiaError=document.getElementById("kalUsiaError");
            kalBBError.innerText="";
            kalTBError.innerText="";
            kalUsiaError.innerText="";

          }
          btnCloseKalori.addEventListener("click",function(){
            totalKalori.innerHTML=`0 cal`;
            totalKarbohidrat.innerHTML=`0 gram`;
            totalLemak.innerHTML=`0 gram`;
            totalProtein.innerHTML=`0 gram`;
            kalBeratBadan.value='';
            kalTinggiBadan.value='';
            kalUsia.value="";
            radioPria.checked=true;
            radioWanita.checked=false;
            kalRingan.checked=false;
            kalSangatRingan.checked=true;
            kalSedang.checked=false;
            kalBerat.checked=false;
            clearKal();
          })
          function hitungKalori(jenisKelamin,beratBadan,tinggiBadan,usia,aktivitas){
            let kalori=0;
            if(jenisKelamin=="pria" && aktivitas=="sangatRingan"){
              kalori=(88.362+(13.397*beratBadan)+(4.799*tinggiBadan)-(5.677*usia))*1.3;
              return Math.round(kalori);
            }
            else if(jenisKelamin=="pria" && aktivitas=="ringan"){
              kalori=(88.362+(13.397*beratBadan)+(4.799*tinggiBadan)-(5.677*usia))*1.65;
              return Math.round(kalori);
            }
            else if(jenisKelamin=="pria" && aktivitas=="sedang"){
              kalori=(88.362+(13.397*beratBadan)+(4.799*tinggiBadan)-(5.677*usia))*1.76;
              return Math.round(kalori);
            }
            else if(jenisKelamin=="pria" && aktivitas=="berat"){
              kalori=(88.362+(13.397*beratBadan)+(4.799*tinggiBadan)-(5.677*usia))*2.1;
              return Math.round(kalori);
            }
            else if(jenisKelamin=="wanita" && aktivitas=="sangatRingan"){
              kalori=(447.593+(9.247*beratBadan)+(3.098*tinggiBadan)-(4.33*usia))*1.3;
              return Math.round(kalori);
            }
            else if(jenisKelamin=="wanita" && aktivitas=="ringan"){
              kalori=(447.593+(9.247*beratBadan)+(3.098*tinggiBadan)-(4.33*usia))*1.55;
              return Math.round(kalori);
            }
            else if(jenisKelamin=="wanita" && aktivitas=="sedang"){
              kalori=(447.593+(9.247*beratBadan)+(3.098*tinggiBadan)-(4.33*usia))*1.7;
              return Math.round(kalori);
            }
            else if(jenisKelamin=="wanita" && aktivitas=="berat"){
              kalori=(447.593+(9.247*beratBadan)+(3.098*tinggiBadan)-(4.33*usia))*2;
              return Math.round(kalori);
            }
          }
          function hitungKarbohidrat(kalori){
            let karbohidrat=(0.75*kalori)/4;
            return Math.round(karbohidrat);
          }
          function hitungProtein(kalori){
            let protein=(0.15*kalori)/4;
            return Math.round(protein);
          }
          function hitungLemak(kalori){
            let lemak=(0.1*kalori)/9;
            return Math.round(lemak);
          }
          function cekJenisKelamin(){
            if(radioPria.checked==true){
              return "pria";
            }
            else if(radioWanita.checked==true){
              return "wanita";
            }
            else{
              alert("anda belum mengisi jenis kelamin");
              return;
            }
          }
          function cekJenisAktivitas(){
            if(kalRingan.checked==true){
              return "ringan";
            }
            else if(kalSangatRingan.checked==true){
              return "sangatRingan";
            }
            else if(kalSedang.checked==true){
              return "sedang";
            }
            else if(kalBerat.checked==true){
              return "berat";
            }
            else{
              alert("anda belum mengisi jenis aktivitas")
              return;
            }
          }
		  console.log("kalori.js is loaded");
       
        })();  
  