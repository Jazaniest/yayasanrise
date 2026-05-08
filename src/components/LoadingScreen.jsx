import { useEffect, useState } from 'react';

const LOGO_URL = '/assets/logo.png';

const LoadingScreen = ({ onFinished }) => {
  // State untuk mengontrol posisi (mulai dari atas luar layar)
  const [position, setPosition] = useState('-translate-y-full');

  useEffect(() => {
    // 1. Trigger animasi masuk: Turun dari atas ke tengah segera setelah mount
    const entryTimer = setTimeout(() => {
      setPosition('translate-y-0');
    }, 50); // Delay sangat singkat agar transisi terlihat

    // 2. Simulasi durasi loading (2.5 detik)
    const loadingTimer = setTimeout(() => {
      // 3. Trigger animasi keluar: Naik kembali ke atas
      setPosition('-translate-y-full');
      
      // 4. Hapus komponen dari DOM setelah animasi keluar selesai
      const finishTimer = setTimeout(() => {
        onFinished();
      }, 1000); // Sinkron dengan duration-1000

      return () => clearTimeout(finishTimer);
    }, 3000); // Total waktu layar berada di tengah

    return () => {
      clearTimeout(entryTimer);
      clearTimeout(loadingTimer);
    };
  }, [onFinished]);

  return (
    <div className={`fixed inset-0 z-9999 flex items-center justify-center bg-white shadow-2xl transition-transform duration-1000 ease-in-out transform ${position}`}>
      
      <div className="flex flex-col items-center gap-6">
        {/* Logo RISE */}
        <div className="w-32 md:w-40 animate-pulse">
          <img src={LOGO_URL} alt="Logo RISE" className="w-full h-auto" />
        </div>
        
        {/* Loading Dots */}
        <div className="flex gap-2.5">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="w-3 h-3 bg-green-600 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            ></div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default LoadingScreen;