'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Shield, Wrench, Truck, Users } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-900 hover:text-orange-600 font-medium transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Tentang Kami</a>
              <a href="#products" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Produk</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Kontak</a>
              <a href="/privacy" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Terms</a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-900 hover:text-orange-600 hover:bg-gray-50 rounded-md font-medium">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md font-medium">Tentang Kami</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md font-medium">Produk</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md font-medium">Kontak</a>
              <a href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md font-medium">Privacy</a>
              <a href="/terms" className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md font-medium">Terms</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative text-white">
        <div className="absolute inset-0">
          <Image 
            src="/hero-bg.jpg" 
            alt="Heavy equipment working on construction site" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              PT DEWATA NARAPHADA ALLIANSI
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Perdagangan Alat Berat Terpercaya di Indonesia
            </p>
            <p className="text-lg mb-12 text-gray-200 max-w-2xl mx-auto">
              Mitra utama Anda dalam penyediaan alat berat berkualitas tinggi untuk berbagai kebutuhan industri dan konstruksi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
                Hubungi Kami
              </a>
              <a href="#products" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                Lihat Produk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Kami
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen untuk memberikan solusi alat berat terbaik dengan standar kualitas tertinggi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-orange-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Alat Berat Berkualitas</h4>
              <p className="text-gray-600">Menyediakan berbagai jenis alat berat dengan kualitas terbaik dan performa tinggi</p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Bergaransi</h4>
              <p className="text-gray-600">Semua produk kami dilengkapi dengan garansi dan dukungan purna jual</p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="text-green-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Maintenance Support</h4>
              <p className="text-gray-600">Layanan perawatan dan suku cadang untuk menjaga performa optimal</p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Tim Profesional</h4>
              <p className="text-gray-600">Didukung oleh tim ahli berpengalaman dalam industri alat berat</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Tentang <span className="text-orange-600">PT DEWATA NARAPHADA ALLIANSI</span>
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  PT DEWATA NARAPHADA ALLIANSI adalah perusahaan terkemuka yang bergerak di bidang perdagangan alat berat di Indonesia. Dengan pengalaman bertahun-tahun, kami telah menjadi mitra terpercaya bagi berbagai perusahaan konstruksi, pertambangan, dan industri.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Kami menyediakan berbagai jenis alat berat mulai dari excavator, bulldozer, wheel loader, hingga crane dengan kualitas terbaik dari merek-merek ternama. Komitmen kami adalah memberikan solusi lengkap untuk kebutuhan alat berat Anda.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="text-orange-600" size={20} />
                    <span className="text-gray-700">Produk berkualitas dengan harga kompetitif</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="text-orange-600" size={20} />
                    <span className="text-gray-700">Layanan purna jual yang handal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="text-orange-600" size={20} />
                    <span className="text-gray-700">Tim teknisi berpengalaman dan tersertifikasi</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Informasi Perusahaan</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-orange-600 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Alamat</p>
                      <p className="text-gray-700">GEDUNG GRAHA PRATAMA LT.18<br />
                      JL. LETJEN MT. HARYONO KAV.15<br />
                      Kel. Tebet Barat, Kec. Tebet<br />
                      Kota Adm. Jakarta Selatan, Prov. DKI Jakarta<br />
                      Kode Pos: 12810</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-orange-600" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Telepon</p>
                      <p className="text-gray-700">085373047291</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-orange-600" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-700">info@dewatanaraphada.co.id</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produk Unggulan Kami
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai jenis alat berat untuk memenuhi kebutuhan proyek Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Excavator', desc: 'Untuk penggalian dan pemindahan material', color: 'bg-orange-100 text-orange-800', image: '/excavator.jpg' },
              { name: 'Bulldozer', desc: 'Untuk perataan tanah dan pembersihan area', color: 'bg-blue-100 text-blue-800', image: '/bulldozer.jpg' },
              { name: 'Wheel Loader', desc: 'Untuk loading dan material handling', color: 'bg-green-100 text-green-800', image: '/wheel-loader.jpg' },
              { name: 'Crane', desc: 'Untuk pengangkatan material berat', color: 'bg-purple-100 text-purple-800', image: '/crane.jpg' },
              { name: 'Dump Truck', desc: 'Untuk pengangkutan material bulk', color: 'bg-red-100 text-red-800', image: '/dump-truck.jpg' },
              { name: 'Motor Grader', desc: 'Untuk perataan jalan dan permukaan', color: 'bg-yellow-100 text-yellow-800', image: '/motor-grader.jpg' }
            ].map((product, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all hover:scale-105">
                <div className="h-48 relative">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${product.color} mb-4`}>
                    {product.name}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h4>
                  <p className="text-gray-600 mb-4">{product.desc}</p>
                  <button className="text-orange-600 font-semibold hover:text-orange-700 flex items-center space-x-1">
                    <span>Detail Produk</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-orange-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Hubungi Kami Sekarang
            </h3>
            <p className="text-xl mb-12 text-gray-200">
              Dapatkan penawaran terbaik untuk kebutuhan alat berat Anda
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Phone className="text-orange-400 mx-auto mb-3" size={32} />
                  <p className="font-semibold mb-1">Telepon</p>
                  <p className="text-gray-200">085373047291</p>
                </div>
                <div className="text-center">
                  <Mail className="text-orange-400 mx-auto mb-3" size={32} />
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-gray-200">info@dewatanaraphada.co.id</p>
                </div>
                <div className="text-center">
                  <MapPin className="text-orange-400 mx-auto mb-3" size={32} />
                  <p className="font-semibold mb-1">Alamat</p>
                  <p className="text-gray-200 text-sm">Jakarta Selatan, 12810</p>
                </div>
              </div>
              
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg w-full md:w-auto">
                Konsultasi Gratis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image 
                  src="/logo.png" 
                  alt="PT DEWATA NARAPHADA ALLIANSI" 
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <div>
                  <h4 className="text-xl font-bold">PT DEWATA NARAPHADA</h4>
                  <p className="text-sm text-gray-400">ALLIANSI</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Perusahaan perdagangan alat berat terpercaya di Indonesia, menyediakan solusi lengkap untuk kebutuhan industri dan konstruksi.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Layanan</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Jual Alat Berat</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Sewa Alat Berat</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Maintenance</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Suku Cadang</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-orange-400 transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT DEWATA NARAPHADA ALLIANSI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}