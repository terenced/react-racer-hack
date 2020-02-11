import { useEffect, useReducer, useRef, useCallback } from "react";
import { useModel } from "./useModel";

const REF_PREFIX = "_reactRacer.scoped";

const getRefPath = (id: string, path) => `${REF_PREFIX}.${id}.${path}`;

interface RacerScopedModel<T> {
  get: () => T;
  set: (T?) => void;
}

export default function useScope<T>(path: string): [T, RacerScopedModel<T>] {
  const $model = useModel();

  if (!$model.isPath(path)) {
    throw new Error(`'${path} is not a valid path'`);
  }
  const [, forceRender] = useReducer(s => s + 1, 0);

  let resultRef = useRef<T>();
  let scopedRef = useRef<RacerScopedModel<T>>();

  const onChange = useCallback(() => {
    // @ts-ignore
    resultRef.current = scopedRef.current.get();
    console.debug("useScope: onChange", resultRef.current);
    forceRender();
  }, [scopedRef.current]);

  if (!scopedRef.current) {
    console.debug("useScope: Creating scope", path);
    scopedRef.current = $model.scope(path);
    resultRef.current =  scopedRef.current.get();
  }
  useEffect(() => {
    console.debug("useScope: Adding listener to scope");
    // @ts-ignore
    scopedRef.current.on("all", "**", [], onChange);

    return () => {
      console.debug("useScope: Removing listener", path, onChange);
      // @ts-ignore
      scopedRef.current.off("all", onChange);
    };
  }, [path]);

  console.debug("useScope: returning", resultRef.current, scopedRef.current);
  return [resultRef.current, scopedRef.current];
}
