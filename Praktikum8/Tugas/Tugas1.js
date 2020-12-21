// deklarasi
var ngulang = true;
var idMahasiswa = [];
var mahasiswa = {};
var choice;
let idx = 0;

//function
function Mahasiswa(firstName, birth, nim, prodi, nilai) {
	this.firstName = firstName;

	this.fullName = function() {
		return this.firstName + " "
	};

	this.birth = birth;
	this.nim = nim;

  this.age = function() {
		let year = this.birth.slice(this.birth.length - 4)
		return 2020 - year
	};

  this.prodi = prodi;
  this.nilai = nilai;
}

//Output Program
while (ngulang == true) {
	console.log("<============== Menu Penilaian ==============>");
	console.log("1. Tambah Mahasiswa");
	console.log("2. Penilaian");
	console.log("3. Lihat seluruh Mahasiswa");
	console.log("4. Keluar");
	choice = prompt("Masukan pilihan\t: ");

  // menentukan fungsi program
  switch(choice) {
    case '1':
      console.log("<===== Tambah Mahasiswa =====>");
      //  input
      let firstName = prompt("Input Nama \t: ");
      let birth = prompt("Input Tanggal Lahir\t: ");
      let nim = prompt("Input NIM\t: ");
      // deklarasi
      console.log("<=== Prodi");
      console.log("1. S1 SE");
      console.log("2. S1 IF");
      console.log("3. S1 SI");
      let prod = prompt("Masukan Pilihan Prodi\t: ");
      let prodi;
      if (prod == '1') {
        prodi = "S1 SE";
      } else if (prod == '2') {
        prodi = "S1 IF";
      } else {
        prodi = "S1 SI";
      }

      mahasiswa = new Mahasiswa(firstName, birth, nim, prodi);
      //memasukan object
      idMahasiswa.push(mahasiswa);

      console.log("\n\n");
      break;

    case '2':
      console.log("<===== Penilaian =====>");

      //input data
      let niim = prompt("NIM Mahasiswa\t: ");
      let nilai = prompt("Masukan Nilai\t: ");

      let nilaii;
      if (nilai <= 100 && nilai >= 80) {
        nilaii = "A";

      } else if (nilai <= 80 && nilai >= 60) {
        nilaii = "B";

      } else if (nilai <= 60 && nilai >= 40) {
        nilaii = "C";

      } else if (nilai <= 40 && nilai >= 0) {
        nilaii = "D";

      } else {
        nilaii = "Error";

	    }

      //memasukan data disesuaikan dengan elemen array
      for (let a in idMahasiswa) {
        if (idMahasiswa[a].nim == niim) {
          idMahasiswa[a].nilai = nilaii;
        }
      }
      console.log("\n\n");
      break;

    case "3":
      //output data
      for (let x in idMahasiswa) {
        console.log(`\nMahasiswa\: ${ idx }`);
        idx++;
        console.log(`Nama\t\t\t: ${ idMahasiswa[x].fullName() }`);
        console.log(`Tanggal Lahir\t: ${ idMahasiswa[x].birth }`);
        console.log(`Umur\t\t\t: ${ idMahasiswa[x].age() }`);
        console.log(`NIM\t\t\t\t: ${ idMahasiswa[x].nim }`);
        console.log(`Prodi\t\t\t: ${ idMahasiswa[x].prodi }`);
        console.log(`Nilai\t\t\t: ${ idMahasiswa[x].nilai }`);

      }

      console.log("\n\n");
      break;

    case '4':
      //proses mengakhiri program
      ngulang = false;
      console.log("TerimaKasih");
      break;

    default :
      //berjalan jika input  tidak sesuai
      console.log("Harap Masukan Pilihan Yang Sesuai");
      break;
  }
}