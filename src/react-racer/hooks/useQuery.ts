import { isEqual } from "lodash";
import { useRef, useState, useEffect, useReducer } from "react";
import { useModel } from "./useModel";

export default function useQuery(collectionName: string, query: object = {}) {
  const $model = useModel();
  const $query = $model.query(collectionName, query);
  const [, forceRender] = useReducer(s => s + 1, 0);

  const latestQuery = useRef();
  const latestItems = useRef([]);

  function checkForUpdates(err: any = null) {
    if (err) {
      console.log(err);
    }
    try {
      // @ts-ignore
      const newItems = latestQuery.current.get();
      console.log("Checking", newItems, isEqual(newItems, latestItems.current));

      if (isEqual(newItems, latestItems.current)) {
        return;
      }

      latestItems.current = newItems;
    } catch (error) {
      console.error(error);
    }

    forceRender();
  }

  function subscribe() {
    if ($query === latestQuery.current) {
      return;
    }
    console.log("subscribe", $query);
    $model.subscribe([$query], checkForUpdates);
    // items = $query.get(); 
  }

  useEffect(() => {
    subscribe();
  }, []);

  useEffect(() => {
    latestQuery.current = $query;
    latestItems.current = $query.get();
  });

  useEffect(() => {
    checkForUpdates();
    // @ts-ignore
    return () => latestQuery.current.unsubscribe();
  }, [$model.data]);

  return [latestItems.current, $query];
}
