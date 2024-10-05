const PeduliSampah = () => {
  const listPeduliSampah = [
    {
      id: "1",
      title: "Lingkungan",
      desc: "Sampah yang terkelola dengan baik menciptakan lingkungan yang bersih, aman, dan nyaman untuk ditinggali.",
    },
    {
      id: "2",
      title: "Kesahatan",
      desc: "Sampah yang terkelola dengan baik menciptakan lingkungan yang bersih, aman, dan nyaman untuk ditinggali.",
    },
    {
      id: "3",
      title: "Ekonomi",
      desc: "Sampah yang terkelola dengan baik menciptakan lingkungan yang bersih, aman, dan nyaman untuk ditinggali.",
    },
    {
      id: "4",
      title: "Kualitas Hidup",
      desc: "Sampah yang terkelola dengan baik menciptakan lingkungan yang bersih, aman, dan nyaman untuk ditinggali.",
    },
  ];

  return (
    <div className="container flex flex-col gap-5">
      <p className="title_section">Kenapa Harus Peduli Sampah?</p>
      <div className="grid grid-cols-4 gap-4">
        {listPeduliSampah.map((item, index) => (
          <div
            key={index}
            className="text-center shadow-md border-2 border-primary rounded-xl overflow-hidden"
          >
            <p className="bg-primary py-3 text-xl font-semi text-white">
              {item.title}
            </p>
            <p className="py-3">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeduliSampah;
