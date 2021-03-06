# init-react-redux

:v:

This is where I start my ReactJS/Redux/Webpack projects. This includes Webpack dev server.

Feel free to use it.

You can see this working [here](https://mariolo1985.github.io/initreactredux/).

# Table Of Content

- [Pre-req](#pre-req)
- [Installation](#installation)
- [React info](#react)
- [Redux info](#redux)
  - [Redux store](#store)
  - [Redux reducer](#reducers)
    - [Initial state reducer](#initial-state)
    - [Component reducer](#component-state)
  - [Redux action](#actions)
  - [Redux selector](#selectors)
- [Tests](#tests)
- [Contributing](#contributing)
- [Future features](#future-features)
- [Feature request](#feature-request)
- [Bug report](#bug-report)

## Pre-req

- Node 10+
- Yarn

## Installation 

1. **Fork** this repo and _clone_ your fork

2. Run the following commands

- Dev
> `yarn && yarn build:dev`: to install packages and run a dev build with webpack dev server

- Prod
> `yarn && yarn build`: to install packages and run a prod build

3. Check the `dist` directory for your deployable files

## React

This project comes with a stateful React component called `Menu` at **src/components/Menu/Menu.js**.

## Redux

### Store

This project initiates a store at **src/redux/store.js**. This pulls in our initial state and other component states.

### Reducers

This project comes with an initial state reducer and component state reducers. They are combined at **src/redux/reducers/reducersInit.js**.

These will set store values either by a simple action or a complex action. 

#### Initial State

The initial state is set at **src/redux/reducers/reducersInit.js**. Usually, I will perform a check to see if I should render my app or not.

#### Component State

Each component state is combined at **src/redux/reducers/reducerViewstate.js**. This pulls in reducers such as the one for `Menu` at **src/components/Menu/reducer.js**.


EG: This sets the `Menu` store's property __isMenuLoaded__ to **false** initially

```javascript
export const MenuReducer = (state = {}, action) => {
    switch (action.type) {
        // other code
        default:
            return {
                ...state,
                isMenuLoaded: false
            };
    }
};

```

I separate it as this allows my Redux helpers (selectors, actions and reducers) within my component by only having to re-render that component when that component store updates. This also nest the files in the component directory to make it easier to find.

### Actions

Actions are functions that passes values to our reducer.

EG: `setMenuIsLoaded()` at **src/components/Menu/actions.js** is dispatching type __MENU_IS_LOADED__ to our `MenuReducer` in **src/components/Menu/reducer.js**

```javascript
export const setMenuIsLoaded = () => ({
    type: MENU_IS_LOADED
});

```

### Selectors

Selectors get info from our store but also tells our component when to re-render. We connect our `Menu` component by calling a `connect()` in our module export.

```javascript
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
```

### Tests

Jest is used for our React component and Redux lifecycle. `Menu` component is set up with these tests.

> WIP

#### Action tests

> WIP

#### Reducer tests

> WIP

#### Selector tests

> WIP

#### Component tests

> WIP

## Contributing

Feel free to open up a dialog if this helps you and want to make it better for others :open_hands:

## Future Features

## Feature Request

Please message hello@websitesbymario.com for feature requests.

## Bug Report

Please message hello@websitesbymario.com to report bugs.
