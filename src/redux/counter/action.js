import { createAction } from "@reduxjs/toolkit";

// export const reset = { type: "reset" };
// export const increment = { type: "increment" };
// export const decrement = { type: "decrement" };

// export const changeStep = (newStep) => {
//   return {
//     type: "changeStep",
//     payload: newStep,
//   };
// };

export const reset = createAction("reset");
export const increment = createAction("increment");
export const decrement = createAction("decrement");
export const changeStep = createAction("changeStep");
