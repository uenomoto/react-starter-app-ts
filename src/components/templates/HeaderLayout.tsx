import { FC, memo, ReactNode } from "react";
import { Header } from "../organisms/layout/Header";

// childrenの型はReactNode！
type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = memo(({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
});
