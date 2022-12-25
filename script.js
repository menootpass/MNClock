var bulan = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']; 

function jam() {
	const today = new Date();
	let month = today.getMonth();
	let y = today.getFullYear();
	let d = today.getDate();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById("jam").innerHTML=h;
	document.getElementById("menit").innerHTML=m;
	document.getElementById("detik").innerHTML=s;
	document.getElementById('tanggal').innerHTML=d+" "+bulan[month-1]+" "+y;
	setTimeout(jam, 1000);
}

function checkTime(q){
	if(q<10){
		q="0"+q;
	};
	return q;
}

