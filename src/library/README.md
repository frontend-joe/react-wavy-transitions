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

| Prop      | Description                                                              | Example | type               | required | default |
| --------- | ------------------------------------------------------------------------ | ------- | ------------------ | -------- | ------- |
| children  | The content inside the link                                              | About   | String / Component | true     |         |
| to        | The route that the link will take you to                                 | /about  | String             | true     |         |
| color     | The background color of the wave shapes. Must be a hexcode or rgba value | #8f44fd | String             | false    | #8f44fd |
| direction | The direction that the wave shapes will move (options are up/down)       | up      | String             | false    | down    |
| duration  | The duration in milliseconds of the total wave transition                | 1200    | Number             | false    | 1500    |

Be careful with the duration (too fast/slow can ruin the effect) - my recommended duration is between 1000ms and 1600ms.

##### Example App.tsx

Copy this whole code snippet into your App.tsx for a basic example:

```typescript
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { WavyContainer, WavyLink } from "react-wavy-transitions";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contact = () => <div>Contact</div>;

function App() {
  return (
    <BrowserRouter>
      <WavyContainer />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <WavyLink to="/" color="#ff44fd">
                Home
              </WavyLink>
              <WavyLink direction="up" to="/about" color="#8f44fd">
                About
              </WavyLink>
              <WavyLink duration={1000} to="/contact" color="#2f44fd">
                Contact
              </WavyLink>
              <Outlet />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<>No Match</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

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
