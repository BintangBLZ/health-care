(function(){
    let btnHitungBMI=document.getElementById("btnHitungBMI");
    let btnCloseBMI=document.getElementById("btnCloseBMI");
    

    
     btnHitungBMI.addEventListener("click",function(){
            let bBadan=parseInt(document.getElementById("beratBadan").value);
            let tBadan=parseInt(document.getElementById("tinggiBadan").value);
            
            let tbError=document.getElementById("tbError");
            let bbError=document.getElementById("bbError");
            btnHitungBMI.classList.remove("activator");
            clear();
            if(isNaN(bBadan)){
              bbError.innerText="Must fill and Number Only ";
              bbError.style.color = "red";
              
            }
            else if(bBadan<=0){
              bbError.innerText="can't lower than or equal 0";
              bbError.style.color = "red";
              
            }
            else if(isNaN(tBadan)){
              tbError.innerText="Must fill and Number Only";
              tbError.style.color = "red";
              
            }
            else if(tBadan<=0){
              tbError.innerText="can't lower than or equal 0";
              tbError.style.color = "red";
              
              
            }
            else{
              btnHitungBMI.classList.add("activator");
              let bmi=countBmi(bBadan,tBadan);
              let kriteria=kriteriaBMI(bmi);
              let hasilBMI=document.getElementById('hasilBMI');
              let keterangan=document.getElementById('kriteriaBMI');
              hasilBMI.innerHTML=bmi;
              keterangan.innerHTML=kriteria;
              bmi=0;
              kriteria="";
            }
     });
     
     btnCloseBMI.addEventListener("click",function(){
         document.getElementById("beratBadan").value='';
         document.getElementById("tinggiBadan").value='';
         document.getElementById("tbError").value='';
         document.getElementById("bbError").value='';
         clear();
     });
     function clear(){
      let tbError=document.getElementById("tbError");
      let bbError=document.getElementById("bbError");
     bbError.innerHTML="";
     tbError.innerHTML="";
     }

     
     function countBmi(bb,tb){
         tb=tb/100;
         tb=Math.round((tb+Number.EPSILON)*100)/100;
         bmi=bb/(Math.pow(tb,2));
         bmi=Math.round((bmi+Number.EPSILON)*100)/100;
         return bmi;
     };
     
     function kriteriaBMI(number){
         if(number<18.5){
           return  kriteria="berat badan kurang";
             
             
         }
         else if(number>=18.5&& number<=22.9){
            return kriteria="berat badan normal";
         }
         else if(number>=23&&number<=29.9){
           return  kriteria="berat badan berlebih";
         }
         else{
            return kriteria="obesitas";
         }
     };
	 console.log("bmi.js is loaded");
})();  
            

  
        
