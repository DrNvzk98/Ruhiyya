'use client';

import React, { useState, useEffect } from 'react';

// Data Statis Undangan (Dapat diganti sesuai klien)
const weddingData = {
  groom: {
    nickname: 'Budi',
    fullName: 'Budi Pratama, S.T.',
    parents: 'Putra dari Bpk. Ahmad & Ibu Siti',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  },
  bride: {
    nickname: 'Ani',
    fullName: 'Ani Wijaya, S.E.',
    parents: 'Putri dari Bpk. Hendra & Ibu Maya',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
  },
  eventDate: '2026-11-20T09:00:00',
  akad: {
    date: 'Jumat, 20 November 2026',
    time: '09:00 - 10:00 WIB',
    location: 'Masjid Agung Kota',
    address: 'Jl. Ahmad Yani No. 123, Kota Bahagia',
  },
  resepsi: {
    date: 'Jumat, 20 November 2026',
    time: '11:00 - 14:00 WIB',
    location: 'Grand Ballroom Hotel Majestic',
    address: 'Jl. Sudirman No. 45, Kota Bahagia',
  },
  mapsUrl: 'https://maps.google.com',
  bankInfo: [
    { bank: 'BCA', number: '1234567890', name: 'Budi Pratama' },
    { bank: 'Mandiri', number: '0987654321', name: 'Ani Wijaya' },
  ],
  gallery: [
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=600&auto=format&fit=crop',
  ],
};[cite: 5]

export default function MinimalistInvitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedBank, setCopiedBank] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // State Form RSVP & Wish[cite: 5]
  const [rsvpName, setRsvpName] = useState('');
  const [status, setStatus] = useState('Hadir');
  const [message, setMessage] = useState('');
  const [wishes, setWishes] = useState([
    { name: 'Rian & Partner', status: 'Hadir', message: 'Selamat Budi & Ani! Semoga menjadi keluarga yang sakinah mawaddah warahmah.' },
    { name: 'Siti Rahma', status: 'Tidak Hadir', message: 'Selamat yaa Ani! Maaf belum bisa hadir, doa terbaik untuk kalian.' }
  ]);[cite: 5]

  // Countdown Timer State[cite: 5]
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });[cite: 5]

  useEffect(() => {
    const target = new Date(weddingData.eventDate).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);[cite: 5]

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsPlaying(true);
    // Smooth scroll ke section berikutnya[cite: 5]
    setTimeout(() => {
      document.getElementById('profile-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };[cite: 5]

  const handleCopy = (number: string) => {
    navigator.clipboard.writeText(number);
    setCopiedBank(number);
    setTimeout(() => setCopiedBank(null), 2000);
  };[cite: 5]

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName || !message) return;
    setWishes([{ name: rsvpName, status, message }, ...wishes]);
    setRsvpName('');
    setMessage('');
  };[cite: 5]

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#333333] font-sans antialiased selection:bg-[#E2D4C9]">
      {/* Audio Player Dummy (Simulasi Musik Latar) */}
      {isPlaying && (
        <div className="fixed bottom-5 right-5 z-50">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 bg-stone-800 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-stone-700 transition"
            title="Audio Controller"
          >
            {isPlaying ? '🎵' : '🔇'}
          </button>
        </div>
      )}[cite: 5]

      {/* Screen 1: Cover / Amplop Digital */}
      <section className="min-h-screen flex flex-col justify-between items-center text-center p-8 border-b border-stone-200 relative overflow-hidden">
        <div className="my-auto space-y-6 max-w-lg">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">The Wedding Of</p>
          <h1 className="text-5xl md:text-6xl font-serif font-light text-stone-800 tracking-wide">
            {weddingData.groom.nickname} <span className="italic font-normal text-stone-400">&amp;</span> {weddingData.bride.nickname}
          </h1>
          <p className="text-sm text-stone-600 font-light tracking-widest uppercase">20 . 11 . 2026</p>
        </div>[cite: 5]

        <div className="mb-8 space-y-4 max-w-sm w-full">
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-stone-200/80 shadow-sm">
            <p className="text-xs text-stone-500 mb-1">Kepada Yth. Bapak/Ibu/Saudara/i</p>
            <p className="text-base font-medium text-stone-800">Tamu Undangan</p>
          </div>
          <button
            onClick={handleOpenInvitation}
            className="w-full py-3.5 bg-stone-800 hover:bg-stone-700 text-white text-xs tracking-widest uppercase rounded-xl transition shadow-md hover:shadow-lg active:scale-[0.99]"
          >
            Buka Undangan
          </button>
        </div>
      </section>[cite: 5]

      {/* Konten Utama (Muncul secara bertahap / scrollable) */}
      {isOpen && (
        <div className="animate-fade-in transition-all duration-700">
          {/* Screen 2: Salam & Profil Pasangan */}
          <section id="profile-section" className="py-24 px-6 max-w-4xl mx-auto text-center space-y-16">
            <div className="space-y-4 max-w-xl mx-auto">
              <span className="text-xl text-stone-400 font-serif italic">"</span>
              <p className="text-sm md:text-base text-stone-600 font-light leading-relaxed italic">
                Dan di antara tanda-tanda (kebesaran-Nya) ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya.
              </p>
              <p className="text-xs tracking-widest text-stone-400 uppercase">Ar-Rum: 21</p>
            </div>[cite: 5]

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Mempelai Pria */}
              <div className="space-y-4 flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-stone-200 shadow-inner">
                  <img src={weddingData.groom.image} alt={weddingData.groom.fullName} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-serif text-stone-800">{weddingData.groom.fullName}</h3>
                <p className="text-xs text-stone-500 max-w-xs">{weddingData.groom.parents}</p>
              </div>[cite: 5]

              {/* Mempelai Wanita */}
              <div className="space-y-4 flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-stone-200 shadow-inner">
                  <img src={weddingData.bride.image} alt={weddingData.bride.fullName} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-serif text-stone-800">{weddingData.bride.fullName}</h3>
                <p className="text-xs text-stone-500 max-w-xs">{weddingData.bride.parents}</p>
              </div>
            </div>
          </section>[cite: 5]

          {/* Screen 3: Detail Acara & Countdown */}
          <section className="py-20 bg-stone-100/60 px-6 border-y border-stone-200">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif text-stone-800">Waktu &amp; Lokasi</h2>
                <p className="text-xs text-stone-500 uppercase tracking-widest">Informasi Acara Pernikahan</p>
              </div>[cite: 5]

              {/* Countdown Timer */}
              <div className="grid grid-cols-4 gap-4 max-w-md mx-auto py-4">
                {[
                  { label: 'Hari', value: timeLeft.days },
                  { label: 'Jam', value: timeLeft.hours },
                  { label: 'Menit', value: timeLeft.minutes },
                  { label: 'Detik', value: timeLeft.seconds },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-stone-200 shadow-sm">
                    <span className="block text-2xl font-serif text-stone-800">{item.value}</span>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider">{item.label}</span>
                  </div>
                ))}
              </div>[cite: 5]

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
                {/* Akad */}
                <div className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
                  <h4 className="text-xl font-serif text-stone-800 border-b pb-2">Akad Nikah</h4>
                  <p className="text-sm text-stone-600 font-medium">{weddingData.akad.date}</p>
                  <p className="text-xs text-stone-500">{weddingData.akad.time}</p>
                  <div className="pt-2">
                    <p className="text-xs font-semibold text-stone-700">{weddingData.akad.location}</p>
                    <p className="text-xs text-stone-500">{weddingData.akad.address}</p>
                  </div>
                </div>[cite: 5]

                {/* Resepsi */}
                <div className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
                  <h4 className="text-xl font-serif text-stone-800 border-b pb-2">Resepsi</h4>
                  <p className="text-sm text-stone-600 font-medium">{weddingData.resepsi.date}</p>
                  <p className="text-xs text-stone-500">{weddingData.resepsi.time}</p>
                  <div className="pt-2">
                    <p className="text-xs font-semibold text-stone-700">{weddingData.resepsi.location}</p>
                    <p className="text-xs text-stone-500">{weddingData.resepsi.address}</p>
                  </div>
                </div>
              </div>[cite: 5]

              <a
                href={weddingData.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-8 py-3 bg-stone-800 hover:bg-stone-700 text-white text-xs tracking-widest uppercase rounded-xl transition shadow-sm"
              >
                Buka Google Maps
              </a>
            </div>
          </section>[cite: 5]

          {/* Screen 4: Galeri Foto Minimalis */}
          <section className="py-24 px-6 max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-serif text-stone-800">Momen Bahagia</h2>
              <p className="text-xs text-stone-500 uppercase tracking-widest">Galeri Foto Pre-Wedding</p>
            </div>[cite: 5]

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {weddingData.gallery.map((src, index) => (
                <div key={index} className="aspect-square rounded-xl overflow-hidden border border-stone-200 shadow-sm group">
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </section>[cite: 5]

          {/* Screen 5: Form RSVP & Ucapan */}
          <section className="py-20 bg-stone-100/60 px-6 border-t border-stone-200">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif text-stone-800">RSVP &amp; Ucapan</h2>
                <p className="text-xs text-stone-500 uppercase tracking-widest">Konfirmasi Kehadiran &amp; Doa Restu</p>
              </div>[cite: 5]

              <form onSubmit={handleRsvpSubmit} className="bg-white p-6 md:p-8 rounded-2xl border border-stone-200 shadow-sm text-left space-y-4">
                <div>
                  <label className="block text-xs text-stone-500 mb-1">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    value={rsvpName}
                    onChange={(e) => setRsvpName(e.target.value)}
                    placeholder="Masukkan nama Anda"
                    className="w-full p-3 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-400"
                  />
                </div>[cite: 5]

                <div>
                  <label className="block text-xs text-stone-500 mb-1">Konfirmasi Kehadiran</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full p-3 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-400"
                  >
                    <option value="Hadir">Hadir</option>
                    <option value="Tidak Hadir">Tidak Hadir</option>
                  </select>
                </div>[cite: 5]

                <div>
                  <label className="block text-xs text-stone-500 mb-1">Pesan / Doa</label>
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan ucapan &amp; doa terbaik..."
                    className="w-full p-3 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-400"
                  ></textarea>
                </div>[cite: 5]

                <button
                  type="submit"
                  className="w-full py-3 bg-stone-800 hover:bg-stone-700 text-white text-xs tracking-widest uppercase rounded-lg transition"
                >
                  Kirim Ucapan
                </button>
              </form>[cite: 5]

              {/* Feed Ucapan */}
              <div className="space-y-4 text-left max-h-80 overflow-y-auto pr-2">
                {wishes.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-sm space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-stone-800">{item.name}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${item.status === 'Hadir' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-rose-50 text-rose-600 border border-rose-200'}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 font-light">{item.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>[cite: 5]

          {/* Screen 6: Digital Gift & Penutup */}
          <section className="py-24 px-6 max-w-xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-serif text-stone-800">Digital Gift</h2>
              <p className="text-xs text-stone-500 leading-relaxed">
                Doa restu Anda merupakan karunia terindah bagi kami. Namun jika ingin memberikan tanda kasih, Anda dapat menyampaikannya melalui:
              </p>
            </div>[cite: 5]

            <div className="space-y-4">
              {weddingData.bankInfo.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                  <span className="text-xs font-bold tracking-widest text-stone-400 uppercase">{item.bank}</span>
                  <p className="text-xl font-mono text-stone-800 tracking-wider">{item.number}</p>
                  <p className="text-xs text-stone-500">a.n {item.name}</p>
                  <button
                    onClick={() => handleCopy(item.number)}
                    className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs rounded-lg transition"
                  >
                    {copiedBank === item.number ? '✓ Berhasil Disalin' : 'Salin No. Rekening'}
                  </button>
                </div>
              ))}
            </div>[cite: 5]

            <div className="pt-12 space-y-4 border-t border-stone-200">
              <p className="text-sm text-stone-600 font-light">
                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.
              </p>
              <h3 className="text-2xl font-serif text-stone-800">
                {weddingData.groom.nickname} &amp; {weddingData.bride.nickname}
              </h3>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}[cite: 5]
