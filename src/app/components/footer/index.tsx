import { DetailedHTMLProps, HTMLAttributes } from "react";
import Link from "next/link";
import Image from "next/image";
import "./styles.css";

export type FooterProps = {} & DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer {...props}>
      <div id="footer-main-content">
        <div id="footer-contacts">
          <Image alt="logo" src={"/logo.png"} width={64} height={28} />
          <div className="footer-contant">
            <span className="contant-title">Address:</span>
            <div>
              <span>Level 1, 12 Sample St, Sydney NSW 2000</span>
            </div>
          </div>
          <div className="footer-contact">
            <span className="contant-title">Contact:</span>
            <div id="main-contacts">
              <span>1800 123 4567</span>
              <span>info@relume.io</span>
            </div>
          </div>
          <div id="footer-social">
            <Link href={"/"}>
              <Image
                alt="facebook"
                src={"/icons/Facebook.svg"}
                width={24}
                height={24}
              />
            </Link>
            <Link href={"/"}>
              <Image
                alt="instagram"
                src={"/icons/Instagram.svg"}
                width={24}
                height={24}
              />
            </Link>
            <Link href={"/"}>
              <Image alt="x" src={"/icons/X.svg"} width={24} height={24} />
            </Link>
            <Link href={"/"}>
              <Image
                alt="linkedin"
                src={"/icons/LinkedIn.svg"}
                width={24}
                height={24}
              />
            </Link>
            <Link href={"/"}>
              <Image
                alt="youtube"
                src={"/icons/youtube.svg"}
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
        <div id="footer-links">
          <Link href={"/"} className="footer-link">
            About us
          </Link>
          <Link href={"/"} className="footer-link">
            Blog
          </Link>
          <Link href={"/"} className="footer-link">
            Products
          </Link>
          <Link href={"/"} className="footer-link">
            Services
          </Link>
        </div>
      </div>
      <div id="footer-bottom-content">
        <div id="copyrights">© 2023 Relume. All rights reserved.</div>
        <div id="meta-links">
          <Link href={"/"}>Privacy Policy</Link>
          <Link href={"/"}>Terms of Service</Link>
          <Link href={"/"}>Cookies Settings</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
