import { ReactNode } from "react";

export type WavyLinkProps = {
  to: string;
  children: ReactNode;
  color?: string;
};

export { WavyContainer } from "./WavyContainer";
export { WavyLink } from "./WavyLink";
