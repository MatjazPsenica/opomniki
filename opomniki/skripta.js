window.addEventListener('load', function() {
	//stran nalozena
	var izvediPrijavo = function(event){
		var uporabnik=document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = uporabnik;
		document.querySelector(".pokrivalo").style.display="none";
		                                  //.style.visibility="hidden";
	}
	var dodajOpomnik = function(event){
		var ime_op = document.querySelector("#naziv_opomnika").value;
		var cas_op = document.querySelector("#cas_opomnika").value;
		document.querySelector("#naziv_opomnika").value = "";
		document.querySelector("#cas_opomnika").value = "";
		document.querySelector("#opomniki").innerHTML += "<div class='opomnik senca rob'> <div class='naziv_opomnika'>"+ime_op+ "</div> <div class='cas_opomnika'> Opomnik čez <span>"+cas_op+"</span> sekund.</div> </div>";
	
	}
	
	document.querySelector("#prijavniGumb").addEventListener('click',izvediPrijavo);
	document.querySelector("#dodajGumb").addEventListener('click',dodajOpomnik);
	
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
			if(cas>0){
				casovnik.innerHTML=cas-1;
				
			}
			else{
				var naziv = opomnik.querySelector(".naziv_opomnika").innerHTML;
				alert("konec opomnika")
				document.querySelector("#opomniki").removeChild(opomnik);
			}
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});