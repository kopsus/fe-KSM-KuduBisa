const News = () => {
  return (
    <div className="container grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-5">
        <p className="title_news">
          Banyumas Bangun Tempat Pengolahan Sampah Senilai Rp50,3 Miliar
        </p>
        <p className="desc_news line-clamp-[9]">
          PEMERINTAH Kabupaten Banyumas, Jawa Tengah, mengalokasikan dana Rp50,3
          miliar untuk membangun tempat pembuangan akhir berbasis lingkungan dan
          edukasi (TPA BLE) di Desa Wlahar Wetan, Kecamatan Kalibagor. TPA BLE
          menempati areal 3,5 hektare (ha). Alokasi anggaran senilai Rp50,3
          miliar tersebut rinciannya ialah Rp44 miliar bantuan dari APBN dan
          Rp6,3 miliar lainnya dari APBD kabupaten sebagai pendamping.
        </p>
        <p className="date_news">Senin, 02 Agu 2021</p>
      </div>
      <div className="overflow-hidden rounded-xl shadow-md border h-full w-full">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default News;
