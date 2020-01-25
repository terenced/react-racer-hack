import * as racer from "racer";
import * as shareDbMongo from "sharedb-mongo";
import * as faker from "faker";

// @ts-ignore
const backend = racer.createBackend({
  db: shareDbMongo("mongodb://localhost:27017/react-racer-hack")
});

const $model = backend.createModel({ fetchOnly: true });

// console.log("dog", dog);
const dog = { name: faker.name.firstName(), breed: "Pitbull" };
$model.add("dogs", dog);

function fetch($model) {
  return new Promise((resolve, reject) => {
    $model.fetch(err => {
      if (err) {
        reject(err);
      }
      resolve($model);
    });
  });
}

function work($model) {
  const dog = { name: faker.name.firstName(), breed: "pitbull" };
  
  const dogsQuery = $model.query("dogs", {});

  $model.fetch(dogsQuery, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const dogs = dogsQuery.get();
    if (dogs) {
      for (const dog of dogs) {
        console.log(dog.name);
      }
    }
    console.log("dog", dog);
    $model.add("dogs", dog, (id) => {
      console.log("Added", id);
      process.exit(0);
    });
  })
  // // @ts-ignore
  // const dogs = await $dogs.get();
  // if (dogs) {
  //   for (const dog of dogs) {
  //     console.log(dog.name);
  //   }
  // }

  
}

work($model);
  // .then(() => process.exit(0))
  // .catch(error => console.log(error));

// (async function() {
//   await work($model)
//     .then(() => process.exit(0))
//     .catch(error => console.log(error));
// })();
