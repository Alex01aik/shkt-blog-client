import Link from "next/link";
import "./styles.css";

export type HeaderNavProps = {};

const HeaderNav: React.FC<HeaderNavProps> = (props) => {
  return (
    <div id="header-nav">
      <Link href="/">About us</Link>
      <Link href="/">Blog</Link>
      <Link href="/">Products</Link>
      <Link href="/">Services</Link>
    </div>
  );
};

export default HeaderNav;
