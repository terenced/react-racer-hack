import * as express from "express";
import * as racerBrowserChannel from "racer-browserchannel";
import render from "./render";
import * as shareDbMongo from "sharedb-mongo";

const racer = require("racer");
console.log("racer", racer);

racer.use(require("racer-bundle"));
const backend = racer.createBackend({
  db: shareDbMongo("mongodb://localhost:27017/racer-todos")
});

const app = express();
app.use(racerBrowserChannel(backend));
app.use(backend.modelMiddleware());
app.use("/dist", express.static("dist"));
app.use("/img", express.static("img"));

app.get("*", async (_req, res) => {
  const model = backend.createModel({fetchOnly: true});
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
