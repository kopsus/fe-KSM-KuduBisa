const PemilahanSampah = () => {
  const dataPemilahanSampah = [
    {
      title: "Memudahkan Pengolahan Sampah:",
      desc: "Sampah yang terpilah lebih mudah diolah menjadi produk baru atau dibuang dengan cara yang tepat.",
    },
    {
      title: "Mengurangi Volume Sampah:",
      desc: "Memisahkan sampah organik dan anorganik dapat mengurangi volume sampah yang dibuang ke tempat pemrosesan akhir(TPA).",
    },
    {
      title: "Meningkatkan Nilai Ekonomi Sampah:",
      desc: "Sampah anorganik yang terpilah dapat didaur ulang dan memiliki nilai ekonomi.",
    },
    {
      title: "Melestarikan Lingkungan:",
      desc: "Mengurangi pencemaran lingkungan yang disebabkan oleh sampah.",
    },
  ];

  return (
    <div className="bg-secondary container py-10">
      <div className="w-1/2 text-center mx-auto flex flex-col gap-3">
        <p className="title_section text-red-500">Pemilahan Sampah</p>
        <p>
          Pemilahan sampah merupakan tanggung jawab bersama dan sebagai langkah
          awal yang penting dalam pengelolaan sampah yang baik dan berkelanjutan
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-10">
        {dataPemilahanSampah.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <p className="text-lg font-semibold">{item.title}</p>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PemilahanSampah;
