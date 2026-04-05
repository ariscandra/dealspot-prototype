export const breakdownDesktop = [
  {
    label: 'Bilah browser',
    description: 'Mockup jendela browser berisi tombol kontrol, bilah alamat (URL halaman toko), dan ikon DealSpot di toolbar. Pengguna mengklik ikon DealSpot untuk membuka panel perbandingan harga.',
  },
  {
    label: 'Halaman produk',
    description: 'Konten halaman produk yang sedang dibuka: gambar, judul, harga, dan deskripsi. Bagian ini menjadi konteks bagi panel perbandingan di sebelah kanan.',
  },
  {
    label: 'Panel atau placeholder',
    description: 'Jika panel terbuka: tampil ExtensionPanel berisi ringkasan harga dan kartu perbandingan per toko. Jika tertutup: teks ajakan agar pengguna mengklik ikon DealSpot.',
  },
];

export const breakdownExtensionPanel = [
  {
    label: 'Header',
    description: 'Logo DealSpot (versi ringkas) dan tautan "Set lokasi" untuk mengatur alamat pengiriman. Lokasi dipakai untuk estimasi ongkir di setiap kartu.',
  },
  {
    label: 'Konteks produk',
    description: 'Satu baris teks "Comparing: [nama produk]" yang diambil dari halaman yang sedang dibuka. Memastikan pengguna tahu produk mana yang dibandingkan.',
  },
  {
    label: 'Ringkasan termurah',
    description: 'Satu baris berisi toko dan total harga terendah (termasuk ongkir), misalnya "Total termurah: Tokopedia, Rp 189.000 (termasuk ongkir)". Gaya visual success agar mudah dipindai.',
  },
  {
    label: 'Blok keanggotaan',
    description: 'Ajakan bergabung DealSpot Member untuk mendapat harga khusus. Tombol "Subscribe now" dan "Log in / Daftar" untuk aksi lanjutan.',
  },
  {
    label: 'Daftar kartu perbandingan',
    description: 'Setiap kartu menampilkan nama toko, harga, ongkir, dan tombol "View on [Store]". Kartu dengan total terendah diberi badge "Best deal".',
  },
  {
    label: 'Footer',
    description: 'Teks "Data diperbarui setiap hari" untuk transparansi dan membangun kepercayaan pengguna terhadap data harga.',
  },
];

export const breakdownExtensionPanelEmpty = [
  {
    label: 'Keadaan kosong (panel)',
    description: 'Jika belum ada perbandingan untuk produk ini: ikon, pesan "Belum ada perbandingan untuk produk ini.", dan CTA "Cari di app" atau "Ubah pencarian".',
  },
];

export const breakdownExtensionPanelError = [
  {
    label: 'Error sebagian',
    description: 'Banner "Sumber [Platform] sementara tidak tersedia." di atas daftar; kartu dari platform lain tetap ditampilkan. Tombol "Coba lagi" opsional.',
  },
  {
    label: 'Error penuh',
    description: 'Ikon, pesan "Tidak bisa memuat data. Periksa koneksi dan coba lagi." dan CTA "Coba lagi". Menggantikan daftar kartu.',
  },
];

export const breakdownMobile = [
  {
    label: 'Header',
    description: 'Logo DealSpot (wordmark) di bagian atas layar sebagai identitas aplikasi.',
  },
  {
    label: 'Chip lokasi',
    description: 'Menampilkan "Dikirim ke: [kota]" jika lokasi sudah diatur, atau "Set lokasi" jika belum. Ketuk untuk membuka layar atau modal atur lokasi pengiriman (estimasi ongkir).',
  },
  {
    label: 'Bilah pencarian',
    description: 'Kolom pencarian utama dengan placeholder "Cari produk, bandingkan harga". Hasil pencarian diagregasi dari beberapa platform e-dagang.',
  },
  {
    label: 'Chip kategori',
    description: 'Filter cepat berdasarkan kategori (Semua, Fashion, Elektronik, dan lain-lain). Dapat digeser horizontal jika tidak muat di layar.',
  },
  {
    label: 'Baris hasil dan pengurutan',
    description: 'Label "Hasil untuk \'[kata kunci]\'" serta tombol Sort untuk mengurutkan berdasarkan harga terendah, rating, atau opsi lain.',
  },
  {
    label: 'Kisi kartu produk',
    description: 'Daftar kartu produk berisi gambar, nama, toko, dan harga. Satu kartu dapat menyandang badge "Best deal". Ketuk kartu untuk membuka di toko.',
  },
  {
    label: 'Keadaan kosong (tanpa hasil)',
    description: 'Jika filter atau kata kunci tidak mengembalikan hasil: ikon, pesan "Tidak ada hasil untuk \'[query]\'. Coba kata kunci lain atau ubah filter.", dan CTA (mis. "Tampilkan semua kategori") untuk mengosongkan filter.',
  },
];

export const breakdownMobileLocation = [
  {
    label: 'Layar Set lokasi',
    description: 'Judul "Lokasi pengiriman", input kota/kecamatan, dan tombol "Simpan". Setelah disimpan, estimasi ongkir mengacu ke lokasi ini. Masuk dari chip lokasi di beranda.',
  },
];

export const breakdownMobileSaved = [
  {
    label: 'Layar Daftar simpan',
    description: 'Judul "Daftar simpan", daftar produk yang disimpan. Tiap item punya toggle "Notifikasi harga" (diberi tahu saat harga turun). Jika kosong: empty state + CTA "Cari produk". Masuk dari tautan "Daftar simpan" di header.',
  },
];

export const breakdownLogo = [
  {
    label: 'Logo lengkap (default)',
    description: 'Logo utama berisi mark (ikon dot dan tag) serta wordmark "DealSpot". Dipakai di layar beranda dan materi pemasaran.',
  },
  {
    label: 'Mark saja',
    description: 'Hanya ikon atau mark dalam ukuran default dan ringkas. Dipakai sebagai favicon dan ikon ekstensi browser.',
  },
  {
    label: 'Versi ringkas',
    description: 'Lockup ringkas untuk header panel ekstensi dan toolbar. Wordmark dapat ditampilkan atau disembunyikan sesuai ruang.',
  },
  {
    label: 'Varian terang (latar gelap)',
    description: 'Versi logo untuk latar gelap, misalnya footer atau mode gelap, agar tetap terbaca.',
  },
];
