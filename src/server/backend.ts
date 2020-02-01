import * as racer from "racer";
import * as shareDbMongo from "sharedb-mongo";
import * as shareDbRedisPubSub from "sharedb-redis-pubsub"

export function createBackend() {
  const pubsub = shareDbRedisPubSub();
  const backend = racer.createBackend({
    db: shareDbMongo("mongodb://localhost:27017/react-racer-hack"),
    pubsub: pubsub,
  });
  return backend;
}

export function connect() {
  const backend = createBackend();  
  return backend.createModel({ fetchOnly: true });
}
