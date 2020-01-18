import * as express from "express";
import * as racer from "racer";
import * as shareDbMongo from "sharedb-mongo";
import * as highway from "racer-highway";
import render from "./render";

racer.use(require("racer-bundle"));
const backend = racer.createBackend({
  db: shareDbMongo("mongodb://localhost:27017/react-racer-hack")
});

const handlers = highway(backend);

const app = express();
app.use("/dist", express.static("dist"));
app.use("/img", express.static("img"));
app.use(handlers.middleware);
app.use(backend.modelMiddleware());
 
app.get("*", async (req, res) => {
  // @ts-ignore
  const model = req?.model!;
  model.bundle((err, bundle) => {
    if (err) {
      res.send(err);
      return;
    }

    const content = render(JSON.stringify(bundle));
    res.send(content);
  });
});

app.listen(5000);
