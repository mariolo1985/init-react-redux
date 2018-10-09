# init-react-redux

:v:

This is where I start my personal Reactjs and Redux projects. 

Feel free to use it.

You can see this working [here](https://mariolo1985.github.io/initreactredux/).

## Pre-req

- Node 8+
- Yarn

## Installation 

1. **Fork** this repo and __clone__ it

2. Run the following commands

> `yarn && yarn build:dev`: to install packages and run dev build with a watch

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

I separate it as this allows my Redux helpers (selectors, actions and reducers) within my component by only having to re-render that component when that component store updates. This also nest the files in the component directory to make it easier to find.

### Actions

Actions are functions that passes values to our reducer.

> EG: `setMenuIsLoaded()` at **src/components/Menu/actions.js** is dispatching type __MENU_IS_LOADED__ to our `MenuReducer` in **src/components/Menu/reducer.js**

### Selectors

Selectors get info from our store but also tells our component when to re-render. We connect our `Menu` component by calling a `connect()` in our module export.

```javascript
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
```

## Contributing

Feel free to open up a dialog if this helps you and want to make it better for others :open_hands:

## Future Features

## Feature Request

Please message hello@websitesbymario.com for feature requests.

## Bug Report

Please message hello@websitesbymario.com to report bugs.
