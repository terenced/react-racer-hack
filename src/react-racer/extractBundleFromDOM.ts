import { util } from "racer";

export default function extractBundleFromDOM(bundleId: string) {
  if (util.isServer) {
    throw Error("extractBundleFromDOM can only run on browser")
  }
  const racerEl = document.querySelector(bundleId);
  return racerEl.innerHTML;
}
