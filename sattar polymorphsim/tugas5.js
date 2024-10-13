class Mobil { 
    constructor(nama, merk, tahun, jenis) {
        this.nama = nama;
        this.merk = merk;
        this.tahun = tahun;
        this.jenis = jenis;
    }

    infoMobil() {
        return `Mobil ${this.nama} adalah merk ${this.merk}, diproduksi pada tahun ${this.tahun}, dengan jenis ${this.jenis}.`;
    }
}

class MobilSUV extends Mobil {
    constructor(nama, merk, tahun, jenis, penggerakRoda) {
        super(nama, merk, tahun, jenis);
        this.penggerakRoda = penggerakRoda; 
    }

    infoMobil() {
        return `${super.infoMobil()} Mobil ini menggunakan penggerak roda ${this.penggerakRoda}.`;
    }
}

class MobilBalap extends Mobil {
    constructor(nama, merk, tahun, jenis, kecepatanMaks) {
        super(nama, merk, tahun, jenis);
        this.kecepatanMaks = kecepatanMaks; 
    }

    infoMobil() {
        return `${super.infoMobil()} Mobil ini memiliki kecepatan maksimum ${this.kecepatanMaks} km/jam.`;
    }
}

class MobilListrik extends Mobil {
    constructor(nama, merk, tahun, jenis, kapasitasBaterai) {
        super(nama, merk, tahun, jenis);
        this.kapasitasBaterai = kapasitasBaterai; 
    }

    infoMobil() {
        return `${super.infoMobil()} Mobil ini memiliki kapasitas baterai ${this.kapasitasBaterai} mAh.`;
    }
}

class MobilPickUp extends Mobil {
    constructor(nama, merk, tahun, jenis, kapasitasAngkut) {
        super(nama, merk, tahun, jenis);
        this.kapasitasAngkut = kapasitasAngkut; 
    }

    infoMobil() {
        return `${super.infoMobil()} Mobil ini memiliki kapasitas angkut sebesar ${this.kapasitasAngkut} ton.`;
    }
}

// Polimorfisme
const mobilSedan = new Mobil("Sedona", "Toyota", 2020, "sedan");
const mobilSUV1 = new MobilSUV("Ranger", "Ford", 2021, "SUV", "4x4");
const mobilBalap1 = new MobilBalap("Speedster", "Ferrari", 2022, "balap", 300);
const mobilListrik1 = new MobilListrik("Volt", "Tesla", 2023, "listrik", 85000);
const mobilPickUp1 = new MobilPickUp("Truckster", "Isuzu", 2020, "pickup", 2);

const mobilList = [mobilSedan, mobilSUV1, mobilBalap1, mobilListrik1, mobilPickUp1];

// Menampilkan informasi dengan polimorfisme
mobilList.forEach(mobil => {
    console.log(mobil.infoMobil());
});
