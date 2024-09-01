import Logo from "../../core/assets/Logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="container py-10 grid grid-cols-5 text-white">
          <div className="col-span-2 flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <div className="overflow-hidden h-full">
                <img src={Logo} alt="" />
              </div>
              <p>“Lorem ipsum dolor sit amet, consectetur”</p>
            </div>
            <p>
              Banyumas, Sudagaran, Kec. Banyumas, Kabupaten Banyumas, Jawa
              Tengah 53192
            </p>
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-1">
                <p>Telp</p>
                <p>WhatsApp</p>
                <p>Email</p>
              </div>
              <div className="flex flex-col gap-1">
                <p>: +62 12312312</p>
                <p>: +62 98342321</p>
                <p>: Email@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-semi">Menu</p>
            <div className="pl-5 border-l-2 border-white">
              <p>Berita</p>
              <p>Edukasi</p>
              <p>Tentang</p>
              <p>Jual Sampah</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-semi">Link Terkait</p>
            <div className="pl-5 border-l-2 border-white">
              <p>Karir</p>
              <p>Pengelolaan Sampah</p>
              <p>Berita Sampah</p>
              <p>Edukasi Sampah</p>
              <p>KSM Banyumas</p>
              <p>Dinas Lingkungan Hidup</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-semi">Peta Lokasi</p>
            <div className="border shadow-md w-full h-full rounded-xl overflow-hidden">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
      <p className="bg-darkPrimary text-white container py-2">
        Copyright © 2023 Kelompok Swadaya Masyarakat Kudu Bisa
      </p>
    </>
  );
};

export default Footer;
