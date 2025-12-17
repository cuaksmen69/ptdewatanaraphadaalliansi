import { ArrowLeft, FileText, AlertCircle, CheckCircle, Scale } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Terms() {
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
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="text-blue-600" size={40} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat dan Ketentuan
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
                  <AlertCircle className="text-blue-600 mr-3" size={24} />
                  Pendahuluan
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Selamat datang di <strong>PT DEWATA NARAPHADA ALLIANSI</strong>. Syarat dan Ketentuan ini mengatur penggunaan layanan kami, website, dan semua transaksi yang dilakukan melalui platform kami. Dengan menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan yang berlaku.
                </p>
              </section>

              {/* Definitions */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Definisi</h2>
                <p className="text-gray-700 mb-4">
                  Dalam Syarat dan Ketentuan ini:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>"Perusahaan"</strong> merujuk pada PT DEWATA NARAPHADA ALLIANSI</li>
                  <li><strong>"Pelanggan"</strong> merujuk pada individu atau perusahaan yang menggunakan layanan kami</li>
                  <li><strong>"Layanan"</strong> merujuk pada penjualan, penyewaan, dan maintenance alat berat</li>
                  <li><strong>"Produk"</strong> merujuk pada alat berat dan suku cadang yang kami jual atau sewakan</li>
                  <li><strong>"Website"</strong> merujuk pada situs web resmi PT DEWATA NARAPHADA ALLIANSI</li>
                </ul>
              </section>

              {/* Services */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="text-blue-600 mr-3" size={24} />
                  Layanan Kami
                </h2>
                <p className="text-gray-700 mb-4">
                  PT DEWATA NARAPHADA ALLIANSI menyediakan layanan:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Penjualan Alat Berat:</strong> Excavator, Bulldozer, Wheel Loader, Crane, Dump Truck, dan lainnya</li>
                  <li><strong>Penyewaan Alat Berat:</strong> Sewa harian, mingguan, atau bulanan dengan operator</li>
                  <li><strong>Maintenance dan Reparasi:</strong> Layanan perawatan dan perbaikan alat berat</li>
                  <li><strong>Suku Cadang:</strong> Penyediaan spare parts untuk berbagai merek alat berat</li>
                  <li><strong>Konsultasi Teknis:</strong> Layanan konsultasi untuk kebutuhan alat berat</li>
                </ul>
              </section>

              {/* Terms of Sale */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Syarat Penjualan</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">1. Pemesanan</h3>
                    <p>Pemesanan dapat dilakukan melalui website, telepon, email, atau langsung di kantor kami. Semua pemesanan memerlukan identitas yang valid dan informasi perusahaan yang lengkap.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">2. Pembayaran</h3>
                    <p>Pembayaran dapat dilakukan melalui:</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Transfer bank ke rekening resmi perusahaan</li>
                      <li>Tunai di kantor (dengan batasan tertentu)</li>
                      <li>Letter of Credit (untuk transaksi besar)</li>
                      <li>Cicilan (syarat dan ketentuan berlaku)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">3. Pengiriman</h3>
                    <p>Pengiriman alat berat akan dilakukan setelah pembayaran diterima secara penuh. Biaya pengiriman ditanggung oleh pembeli kecuali ada kesepakatan lain.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">4. Garansi</h3>
                    <p>Semua produk baru dilengkapi garansi pabrik. Produk bekas dilengkapi garansi sesuai kesepakatan. Klaim garansi harus disertai dengan dokumen lengkap.</p>
                  </div>
                </div>
              </section>

              {/* Rental Terms */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Syarat Penyewaan</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">1. Periode Sewa</h3>
                    <p>Periode sewa minimum adalah 24 jam. Perpanjangan sewa harus dikonfirmasi 48 jam sebelum berakhirnya kontrak.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">2. Deposit</h3>
                    <p>Penyewa harus membayar deposit pengamanan yang akan dikembalikan setelah alat dikembalikan dalam kondisi baik.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">3. Tanggung Jawab</h3>
                    <p>Penyewa bertanggung jawab atas kerusakan, kehilangan, atau pencurian selama periode sewa. Asuransi wajib disediakan oleh penyewa.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">4. Operator</h3>
                    <p>Operator dapat disediakan oleh perusahaan dengan biaya tambahan. Operator dari penyewa harus memiliki sertifikasi yang valid.</p>
                  </div>
                </div>
              </section>

              {/* Intellectual Property */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Kekayaan Intelektual</h2>
                <p className="text-gray-700 mb-4">
                  Semua konten di website kami, termasuk namun tidak terbatas pada teks, gambar, logo, dan desain, dilindungi oleh hak cipta dan merek dagang. Anda tidak diperbolehkan:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Menggunakan konten kami untuk tujuan komersial tanpa izin tertulis</li>
                  <li>Menyalin, mendistribusikan, atau memodifikasi konten kami</li>
                  <li>Menggunakan merek dagang atau logo kami tanpa persetujuan</li>
                  <li>Membuat karya turunan dari konten kami</li>
                </ul>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Scale className="text-blue-600 mr-3" size={24} />
                  Pembatasan Tanggung Jawab
                </h2>
                <p className="text-gray-700 mb-4">
                  PT DEWATA NARAPHADA ALLIANSI tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                  <li>Kehilangan keuntungan atau peluang bisnis</li>
                  <li>Kerusakan yang disebabkan oleh penggunaan yang tidak tepat</li>
                  <li>Keterlambatan pengiriman karena force majeure</li>
                  <li>Kerusakan akibat bencana alam, huru hara, atau perang</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Tanggung jawab maksimum kami terbatas pada nilai transaksi yang bersangkutan.
                </p>
              </section>

              {/* Force Majeure */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Force Majeure</h2>
                <p className="text-gray-700">
                  PT DEWATA NARAPHADA ALLIANSI tidak bertanggung jawab atas keterlambatan atau kegagalan pelaksanaan kewajiban yang disebabkan oleh kejadian di luar kendali kami, termasuk namun tidak terbatas pada bencana alam, perang, pemogokan, kerusuhan, atau perubahan peraturan pemerintah.
                </p>
              </section>

              {/* Dispute Resolution */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Penyelesaian Sengketa</h2>
                <p className="text-gray-700 mb-4">
                  Semua sengketa yang timbul dari atau berhubungan dengan Syarat dan Ketentuan ini akan diselesaikan melalui:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>Negosiasi damai antara kedua belah pihak</li>
                  <li>Mediasi melalui lembaga mediasi yang disetujui</li>
                  <li>Arbitrase Badan Arbitrase Nasional Indonesia (BANI)</li>
                  <li>Pengadilan Negeri Jakarta Selatan sebagai yurisdiksi terakhir</li>
                </ol>
              </section>

              {/* Governing Law */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hukum yang Berlaku</h2>
                <p className="text-gray-700">
                  Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap ketentuan yang dianggap tidak sah atau tidak dapat dilaksanakan tidak akan mempengaruhi ketentuan lainnya.
                </p>
              </section>

              {/* Changes to Terms */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Syarat dan Ketentuan</h2>
                <p className="text-gray-700">
                  PT DEWATA NARAPHADA ALLIANSI berhak mengubah Syarat dan Ketentuan ini setiap saat. Perubahan akan berlaku efektif setelah dipublikasikan di website kami. Penggunaan terus menerus layanan kami setelah perubahan berarti Anda menerima syarat yang diperbarui.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
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
                    <strong>Email:</strong> legal@dewatanaraphada.co.id
                  </p>
                  <p className="text-gray-700">
                    <strong>Telepon:</strong> 085373047291
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
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