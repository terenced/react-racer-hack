import * as racer from "racer";
import * as Socket from "racer-highway/lib/browser/socket";

const DEFAULT_CLIENT_OPTIONS = {
  base: "/channel",
  reconnect: true,
  browserChannelOnly: false,
  srvProtocol: undefined,
  srvHost: undefined,
  srvPort: undefined,
  srvSecurePort: undefined,
  timeout: 10000,
  timeoutIncrement: 10000
};

// Since racer-highway is not bundled into the bundle from the server, we have to inject it here.
// Stole the idea from here
// https://github.com/dmapper/startupjs/blob/master/packages/model/src/getModel.js#L17
racer.Model.prototype._createSocket = function() {
  let clientOptions =
    // @ts-ignore
    (typeof window !== "undefined" && window.__racerHighwayClientOptions) ||
    DEFAULT_CLIENT_OPTIONS;
  return new Socket(clientOptions);
};

function createModel(bundle) {
  const data = JSON.parse(bundle);
  if (racer.util.isServer) {
    const model = new racer.Model();
    model.unbundle(data);
    return model;
  }
  return racer.createModel(data);
}

export default function createRacerStore(bundle: string) {
  const $model = createModel(bundle);
  $model.root.unloadDelay = 3000;
  return { $model };
}
