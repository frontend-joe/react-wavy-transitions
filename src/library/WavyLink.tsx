import { FC, MouseEvent } from "react";
import { createRoot } from "react-dom/client";
import { useNavigate } from "react-router-dom";
import { WavyLinkProps } from ".";
import { WavyWaves } from "./WavyWaves";

export const WavyLink: FC<WavyLinkProps> = ({ to, children, color }) => {
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLButtonElement> | undefined) => {
    e?.preventDefault();

    if (!document.getElementById("react-wavy-transitions__waves")) {
      // change the url in address bar
      window.history.pushState("", "", to);

      // get access to wave container
      const container = createRoot(
        document.getElementById("react-wavy-transitions__container")!
      );

      // show the waves
      container.render(<WavyWaves color={color} />);

      // do the route change
      setTimeout(() => navigate(to), 750); // half total animation

      // hide the waves
      setTimeout(() => container.unmount(), 1500); // total animation
    }
  };

  return (
    <button
      type="button"
      className="react-wavy-transitions__wavy-link"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
