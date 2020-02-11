# React Racer Hack

Proof-of-Concept/Hack to get Racer working with React.

## Goals

Build an API similar to React-Redux hooks to connect to Racer.

## Design

### Client

All the React UI components. Uses `react-racer` to interact with the backend

### Server

Express backend with simple React Server-Side Rendering. 
Uses [racer-highway](https://github.com/derbyparty/racer-highway) middleware. 
Also bundles racer into a script tag (`racer-data-bundle`).

NOTE: Server-Side Rendering is broken. I am having an issue loading the racer model onto the page when rendering on the server. 

NOTE: We are just using browser channel and not web sockets because I am too lazy to set them up.

NOTE: We need to monkey-patch racer's `_createSocket` in `src/react-racer/createRacerStore.ts` because the `racer-highway` code seems to be tree-shaken out. Need to verify.

### React-Racer

This is the meat & potatoes of it. If it actually ends up working, this should moving to it's out repo/package

#### How it Works

The racer model in `racer-data-bundle` gets unbundled and stored into a `React.Context`. The hooks interact with the context to get access to the racer model.

#### Hooks

I opted for implementing hooks since function-based components and hooks are becoming the standard.

I tired to keep my hooks rather simple. I wanted to leverage Racer and it's subscription model as much as possible. The hooks subscribe to a query/path, create a reference, and trigger a re-render to any changes to the reference. `useRef` was used to keep track of values in-between re-renders. See  [Understanding `useRef`](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)

The implementation was inspired by [React-Redux Hooks](https://react-redux.js.org/api/hooks).

##### Implemented

`useModel` - Gets the racer model in the context.

`useQuery` - Used to query the racer model. Under the hood, it subscribes to the query, creates a reference `_reactRacer.hooks.queries.HOOK_ID.COLLECTION_NAME`, and triggers a re-render when the reference is updated.

`useScope` - Used to get a scoped model. Under the hood, it sets up the `on` and `off`, and triggers a re-render when the scoped model is updated.

##### TO-DO

Not sure about the naming/uses.

`useGetOnce` or `getDocOnce` - Same as `useGet`/`useDoc`, but doesn't subscribe

## Thoughts

I wonder if we can send the racer model bundle via an endpoint? So `/racer` returns the racer json bundle and the code just un-bundles it.

## Prior Art

Other libraries that I ~~stole from~~ was inspired by.

[Racer-ShareDb](https://github.com/dmapper/startupjs/tree/master/packages)

[Racer-React](https://github.com/droganov/racer-react)
