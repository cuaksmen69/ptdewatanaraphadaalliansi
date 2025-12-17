import { ArrowLeft, Shield, Eye, Database, Lock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image 
                src="/logo.png" 
                alt="PT DEWATA NARAPHADA ALLIANSI" 
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">PT DEWATA NARAPHADA</h1>
                <p className="text-xs text-gray-600">ALLIANSI</p>
              </div>
            </div>

            <Link 
              href="/"
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-orange-600" size={40} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-gray-600">
              PT DEWATA NARAPHADA ALLIANSI
            </p>
            <p className="text-gray-500 mt-2">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Eye className="text-orange-600 mr-3" size={24} />
                  Pendahuluan
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Selamat datang di <strong>PT DEWATA NARAPHADA ALLIANSI</strong>. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda berikan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda menggunakan layanan kami, mengunjungi website kami, atau berinteraksi dengan kami dalam kapasitas apa pun.
                </p>
              </section>

              {/* Data Collection */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Database className="text-orange-600 mr-3" size={24} />
                  Pengumpulan Data
                </h2>
                <p className="text-gray-700 mb-4">
                  Kami dapat mengumpulkan jenis informasi berikut:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, alamat fisik, dan informasi identifikasi lainnya</li>
                  <li><strong>Informasi Perusahaan:</strong> Nama perusahaan, jabatan, dan informasi bisnis terkait</li>
                  <li><strong>Informasi Teknis:</strong> Alamat IP, jenis browser, waktu akses, dan data penggunaan website</li>
                  <li><strong>Informasi Transaksi:</strong> Detail pembelian, riwayat layanan, dan preferensi produk</li>
                  <li><strong>Informasi Komunikasi:</strong> Konten email, catatan panggilan, dan riwayat komunikasi lainnya</li>
                </ul>
              </section>

              {/* Data Usage */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Penggunaan Data</h2>
                <p className="text-gray-700 mb-4">
                  Kami menggunakan informasi yang dikumpulkan untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Menyediakan layanan dan produk yang Anda minta</li>
                  <li>Memproses transaksi dan mengelola akun pelanggan</li>
                  <li>Mengirimkan informasi produk, penawaran khusus, dan update layanan</li>
                  <li>Memberikan dukungan pelanggan dan layanan purna jual</li>
                  <li>Meningkatkan kualitas produk dan layanan kami</li>
                  <li>Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
                  <li>Melakukan analisis pasar dan penelitian pengembangan</li>
                </ul>
              </section>

              {/* Data Protection */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock className="text-orange-600 mr-3" size={24} />
                  Perlindungan Data
                </h2>
                <p className="text-gray-700 mb-4">
                  PT DEWATA NARAPHADA ALLIANSI berkomitmen untuk melindungi data pribadi Anda dengan:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Menggunakan enkripsi data untuk transaksi online</li>
                  <li>Membatasi akses data hanya kepada personel yang berwenang</li>
                  <li>Menerapkan kebijakan keamanan fisik dan digital yang ketat</li>
                  <li>Melakukan pembaruan keamanan secara berkala</li>
                  <li>Menyimpan data hanya selama diperlukan untuk tujuan yang ditentukan</li>
                </ul>
              </section>

              {/* Third Party Sharing */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Berbagi dengan Pihak Ketiga</h2>
                <p className="text-gray-700 mb-4">
                  Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami hanya dapat berbagi informasi Anda dalam keadaan berikut:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Dengan persetujuan eksplisit dari Anda</li>
                  <li>Kepada mitra bisnis tepercaya untuk menyediakan layanan yang diminta</li>
                  <li>Untuk memenuhi persyaratan hukum, perintah pengadilan, atau permintaan pemerintah</li>
                  <li>Kepada penyedia layanan yang membantu operasional bisnis kami</li>
                  <li>Dalam kasus penjualan atau merger perusahaan</li>
                </ul>
              </section>

              {/* Cookies */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Kebijakan Cookie</h2>
                <p className="text-gray-700 mb-4">
                  Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Cookie Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                  <li><strong>Cookie Performa:</strong> Membantu kami memahami cara penggunaan website</li>
                  <li><strong>Cookie Fungsionalitas:</strong> Mengingat preferensi dan pengaturan Anda</li>
                  <li><strong>Cookie Targeting:</strong> Digunakan untuk menyajikan konten yang relevan</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Anda dapat mengatur browser untuk menolak cookie atau memberi tahu saat cookie dikirim.
                </p>
              </section>

              {/* User Rights */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Pengguna</h2>
                <p className="text-gray-700 mb-4">
                  Sebagai pengguna, Anda memiliki hak untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Mengakses dan memperbarui informasi pribadi Anda</li>
                  <li>Meminta penghapusan data pribadi Anda</li>
                  <li>Menolak pemasaran langsung dari kami</li>
                  <li>Meminta salinan data pribadi yang kami simpan</li>
                  <li>Membatasi pemrosesan data pribadi Anda</li>
                  <li>Menarik persetujuan yang telah diberikan</li>
                </ul>
              </section>

              {/* Contact Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin melaksanakan hak Anda, silakan hubungi kami:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-2">
                    <strong>PT DEWATA NARAPHADA ALLIANSI</strong>
                  </p>
                  <p className="text-gray-700 mb-2">
                    Gedung Graha Pratama Lt. 18<br />
                    Jl. Letjen MT. Haryono Kav. 15<br />
                    Tebet Barat, Tebet<br />
                    Jakarta Selatan, DKI Jakarta 12810
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> privacy@dewatanaraphada.co.id
                  </p>
                  <p className="text-gray-700">
                    <strong>Telepon:</strong> 085373047291
                  </p>
                </div>
              </section>

              {/* Policy Updates */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pembaruan Kebijakan</h2>
                <p className="text-gray-700">
                  PT DEWATA NARAPHADA ALLIANSI berhak memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui website kami atau email. Penggunaan terus menerus layanan kami setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
                </p>
              </section>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft size={20} />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}