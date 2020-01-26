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

NOTE: We are just using browser channel and in web sockets because I am too lazy to set them up.

### React-Racer

This is the meat & potatoes of it. If it actually ends up working, this should moving to it's out repo/package

#### How it Works

The racer model in `racer-data-bundle` gets unbundled and stored into a `React.Context`. The hooks interact with the context to get access to the racer model.

#### Hooks

I am not to sure yet what hooks to create, but this is what I am thinking.

`useModel` - Gets the racer model in the context.

`useGet` - Fetches a model path, subscripts to it, and returns a deep copy and the model. 

`useGetOnce` - Same as `useGet`, but doesn't subscribe

`useQuery` - Like `useGet` but for queries.

`useOp` - I think this is what will be used for updates. Still not too sure.


## Prior Art

Other libraires that I ~~stole from~~ was inspired by.
[Racer-ShareDb](https://github.com/dmapper/startupjs/tree/master/packages)
[Racer-React](https://github.com/droganov/racer-react)
