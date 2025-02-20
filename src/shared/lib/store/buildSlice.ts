import {
  bindActionCreators,
  createSlice,
  CreateSliceOptions,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { useMemo } from "react";

import { useAppDispatch } from "../hooks/useAppDispatch/useAppDispatch";

export function buildSlice<
  State,
  CaseReducer extends SliceCaseReducers<State>,
  Name extends string = string
>(options: CreateSliceOptions<State, CaseReducer, Name>) {
  const slice = createSlice(options);

  const useActions = (): typeof slice.actions => {
    const dispatch = useAppDispatch();

    return useMemo(
      () => bindActionCreators(slice.actions, dispatch),
      [dispatch]
    );
  };

  return {
    ...slice,
    useActions,
  };
}
