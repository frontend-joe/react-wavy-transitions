import { WavyLink } from "../library";

export const Nav = () => (
  <nav>
    <ul>
      <li>
        <WavyLink to="/" color="#ff44fd">
          Home
        </WavyLink>
      </li>
      <li>
        <WavyLink to="/about" color="#8f44fd">
          About
        </WavyLink>
      </li>
      <li>
        <WavyLink to="/contact" color="#2f44fd">
          Contact
        </WavyLink>
      </li>
    </ul>
  </nav>
);
