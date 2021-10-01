import { createAction } from "@reduxjs/toolkit";

export const counterUpdated = createAction<number>("counterUpdated");
