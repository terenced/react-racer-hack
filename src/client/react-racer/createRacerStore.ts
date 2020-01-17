import * as Racer from "racer";

export default function createRacerStore(bundleId: string) {
  const racerDataBundle = document.querySelector(bundleId);
  const $model = new Racer.Model();
  $model.unbundle(JSON.parse(racerDataBundle.innerHTML));

  return { $model };
}
