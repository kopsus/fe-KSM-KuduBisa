import { ButtonRed, ButtonTertiary } from "./components/Button";
import Logo from "../../core/assets/Logo.png";

const Header = () => {
  const itemList = [
    {
      id: "1",
      name: "Beranda",
    },
    {
      id: "2",
      name: "Edukasi",
    },
    {
      id: "3",
      name: "Berita",
    },
    {
      id: "4",
      name: "Tentang",
    },
  ];

  return (
    <div className="w-full container flex justify-between items-center bg-primary py-3">
      <div className="flex items-center gap-2">
        <div className="h-full">
          <img src={Logo} alt="" />
        </div>
        <p className="font-semibold text-white text-xl">KSM KuduBisa</p>
      </div>
      <div className="flex items-center gap-11">
        {itemList.map((item, index) => (
          <p key={index} className="text-white">
            {item.name}
          </p>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <ButtonRed>Jual Sampah</ButtonRed>
        <ButtonTertiary>Login</ButtonTertiary>
      </div>
    </div>
  );
};

export default Header;
