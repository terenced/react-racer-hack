import { isEqual } from "lodash";
import { useEffect, useMemo, useReducer, useRef, useCallback } from "react";
import { useModel } from "./useModel";

const REF_PREFIX = "_reactRacer.hooks.queries";

const getRefPath = (id: string, collectionName: string, queryHash: string) =>
  `${REF_PREFIX}.${id}.${collectionName}`;

export default function useQuery(collectionName: string, query: object = {}) {
  const [, forceRender] = useReducer(s => s + 1, 0);

  const $model = useModel();
  const hookId = useMemo(() => $model.id(), [collectionName, query]);
  const $query = useMemo(() => $model.query(collectionName, query), [
    collectionName,
    query
  ]);

  const refPath = useMemo(
    () => getRefPath(hookId, collectionName, $query.hash),
    [hookId, collectionName, $query.hash]
  );

  useEffect(() => {
    $model.subscribe($query);
  }, [$query]);

  let itemsRef = useRef();
  let scopedRef = useRef();

  const onChange = useCallback(() => {
      // @ts-ignore
      itemsRef.current = scopedRef.current.get();
      console.debug("onChange -> force render");
      forceRender();
    },
    [scopedRef.current]
  );

  useEffect(() => {
    if (!scopedRef.current) {
      console.debug("Creating ref", refPath);
      scopedRef.current = $query.ref(refPath);
    }

    console.debug("Setting up listener");
    // @ts-ignore
    scopedRef.current.on("all", onChange);

    return () => {
      console.debug("Removing listener", hookId, refPath);
      $model.removeRef(refPath);
    };
  }, []);

  return [itemsRef.current || [], $query];
}
