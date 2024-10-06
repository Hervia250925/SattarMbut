class Kapal {
    #nama; // Properti privat
    #jenis; // Properti privat
    #panjang; // Properti privat
    #lebar; // Properti privat

    constructor(nama, jenis, panjang, lebar) {
        this.#nama = nama;
        this.#jenis = jenis;
        this.#panjang = panjang;
        this.#lebar = lebar;
    }

    infoKapal() {
        return `Kapal ${this.#nama} merupakan jenis ${this.#jenis} yang berukuran ${this.#panjang}m x ${this.#lebar}m.`;
    }

    luasKapal() {
        return this.#panjang * this.#lebar; // Menghitung luas kapal
    }
}

class KapalPenumpang extends Kapal {
    #kapasitasPenumpang; // Properti privat

    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang) {
        super(nama, jenis, panjang, lebar);
        this.#kapasitasPenumpang = kapasitasPenumpang; // Menyimpan kapasitas penumpang
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kapasitas ${this.#kapasitasPenumpang} orang.`;
    }

    infoDetail() {
        return `${this.infoKapal()} Luas kapal ini adalah ${this.luasKapal()} m².`;
    }

    tambahPenumpang(jumlah) {
        if (this.#kapasitasPenumpang - jumlah >= 0) {
            this.#kapasitasPenumpang -= jumlah;
            return `${jumlah} penumpang berhasil ditambahkan. Kapasitas tersisa: ${this.#kapasitasPenumpang} orang.`;
        } else {
            return `Tidak cukup kapasitas untuk menambah ${jumlah} penumpang.`;
        }
    }
}

class KapalTunda extends Kapal {
    #maksimalBeban; // Properti privat

    constructor(nama, jenis, panjang, lebar, maksimalBeban) {
        super(nama, jenis, panjang, lebar);
        this.#maksimalBeban = maksimalBeban; // Menyimpan maksimal beban
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki maksimal beban ${this.#maksimalBeban} ton.`;
    }

    infoDetail() {
        return `${this.infoKapal()} Luas kapal ini adalah ${this.luasKapal()} m².`;
    }

    angkutBeban(beban) {
        if (beban <= this.#maksimalBeban) {
            return `Beban ${beban} ton berhasil diangkut.`;
        } else {
            return `Beban melebihi kapasitas maksimal (${this.#maksimalBeban} ton).`;
        }
    }
}

class KapalSelam extends Kapal {
    #maksimalKedalaman; // Properti privat

    constructor(nama, jenis, panjang, lebar, maksimalKedalaman) {
        super(nama, jenis, panjang, lebar);
        this.#maksimalKedalaman = maksimalKedalaman; // Menyimpan maksimal kedalaman
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki maksimal kedalaman ${this.#maksimalKedalaman} meter.`;
    }

    infoDetail() {
        return `${this.infoKapal()} Luas kapal ini adalah ${this.luasKapal()} m².`;
    }

    menyelam(kedalaman) {
        if (kedalaman <= this.#maksimalKedalaman) {
            return `Kapal selam berhasil menyelam hingga ${kedalaman} meter.`;
        } else {
            return `Kedalaman melebihi batas maksimal (${this.#maksimalKedalaman} meter).`;
        }
    }
}

// Contoh penggunaan
const kapalFerry = new KapalPenumpang("Budiono Siregar", "Ferry", 20, 10, 600);
console.log(kapalFerry.infoDetail());
console.log(kapalFerry.tambahPenumpang(50));

const kapalTunda = new KapalTunda("Budiono Hervia", "Tunda", 400, 250, 800);
console.log(kapalTunda.infoDetail());
console.log(kapalTunda.angkutBeban(500));

const kapalSelam = new KapalSelam("Budiono Atala", "Selam", 200, 150, 2000);
console.log(kapalSelam.infoDetail());
console.log(kapalSelam.menyelam(1500));
