export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Servis HP Cepat,{" "}
        <span className="text-blue-400">Aman & Profesional</span>
      </h1>

      <p className="mt-4 text-gray-300 max-w-xl">
        Teknisi HP berpengalaman. Perbaikan layar, baterai, motherboard, dan software dengan harga terjangkau.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl">
          Chat WhatsApp
        </button>

        <button className="border border-white/30 px-6 py-3 rounded-xl">
          Lihat Layanan
        </button>
      </div>

    </section>
  );
}