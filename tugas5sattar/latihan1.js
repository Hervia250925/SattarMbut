// Class Ikan
class Ikan {
    constructor(nama) {
        this.nama = nama;
    }

    jenisIkan() {
        console.log(`Ikan ini adalah ${this.nama}.`);
    }
}

class Salmon extends Ikan {
    jenisIkan() {
        console.log(`Ikan ini adalah ${this.nama}, dan termasuk dalam keluarga salmon.`);
    }
}

class Lele extends Ikan {
    jenisIkan() {
        console.log(`Ikan ini adalah ${this.nama}, dan termasuk dalam keluarga lele.`);
    }
}

let daftarIkan = [new Salmon('Salmon'), new Lele('Lele')];
daftarIkan.forEach(ikan => ikan.jenisIkan());


// Class Motor
class Motor {
    constructor(nama) {
        this.nama = nama;
    }

    jenisMotor() {
        console.log(`Motor ${this.nama} memiliki jenis dan spesifikasi.`);
    }
}

class Sport extends Motor {
    jenisMotor() {
        console.log(`Motor ${this.nama} adalah motor sport dan memiliki kecepatan tinggi.`);
    }
}

class Matic extends Motor {
    jenisMotor() {
        console.log(`Motor ${this.nama} adalah motor matic dan mudah digunakan.`);
    }
}

let daftarMotor = [new Sport('Yamaha R1'), new Matic('Honda Vario')];
daftarMotor.forEach(motor => motor.jenisMotor());


// Class Kereta
class Kereta {
    constructor(nama) {
        this.nama = nama;
    }

    jenisKereta() {
        console.log(`Kereta ${this.nama} memiliki jenis dan rute.`);
    }
}

class KeretaApi extends Kereta {
    jenisKereta() {
        console.log(`Kereta ${this.nama} adalah kereta api dengan layanan cepat.`);
    }
}

class KeretaLokal extends Kereta {
    jenisKereta() {
        console.log(`Kereta ${this.nama} adalah kereta lokal dengan rute pendek.`);
    }
}

let daftarKereta = [new KeretaApi('Argo Parahyangan'), new KeretaLokal('KRL Commuter Line')];
daftarKereta.forEach(kereta => kereta.jenisKereta());


// Class Pesawat
class Pesawat {
    constructor(nama) {
        this.nama = nama;
    }

    jenisPesawat() {
        console.log(`Pesawat ${this.nama} memiliki jenis dan kapasitas.`);
    }
}

class PesawatKomersial extends Pesawat {
    jenisPesawat() {
        console.log(`Pesawat ${this.nama} adalah pesawat komersial untuk penumpang.`);
    }
}

class PesawatCargo extends Pesawat {
    jenisPesawat() {
        console.log(`Pesawat ${this.nama} adalah pesawat cargo untuk pengiriman barang.`);
    }
}

let daftarPesawat = [new PesawatKomersial('Boeing 737'), new PesawatCargo('Antonov An-124')];
daftarPesawat.forEach(pesawat => pesawat.jenisPesawat());
