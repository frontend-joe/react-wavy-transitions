# react-wavy-transitions

Show wavy transitions between route changes, in your React 18 apps.

Click [here for a demo](https://waves.frontendjoe.com/).

Or [check out the npm package here](https://www.npmjs.com/package/react-wavy-transitions).

## Installation

Just a few quick steps to get started:

#### 1. Create a React app (optional)

If you are adding the transitions to an existing app, you can skip this step.

```sh
npx create-react-app my-wavy-app
```

#### 2. Install dependencies

Our project depends upon React's router library

```sh
npm i react-wavy-transitions react-router-dom
```

#### 3. Add components

The package relies on two components being present.

##### WavyContainer

This is what houses our wave transition between route changes and does not require any props.

##### WavyLink

This button can be declared anywhere inside your Router component.

It takes the following props:

| Prop        | Description                                                              | Example | Type               | Required | Default   |
| ----------- | ------------------------------------------------------------------------ | ------- | ------------------ | -------- | --------- |
| children    | The content inside the link                                              | About   | String / Component | true     | -         |
| to          | The route that the link will take you to                                 | /about  | String             | true     | -         |
| color       | The background color of the wave shapes. Must be a hexcode or rgba value | #8f44fd | String             | false    | #8f44fd   |
| direction   | The direction that the wave shapes will move (options are up/down)       | up      | String             | false    | down      |
| duration    | The duration in milliseconds of the total wave transition                | 1200    | Number             | false    | 1500      |
| seriesDataA | The data series for the first set of waves                               | [1, 2, 3] | Array            | false    | [1, 2, 3] |
| seriesDataB | The data series for the second set of waves                              | [4, 5, 6] | Array            | false    | [4, 5, 6] |


Be careful with the duration (too fast/slow can ruin the effect) - my recommended duration is between 1000ms and 1600ms.

To visualize a new wave, think about the series data as points on a graph. If you pick [1, 1, 1, 1, 1, 1], all of the wave will be flat.
By picking larger variant numbers there will be big differences in the shape. 
The more numbers you add to the array the more detail is added to the waves.

##### Example App.tsx

Copy this whole code snippet into your App.tsx for a basic example:

This implementation will create waves 

```typescript

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { WavyContainer, WavyLink } from "react-wavy-transitions";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contact = () => <div>Contact</div>;

function App() {
  const seriesDataA = [1, 2, 1, 3, 4];
  const seriesDataB = [2, 1, 2, 4, 1];
  return (
    <BrowserRouter>
      <WavyContainer />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <WavyLink
                to="/"
                color="#ff44fd"
              >
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
              <Outlet />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<div>No Match</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


export default App;
```

### 4. Styling

To style the WavyLink component you can target it via css (just be more specific than me 😄):

```css
body .react-wavy-transitions__wavy-link {
  color: #af44fd;
  ...;
}
```

### 5. DRY (Don't Repeat Yourself)

To avoid repeating certain WavyLink props, I recommend creating your own generic link component that sets the props here by default.

```typescript
import { FC, ReactNode } from "react";
import { WavyLink } from "react-wavy-transitions";

type Props = {
  to: string;
  children: ReactNode;
};

export const MyWavyLink: FC<Props> = ({ to, children }) => (
  <WavyLink duration={1000} direction="up" color="#af44fd" to={to}>
    {children}
  </WavyLink>
);
```

### 6. Have fun with it!

Please hit me up on [My Instagram page](https://instagram.com/frontendjoe) for any support or suggestions 🙂
