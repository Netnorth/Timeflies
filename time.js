function displaytime() {

    let now = new Date();

    let numberofdays = now.getDay();
    let date = now.getDate();
    let numberofmonth = now.getMonth();
    let year = now.getFullYear();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    let dayname =  ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"]
    let pasaran = ["Wage", "Kliwon", "Legi", "Pahing", "Pon"]
    let monthname = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    let epoch = new Date(1970, 0, 1)
    epoch.setHours(0, 0, 0, 0);
    
    let diffindays = Math.floor((now - epoch) / (1000 * 60 * 60 * 24));
    let indexPasaran = diffindays % 5;
    
    let fullDate = dayname[now.getDay()] + " " + pasaran[indexPasaran] + ", " + date + " " + monthname[numberofmonth] + " " + year;

    let h = String(now.getHours()).padStart(2, '0');
    let m = String(now.getMinutes()).padStart(2, '0');
    let s = String(now.getSeconds()).padStart(2, '0');
    let fullTime = h + ":" + m + ":" + s;
    
    document.getElementById("date").innerHTML = fullDate;
    document.getElementById("hour").innerHTML = fullTime;

}
setInterval(displaytime, 1000);
displaytime();