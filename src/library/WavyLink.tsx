import { FC, MouseEvent } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { WavyLinkProps } from ".";
import { WavyWaves } from "./WavyWaves";

export const WavyLink: FC<WavyLinkProps> = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLAnchorElement> | undefined) => {
    e?.preventDefault();

    if (!document.getElementById("react-wavy-transitions__waves")) {
      // change the url in address bar
      window.history.pushState("object or string", "Title", to);

      // show the waves
      ReactDOM.render(
        <WavyWaves />,
        document.getElementById("react-wavy-transitions__container")
      );

      // do the route change
      setTimeout(() => {
        navigate(to);
      }, 750); // duration will be the same as total wave transition
    }
  };

  return (
    <a
      href={"#"}
      onClick={(e: MouseEvent<HTMLAnchorElement> | undefined) => handleClick(e)}
    >
      {children}
    </a>
  );
};
