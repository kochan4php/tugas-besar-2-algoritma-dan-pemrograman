# Aplikasi Todo List

Aplikasi Todo List sederhana berbasis command-line yang dibuat dengan Node.js, memungkinkan pengguna untuk menambah, menghapus, melihat, dan keluar dari daftar tugas.

## Fitur

- **Tambah Todo**: Menambah todo baru ke dalam daftar.
- **Hapus Todo**: Menghapus todo tertentu dari daftar berdasarkan nomor.
- **Lihat Todo**: Menampilkan semua todo yang ada dalam daftar.
- **Keluar**: Menutup aplikasi.

## Persyaratan

- Node.js (versi 14.x atau lebih baru)

## Instalasi

1.  Clone repositori ini ke mesin lokal Anda atau salin kode ke direktori proyek Anda.

2.  Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/).

3.  Jalankan aplikasi menggunakan perintah berikut:

```bash
node index.js
```

## Cara Kerja

Saat aplikasi dijalankan, Anda akan disajikan dengan menu perintah yang tersedia:

1.  **Tambah todo (1)** - Meminta pengguna untuk memasukkan todo baru yang akan ditambahkan ke daftar.
2.  **Hapus todo (2)** - Meminta pengguna untuk memasukkan nomor todo yang ingin dihapus. Jika nomor yang dimasukkan tidak valid, aplikasi akan menampilkan pesan kesalahan.
3.  **Lihat todo (3)** - Menampilkan daftar todo yang ada, beserta nomor dan kontennya.
4.  **Keluar (4)** - Menutup aplikasi dan menampilkan pesan terima kasih.

### Perintah

Perintah akan ditampilkan dalam bentuk menu dengan opsi bernomor. Setelah memilih perintah, pengguna akan diminta untuk memasukkan informasi tambahan jika diperlukan. Jika perintah yang dimasukkan tidak valid, aplikasi akan menampilkan pesan kesalahan dan menu akan ditampilkan lagi.

### Fungsi-Fungsi Utama

1.  **`addTodo()`**: Meminta pengguna untuk memasukkan todo baru, yang kemudian ditambahkan ke array `todos`.
2.  **`deleteTodo()`**: Meminta pengguna untuk memasukkan nomor todo yang ingin dihapus. Aplikasi memvalidasi input dan menghapus todo yang sesuai jika valid.
3.  **`viewTodos()`**: Menampilkan daftar todo yang ada beserta nomornya.
4.  **`exitApp()`**: Menutup aplikasi dan menampilkan pesan terima kasih.
5.  **`invalidStatement()`**: Menampilkan pesan kesalahan jika perintah yang dimasukkan tidak valid.
6.  **`menu()`**: Menampilkan menu utama dengan opsi perintah dan menangani input pengguna untuk memilih perintah.

### Styling

- **Warna Output**: Aplikasi menggunakan warna berbeda untuk output:
  - Cyan untuk pertanyaan dan prompt.
  - Hijau untuk pesan sukses.
  - Merah untuk pesan kesalahan.
  - Kuning untuk pesan keluar.
  - Magenta untuk judul aplikasi.

## Contoh Penggunaan

```bash
============== Aplikasi Todo List =============
List perintah yang tersedia:

- Tambah todo (1)
- Hapus todo (2)
- Lihat todo (3)
- Keluar (4)

Silahkan masukkan perintah: 1
Masukkan todo: Belajar Node.js
Todo berhasil ditambahkan
```
