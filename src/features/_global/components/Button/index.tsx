import { ReactNode } from "react";

interface IPropsButton {
  children: ReactNode;
}

export const ButtonRed = ({ children }: IPropsButton) => {
  return (
    <button className="py-2 px-5 bg-danger text-white rounded-md shadow-md">
      {children}
    </button>
  );
};

export const ButtonTertiary = ({ children }: IPropsButton) => {
  return (
    <button className="py-2 px-5 bg-transparent border border-white text-white rounded-md shadow-md">
      {children}
    </button>
  );
};
