API : https://657ae866394ca9e4af1307bc.mockapi.io/myskill/portofolio
NOTE : TERKADANG END POINT HILANG OTOMATIS DARI MOCKAPI.IO

PAGES :
- / -> UNTUK FORM DAN PREVIEW 
- /PORTOFOLIO -> UNTUK PORTOFOLIO
  
SCHEMA DATA: 1 DATA TUNGGAL STATE UNTUK MENGHANDLE INPUTAN BERUPA OBJECT MENGGUNAKAN STATE MANAGEMENT REDUX TOOLKIT
{
  id?: number | string;
  avatar: string;
  banner: string;
  user_name: string;
  title: string;
  desc_data: string;
  portfolio: Array;
}

YANG SAYA PAHAMI PROJECT TENTANG PORTOFOLIO USER DIMANA 1 USER HANYA MEMILIKI 1 PORTOFOLIO DENGAN BANYAK LIST PEKERJAAN DIDALAMNYA. OLEH KARNA ITU ALUR PROGRAMNYA:
- FORM PERTAMA KALI DI MUAT SAYA MEMANGGIL DATA DARI API JIKA ADA SIMPAN ID PADA STATE DAN STATE DI PERBARUI BERDASARKAN DATA YANG DI FETCHING.
- KETIKA MENYIMPAN DATA JIKA ID ADA MAKA LAKUKAN METHOD PUT JIKA TIDAK ADA LAKUKAN METHOD POST
- SEHINGGA SIRKULASI DATA HANYA 1 SESUAI YANG SAYA FAHAMI.
- SERTA SAYA SUDAH MELAKUKAN UNIT TESTING PADA COMPONENTS DAN FUNCTION

NB: SEMOGA PENGUJI BERMURAH HATI MEMBERIKAN KRITIK, TAMBAHAN ATAU SARAN, TERIMAKASIH...
