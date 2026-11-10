# Typography Best Practices - Interactive Web Presentation

##  Disusun oleh :

* **Nama**: Ahmad Surya Wardana

* **NPM**: 1412240010

* **Opsi Proyek**: Opsi 1 - Presentasi Interaktif (Interactive Web Presentation)

## Deskripsi Proyek

Proyek ini adalah sebuah presentasi web interaktif (sebagai alternatif dari PowerPoint statis) yang membahas panduan esensial mengenai desain tipografi dalam pengembangan UI/UX digital modern. Aplikasi ini dibangun sepenuhnya menggunakan **HTML Murni, Vanilla CSS, dan Vanilla JavaScript** tanpa bergantung pada *framework* eksternal untuk mendemonstrasikan pemahaman fundamental mengenai teknologi web.

## Topik yang Dibahas

Topik utama presentasi ini adalah **Typography Best Practices**, dengan rincian sub-topik meliputi:

1. Anatomi dan fundamental tipografi (Typeface vs Font).

2. Perbedaan penerapan Serif vs Sans-Serif pada layar digital.

3. Seni memadukan font (*Font Pairing*) dan penyusunan Hierarki Visual.

4. Praktik *Alignment* (Rata teks), *Whitespace*, dan Panjang Baris (*Line Length*).

5. Standar aksesibilitas warna teks berdasarkan WCAG (Web Content Accessibility Guidelines).

6. Studi kasus penerapan tipografi pada perusahaan teknologi nyata (Apple, Medium, Stripe).

## Cara Membuka & Menjalankan

Terdapat dua cara untuk menjalankan presentasi ini:

**Cara 1: Melalui Live Link (Disarankan)**
Cukup klik tautan *Live Presentation* di atas melalui *browser* modern apa pun (Chrome, Firefox, Safari, Edge). Presentasi ini sudah responsif dan dapat diakses melalui Desktop, Tablet, maupun *Smartphone*.

**Cara 2: Menjalankan secara Lokal (Offline)**

1. *Clone repository* ini: `git clone [URL_GITHUB_REPO_ANDA]` atau *download* sebagai ZIP.

2. Ekstrak folder proyek.

3. Klik dua kali pada file `index.html` untuk membukanya secara langsung di *browser*, atau gunakan ekstensi *Live Server* pada VS Code.

4. Gunakan tombol panah `Kiri/Kanan` pada *keyboard* atau klik tombol navigasi di layar untuk berpindah slide.

## Tools & Teknologi yang Digunakan

* **HTML5**: Struktur kerangka semantik slide.

* **Vanilla CSS3**:

  * *CSS Variables (Custom Properties)* untuk manajemen tema warna.

  * *Flexbox & CSS Grid* untuk tata letak responsif.

  * *Media Queries* dan fungsi `clamp()` untuk tipografi responsif (Fluid Typography).

* **Vanilla JavaScript (ES6)**: Logika navigasi slide dan pengelolaan elemen interaktif (DOM Manipulation).

* **Google Fonts API**: Mengimpor font *Bebas Neue* dan *Montserrat*.

* **VS Code**: *Code Editor*.

* **Git & GitHub**: *Version Control System*.

* **GitHub Pages**: Layanan *hosting web* gratis.

## Keputusan Desain (Design Decisions)

1. **Skema Warna (Dark Theme):** Saya menggunakan latar belakang gelap (`#121212`) dengan teks putih dan aksen oranye (`#F39C12`). Keputusan ini diambil untuk mengurangi ketegangan mata (eye strain) saat audiens membaca banyak teks tentang tipografi.

2. **Font Pairing:**

   * **Bebas Neue (Heading):** Digunakan untuk judul karena berkarakter kuat, tinggi, dan tegas (menarik perhatian).

   * **Montserrat (Body):** Digunakan untuk paragraf karena bentuk sans-serif geometrisnya yang bulat memberikan tingkat keterbacaan (legibility) yang sangat tinggi di resolusi layar kecil.

3. **UI Navigasi Mengambang (Floating/Overlay):** Navigasi diletakkan di sudut bawah dengan latar belakang semi-transparan (efek *glassmorphism/blur*) agar slide presentasi bisa mengisi 100% layar tanpa terpotong bingkai navigasi permanen.

4. **Elemen Interaktif:**

   * **Slider Interaktif:** Memberikan pengalaman langsung kepada pengguna untuk melihat dampak perubahan *line-height* terhadap kenyamanan membaca.

   * **Kuis Interaktif:** Diletakkan di akhir sesi sebagai alat evaluasi mikro (*micro-learning*) untuk menguji pemahaman audiens sebelum slide kesimpulan.

## Tantangan & Solusi

1. **Tantangan:** Membuat transisi slide terasa halus (seperti presentasi asli) tanpa menggunakan library animasi (seperti GSAP atau Framer Motion).
   **Solusi:** Memanfaatkan CSS `transition` untuk memanipulasi properti `opacity` dan `transform: translateY()` secara bersamaan saat JavaScript melakukan penambahan/penghapusan kelas `.active` pada elemen `<section>`.

2. **Tantangan:** Teks dan konten pada Slide 8 terpotong di layar laptop beresolusi rendah karena properti awal `overflow: hidden`.
   **Solusi:** Menambahkan penyesuaian CSS dengan memberikan perintah `overflow-y: auto` secara khusus pada bungkus *slide* dan memastikan `padding-bottom` cukup lega agar terhindar dari tumpang tindih (*overlap*) dengan tombol navigasi.

3. **Tantangan:** Memastikan tipografi tetap proporsional ketika dibuka di perangkat *mobile*.
   **Solusi:** Menggunakan pendekatan *Fluid Typography* melalui properti `clamp()` di CSS, sehingga *font-size* secara matematis mengecil sesuai lebar *viewport* layar perangkat tanpa memerlukan terlalu banyak *media queries*.

## Referensi & Sumber

1. [Google Fonts - Bebas Neue & Montserrat](https://fonts.google.com/)

2. [Web.dev - Learn Typography](https://web.dev/learn/design/typography)

3. [W3C - Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/WAI/standards-guidelines/wcag/)

4. Butterick, Matthew. *Butterick's Practical Typography*.