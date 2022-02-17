import { INCREMENT, DECREMENT, RESET } from "../actionTypes.js";

export const incrementAC = () => ({ type: INCREMENT });

export const decrementAC = () => ({ type: DECREMENT });

export const resetAC = () => ({ type: RESET });
