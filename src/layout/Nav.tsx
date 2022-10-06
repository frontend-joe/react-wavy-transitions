import { WavyLink } from "../library";

export const Nav = () => (
  <nav>
    <ul>
      <li>
        <WavyLink to="/">Home</WavyLink>
      </li>
      <li>
        <WavyLink to="/about">About</WavyLink>
      </li>
      <li>
        <WavyLink to="/contact">Contact</WavyLink>
      </li>
    </ul>
  </nav>
);
