import { WavyLink } from "../library/waves";


// Add random data for more wave variance

function generateRandomData(length: number): number[] {
  return Array.from({ length }, () => Math.floor(Math.random() * 3) + 1);
}

export const Nav = () => {
  // Only 4 for smooth waves
  const seriesDataA = generateRandomData(4);
  const seriesDataB = generateRandomData(4);

  return (
    <nav>
      <WavyLink to="/" color="#ff44fd" 
      seriesDataA={seriesDataA} 
      seriesDataB={seriesDataB}>
        Home
      </WavyLink>

      <WavyLink
        direction="up"
        to="/about"
        color="#8f44fd"
        seriesDataA={seriesDataA}
        seriesDataB={seriesDataB}
      >
        About
      </WavyLink>

      <WavyLink
        duration={1000}
        to="/contact"
        color="#2f44fd"
        seriesDataA={seriesDataA}
        seriesDataB={seriesDataB}
      >
        Contact
      </WavyLink>
    </nav>
  );
};

