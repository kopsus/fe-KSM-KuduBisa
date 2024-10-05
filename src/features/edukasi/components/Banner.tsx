const Banner = () => {
  return (
    <div className="mx-10 my-10 relative overflow-hidden border border-black shadow-xl h-60 rounded-xl">
      <div className="bg-black/60 absolute w-full h-full top-0 left-0">
        <img src="" alt="" />
      </div>
      <div className="absolute top-0 left-0 h-full flex flex-col gap-5 justify-center w-2/3 px-10 text-white">
        <p className="text-3xl font-bold">
          Apa yang anda ketahuin tentang jenis jenis sampah?
        </p>
        <p>
          Masih banyak orang yang belum mengetahuin mengenai jenjs-jenis Sampah.
          Sampah sendiri di golongkan kedalam beberapa jenis berdasarkan sifat.
        </p>
      </div>
    </div>
  );
};

export default Banner;
