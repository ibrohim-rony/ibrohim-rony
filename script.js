function putar(){
	const a = ['kertas', 'batu', 'gunting']; let i = 0;
	const waktuMulai = new Date().getTime() 
	info.innerHTML = "?";
	setInterval(function(){
		if (new Date().getTime() - waktuMulai > 1000) {
			clearInterval;
			return;
		}
		pComp.innerHTML = a[i++];
		if (i == a.length) i = 0;
	}, 100)
};

function getPilihanComp(){
	const c = Math.random();
	if (c < 0.34) return "kertas";
	if (c >= 0.34 && c < 0.74) return "batu";
	return "gunting";
}

function getHasil(comp, play){
	if (play == comp) return "SERI !!";
	if (play == "kertas") return (comp == "batu") ? "MENANG" : "KALAH";
	if (play == "batu") return (comp == "gunting") ? "MENANG" : "KALAH";
	if (play == "gunting") return (comp == "kertas") ? "MENANG" : "KALAH";
}

const container = document.querySelector(".container");
const pComp = document.getElementById("pilComp");
const info = document.getElementById("hasil");
const sComp = document.getElementById("sComp");
const sUsr = document.getElementById("sUsr");
const kesem = document.getElementById("kesem");
const pilUsr = document.querySelector(".pil-usr");
const penentu = document.getElementsByClassName("penentu")[0];
let scComp = 0;
let scUsr = 0;
let kesempatan = 15;
pilUsr.addEventListener("click", function(e){
	if ((e.target.className != "score") && (e.target.className != "pil-usr") && (e.target.tagName != "UL")){
		const pilihanComp = getPilihanComp();
		const hasil = getHasil(pilihanComp, e.target.id)
		putar()
		if (hasil == "MENANG") scUsr += 1;
	      	if ( hasil == "KALAH") scComp += 1;
		kesempatan--
	      	setTimeout(function(){
		      	pComp.innerHTML = pilihanComp;
		     	info.innerHTML = hasil;
		      	sComp.innerHTML = " " + scComp + " "; 
		      	sUsr.innerHTML = " " + scUsr + " ";
			if (kesempatan == 0) {
				if (scComp > scUsr) penentu.innerHTML = "DEFEAD !!";
				if (scComp < scUsr) penentu.innerHTML = "VICTORY !!";
				if (scComp == scUsr) penentu.innerHTML = "SERI !!";
				container.style.display = "none";
				penentu.style.display = "block";
			}
	      	}, 1000);
		kesem.innerHTML = kesempatan;
	}
});
