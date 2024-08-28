import { DetailedHTMLProps, HTMLAttributes } from "react";
import "./styles.css";

export type SectionProps = {} & DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const Section: React.FC<SectionProps> = (props) => {
  return <section {...props}>{props.children}</section>;
};

export default Section;
