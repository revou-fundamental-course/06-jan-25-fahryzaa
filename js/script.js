// Ini File javascript
 
 var name = prompt("");

 if (name) {
     var message = "Hi, " + name + "! Welcome To My Website.";
    
     document.getElementById('user-greeting').innerTextHTML = message;
     document.getElementById('greeting');
 } else {
     document.getElementById('user-greeting').innerTextHTML = "Hi, User Welcome To My Website.";
     document.getElementById('greeting');
 }


function tampilkanHasil() {
    
    var nama = document.getElementById('nama').value;
    var tanggalLahir = document.getElementById('tanggalLahir').value;
    var jenisKelamin;
    if (document.getElementById('pria').checked) {
        jenisKelamin = "Pria";
    } else if (document.getElementById('wanita').checked) {
        jenisKelamin = "Wanita";
    }
    var pesan = document.getElementById('pesan').value;

  
    document.getElementById('hasilNama').innerText = "Nama: " + nama;
    document.getElementById('hasilTanggalLahir').innerText = "Tanggal Lahir: " + tanggalLahir;
    document.getElementById('hasilJenisKelamin').innerText = "Jenis Kelamin: " + jenisKelamin;
    document.getElementById('hasilPesan').innerText = "Pesan: " + pesan;

   
    document.getElementById('hasil').style.display = 'flex';
}