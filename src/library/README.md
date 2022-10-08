# react-wavy-transitions

Show wavy transitions between route changes, in your React 18 apps.

Click [here for a demo](https://waves.frontendjoe.com/).

## Installation

Just a few quick steps to get started:

#### 1. Create a React app

```sh
npx create-react-app my-wavy-app
```

#### 2. Install dependencies

Our project depends upon React's router library

```sh
npm i react-wavy-transitions react-router-dom
```

#### 3. Modify App.js

The package relies on two components being present.

##### WavyContainer

This is what houses our wave transition between route changes and does not require any props.

##### WavyLink

This button can be declared anywhere inside your Router component.
It takes the following props:

| Prop     | Description                                                              | Example | type               | required |
| -------- | ------------------------------------------------------------------------ | ------- | ------------------ | -------- |
| children | The content inside the link                                              | About   | String / Component | true     |
| to       | The route that the link will take you to                                 | /about  | String             | true     |
| color    | The background color of the wave shapes. Must be a hexcode or rgba value | #8e44fd | String             | false    |

##### Example App.js

Copy this whole file in to see a basic example:

```sh
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
              <WavyLink to="/" color="#ff44fd">Home</WavyLink>
              <WavyLink to="/about" color="#8f44fd">About</WavyLink>
              <WavyLink to="/contact" color="#2f44fd">Contact</WavyLink>
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

### 4. Have fun with it!

Please hit me up on [My Instagram page](https://instagram.com/frontendjoe) for any support or suggestions 🙂
