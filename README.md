# react-wavy-transitions

Show wavy transitions between route changes, in your next React app.

Click [here for a demo](https://www.instagram.com/reel/CR11vT8onxV/) from my [Instagram page](https://instagram.com/frontendjoe)!

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

| Prop      | Description                                                                                                             | Example         | type               | required |
| --------- | ----------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------ | -------- |
| children  | The content inside the link                                                                                             | About           | String / Component | true     |
| className | Apply a custom css class to the component. Also, useful if you're styling with styled-components (e.g. styled(WavyLink) | my-custom-class | String             | false    |
| disabled  | Handle the link's disabled conditional state via this prop                                                              | true            | Boolean            | false    |
| to        | The route that the link will take you to, always prefixed with a /                                                      | /about          | String             | true     |
| waveColor | The background color of the wave shapes. Must be a hexcode or rgba value                                                | #8e44fd         | String             | false    |

##### Example App.js

Copy this whole file in to see a basic example:

```sh
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import { WavyContainer, WavyLink } from "react-wavy-transitions";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contact = () => <div>Contact</div>;

const App = () => {
  return (
    <>
      <WavyContainer />
      <Router>
        <nav>
          <WavyLink to="/home" waveColor="#8f44fd">
            Home
          </WavyLink>
          <WavyLink to="/about" waveColor="#089a9a">
            About
          </WavyLink>
          <WavyLink to="/contact" waveColor="#f14964">
            Contact
          </WavyLink>
        </nav>
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/home" exact component={Home} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
```

### 4. Have fun with it!

Please hit me up on [My Instagram page](https://instagram.com/frontendjoe) for any support or suggestions 🙂
