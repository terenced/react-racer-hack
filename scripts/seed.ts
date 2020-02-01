import { connect } from "../src/server/backend";
import { create, CreateType } from "../src/random/generate";

async function seed($model, type: CreateType, cb: (err: any) => void) {
  console.log("seeding", type);
  const doc = `${type}s`;
  const query = $model.query(doc, {});
  const animal = await create(type);

  $model.fetch(query, err => {
    if (err) {
      cb(err);
    }

    $model.add(doc, animal, id => {
      console.log("Added", animal);
      cb(null);
    });
  });
}

const $model = connect();
// @ts-ignore
$model.connection?.debug = true;

(async () =>
  seed($model, "dog", err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    seed($model, "cat", err => {
      process.exit(0);
    });
  }))();
