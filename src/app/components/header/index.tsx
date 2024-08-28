import { DetailedHTMLProps, HTMLAttributes } from "react";
import Button from "@/app/components/button";
import HeaderNav from "@/app/components/header/components/HeaderNav";
import Image from "next/image";
import "./styles.css";

export type HeaderProps = {} & DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header {...props}>
      <div className="header-content">
        <Image alt="logo" src={"/logo.png"} width={64} height={28} />
        <HeaderNav />
      </div>
      <div className="header-buttons">
        <Button>Learn More</Button>
        <Button isAlternative>Sign In</Button>
      </div>
    </header>
  );
};

export default Header;
