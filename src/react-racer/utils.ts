export function fetch($model) {
  return new Promise((resolve, reject) => {
    $model.fetch(err => {
      if (err) {
        reject(err);
      }
      resolve($model);
    });
  });
}
