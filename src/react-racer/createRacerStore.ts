import * as Racer from "racer";

export default function createRacerStore(bundle: string) {
  const $model = new Racer.Model();
  $model.unbundle(JSON.parse(bundle));

  return { $model };
}
