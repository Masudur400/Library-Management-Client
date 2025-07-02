// import { useSelector } from "react-redux";
// import type { RootState } from "./store";

// export const useAppSelector = useSelector.withTypes<RootState>

import {  useDispatch, useSelector, } from "react-redux";
import type { AppDispatch, RootState } from "./store";
import type { TypedUseSelectorHook } from "react-redux"; 

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
