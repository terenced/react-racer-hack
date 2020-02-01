import * as express from "express";
import * as highway from "racer-highway";
import * as racer from "racer";

import render from "./render";
import { createBackend } from "./backend";

racer.use(require("racer-bundle"));

const backend = createBackend();

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
