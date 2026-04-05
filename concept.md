## Konteks Tema: DealSpot

### 1. Latar Belakang
Belanja online sudah jadi kebiasaan banyak orang, tetapi cara orang membandingkan harga masih sering manual. Pengguna biasanya membuka beberapa tab e-commerce, mencari produk yang sama, lalu mengecek satu per satu harga, ongkir, dan promo. Proses ini makan waktu, melelahkan, dan sering berakhir dengan keputusan yang kurang optimal karena pengguna sudah keburu lelah duluan.

Di sisi lain, informasi harga dan promo sebenarnya sudah tersedia di berbagai platform. Masalahnya, informasi itu tersebar dan tidak terkumpul di satu tempat yang mudah diakses saat pengguna sedang mengambil keputusan.

### 2. Masalah yang Ingin Diselesaikan
Beberapa masalah utama yang ingin kami jawab lewat DealSpot:

- **Pengguna sulit melihat gambaran harga secara utuh**: harga di satu toko terlihat murah, tapi kalau dibandingkan dengan toko lain (termasuk ongkir dan promo) belum tentu paling menguntungkan.
- **Proses membandingkan harga masih ribet dan memakan waktu**: harus pindah-pindah tab, copy–paste nama produk, atau bahkan mengetik ulang kata kunci di tiap platform.
- **Momen pengambilan keputusan sering lewat begitu saja**: saat pengguna sudah membuka halaman produk, idealnya di saat itulah mereka bisa langsung melihat perbandingan harga tanpa perlu meninggalkan halaman tersebut.

### 3. Gambaran Besar Solusi: DealSpot
DealSpot kami rancang sebagai **aggregator harga** yang membantu pengguna:

1. Melihat perbandingan harga produk yang sama atau serupa di berbagai toko dan platform e-commerce.
2. Mengambil keputusan lebih rasional dengan mempertimbangkan harga, ongkir, dan (opsional) faktor lain seperti rating atau promo.
3. Menghemat waktu karena proses pencarian dan perbandingan dibantu sistem, bukan lagi dilakukan sepenuhnya secara manual.

Untuk mendukung kebiasaan belanja yang berbeda-beda, DealSpot hadir dalam dua bentuk:

- **Ekstensi browser**, untuk pengguna yang sering belanja lewat desktop/laptop.
- **Aplikasi mobile (Android & iOS)**, untuk pengguna yang lebih nyaman mencari produk langsung dari ponsel.

**Transparansi dan kepercayaan:** DealSpot mengutamakan kejujuran. Data harga dan ketersediaan diperoleh dari sumber yang transparan (API resmi mitra atau agregasi yang etis); frekuensi pembaruan (misalnya per jam atau per hari) ditampilkan di UI agar pengguna tahu seberapa mutakhir angkanya. Revenue DealSpot berasal dari affiliate/komisi merchant saat pengguna bertransaksi lewat link kami—bukan dari menjual data pribadi pengguna. Prinsip ini disampaikan di kebijakan privasi dan (opsional) di in-app copy singkat untuk membangun kepercayaan.

**Lokalisasi awal:** Pasar utama adalah Indonesia. Bahasa antarmuka default Bahasa Indonesia; mata uang IDR (Rp). Aksesibilitas (kontras, target sentuh, dukungan pembaca layar) mengikuti panduan WCAG 2.1 AA agar produk dapat digunakan oleh lebih banyak pengguna.

---

### 4. Peran Masing-Masing Platform

#### 4.1 Ekstensi Browser
Ekstensi browser DealSpot dirancang untuk digunakan saat pengguna **sudah** membuka halaman produk di salah satu platform e-commerce.

Peran utamanya:
- Mendeteksi produk yang sedang dibuka pengguna (berdasarkan judul, kata kunci, atau parameter lain yang relevan).
- Menampilkan **ringkasan perbandingan** (satu baris, misalnya “Total termurah: Tokopedia, Rp X termasuk ongkir”) lalu daftar produk serupa dari toko lain dalam bentuk card yang ringkas.
- Memungkinkan pengguna berpindah ke laman toko lain hanya dengan satu–dua klik. Link diarahkan ke halaman produk di platform tujuan (deep link ke app atau web sesuai ketersediaan).

**Lokasi untuk ongkir:** Agar perbandingan ongkir akurat, pengguna dapat mengatur lokasi/alamat (sekali saja atau dari pengaturan). Extension memakai lokasi ini untuk menampilkan estimasi ongkir atau “gratis ongkir” yang relevan. Tanpa lokasi, tampilan bisa menyertakan disclaimer singkat (mis. “Set lokasi untuk ongkir akurat”).

Alur singkat penggunaan:
1. Pengguna memasang dan (opsional) login ke akun DealSpot; mengatur lokasi jika ingin ongkir akurat.
2. Pengguna membuka salah satu situs e-commerce dan memilih produk yang ingin dibeli.
3. Ekstensi menampilkan ikon/indikator (toolbar atau sudut halaman) ketika ada perbandingan harga yang tersedia. Tidak memblokir konten halaman; panel hanya terbuka saat pengguna mengklik.
4. Saat ikon diklik, muncul panel yang berisi ringkasan “termurah” (jika ada), lalu beberapa alternatif produk dari berbagai toko.
5. Pengguna dapat mengeklik salah satu card untuk membuka laman produk di tab baru atau (bila didukung) deep link ke aplikasi e-commerce.

Dengan cara ini, pengguna tidak perlu mengetik ulang nama produk di banyak tab; ekstensi yang mengerjakan pekerjaan “mencari dan membandingkan” di belakang layar.

#### 4.2 Aplikasi Mobile
Aplikasi mobile DealSpot berperan sebagai **pusat pencarian** dan agregasi produk, bukan sekadar pelengkap versi ekstensi.

Peran utamanya:
- Menjadi tempat pengguna memulai pencarian produk dari awal.
- Menggabungkan hasil dari berbagai platform e-commerce ke dalam satu antarmuka.
- Menyediakan fitur filter dan sorting (harga, rating, gratis ongkir, dll.).
- **Set lokasi/alamat** agar estimasi ongkir dan label “gratis ongkir” bermakna untuk pengguna.
- **Simpan produk atau pencarian** (wishlist) dan **notifikasi saat harga turun atau stok kembali**—memperpanjang nilai DealSpot di luar satu sesi belanja.
- Saat pengguna memilih satu produk, aplikasi mengarahkan ke platform asal (**deep link ke aplikasi e-commerce** jika terpasang, misalnya Shopee/ Tokopedia app, atau fallback ke browser) agar konversi dan UX lebih baik.

Alur singkat penggunaan:
1. Pengguna membuka aplikasi DealSpot; (opsional) login dan atur lokasi untuk ongkir.
2. Pengguna memasukkan kata kunci produk (misalnya: “kemeja pria lengan panjang”).
3. Aplikasi mengumpulkan data produk terkait dari beberapa platform e-commerce.
4. Hasil ditampilkan dalam satu daftar dengan informasi yang penting (harga, toko, ongkir, rating, dsb.).
5. Pengguna bisa memanfaatkan filter (range harga, kategori, gratis ongkir, dll.) dan sorting.
6. Pengguna dapat menyimpan produk ke “Daftar simpan” dan menyalakan notifikasi harga; daftar ini sinkron dengan akun (jika login) sehingga bisa diakses dari ekstensi atau perangkat lain.
7. Saat pengguna memilih satu produk, aplikasi membuka halaman produk di app e-commerce atau browser.

**Keadaan kosong dan error:** Jika tidak ada hasil untuk pencarian, tampilkan pesan ramah (mis. “Tidak ada hasil untuk ‘X’. Coba kata kunci lain atau filter berbeda.”) dan CTA untuk ubah pencarian. Jika satu platform sementara tidak dapat diakses, tampilkan hasil dari platform lain dan (opsional) pesan singkat “Sumber [nama] sementara tidak tersedia” agar pengguna tetap mendapat nilai tanpa bingung.

### 5. Perbedaan Fungsi Ekstensi vs Aplikasi
Secara singkat, perbedaan peran dua platform ini adalah:

- **Ekstensi browser**: digunakan ketika pengguna **sudah berada** di halaman produk dan ingin memastikan apakah harga tersebut sudah paling baik dibandingkan toko/platform lain.
- **Aplikasi mobile**: digunakan ketika pengguna **baru mulai mencari** produk dan ingin melihat berbagai pilihan dari banyak platform di satu tempat, plus simpan & notifikasi harga.

Keduanya saling melengkapi: ekstensi mengoptimalkan momen “sebelum checkout” di desktop, sedangkan aplikasi membantu dari sisi eksplorasi dan pencarian di mobile. **Akun DealSpot (opsional)** memungkinkan sinkronisasi: daftar simpan, notifikasi harga, dan preferensi lokasi dapat dipakai di extension dan app sehingga pengalaman terasa satu produk.

### 6. Batasan Awal dan Pengembangan Berikutnya

#### 6.1 Scope sementara
- Fokus terlebih dahulu pada kategori produk yang sering dicari dan relatif mudah dibandingkan (misalnya fashion, elektronik kecil, dan kebutuhan rumah tangga umum).
- Integrasi ke **beberapa platform e-commerce besar** terlebih dahulu (contoh: Shopee, Tokopedia, Lazada atau setara), sebelum diperluas ke marketplace lain. Sumber data (API resmi vs agregasi) dan batas etis/hukum perlu diatur per platform.
- Pertimbangan awal lebih menekankan pada **harga dan ongkir**; aspek lain seperti promo spesifik, cashback, atau poin loyalitas bisa ditambahkan kemudian sebagai pengayaan.

#### 6.2 Fase pengembangan berikutnya (backlog)
- **Price history / trend:** Tampilkan informasi “harga 30 hari terakhir turun X%” atau “harga terendah 90 hari: Rp X” agar pengguna bisa menilai apakah suatu tawaran benar-benar deal. Diferensiasi kuat dibanding aggregator yang hanya bandingkan antar-toko.
- **Perbandingan tambahan:** Opsional menampilkan warranty, kebijakan return, atau indikasi “seller yang sama di beberapa platform” agar keputusan tidak hanya berdasarkan angka harga semata.

Dengan konteks ini, DealSpot diposisikan sebagai alat bantu praktis yang menyederhanakan proses membandingkan harga, membangun kepercayaan lewat transparansi, dan siap diiterasi (lokasi, simpan & notifikasi, price history) untuk nilai jangka panjang.

---

**Prototype:** Spesifikasi desain dan instruksi pembuatan prototype ada di `design_spec.md` dan `prompt_dumpt.md`. Prototype dibangun sebagai aplikasi React multi-file (komponen bersama + tokens) dan ditinjau di browser. Setiap layar mockup dilengkapi breakdown/keterangan ala wireframe (di bawah atau samping) agar setiap area punya penjelasan singkat untuk review dan presentasi.

Tugas Mata Kuliah Technopreneurship
