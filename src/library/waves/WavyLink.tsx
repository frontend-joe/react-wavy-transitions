import { FC, MouseEvent, ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { useNavigate } from "react-router-dom";
import { WavyWaves } from "./WavyWaves";

export type WavyLinkProps = {
  to: string;
  children: ReactNode;
  color?: string;
  direction?: string | "up" | "down";
  duration?: number;
};

export const WavyLink: FC<WavyLinkProps> = ({
  to,
  children,
  color = "#8f44fd",
  direction = "down",
  duration = 1500,
}) => {
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLButtonElement> | undefined) => {
    e?.preventDefault();

    if (
      !document.getElementById("react-wavy-transitions__waves") &&
      window.location.pathname !== to
    ) {
      // change the url in address bar
      window.history.pushState("", "", to);

      // get access to wave container
      const container = createRoot(
        document.getElementById("react-wavy-transitions__container")!
      );

      // show the waves
      container.render(
        <WavyWaves color={color} direction={direction} duration={duration} />
      );

      // do the route change
      setTimeout(() => navigate(to), duration / 2); // half total animation

      // hide the waves
      setTimeout(() => container.unmount(), duration); // total animation
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
