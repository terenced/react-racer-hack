import * as racer from "racer";
import * as shareDbMongo from "sharedb-mongo";
 
export default function connect() {
  // @ts-ignore
  const backend = racer.createBackend({
    db: shareDbMongo("mongodb://localhost:27017/react-racer-hack")
  });
  
  return backend.createModel({ fetchOnly: true });
}
