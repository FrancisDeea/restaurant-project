import { useEffect, Dispatch } from "react";
import { Order, getSessionStorage } from "@/lib/util";

export const useSessionStorage = (
  dispatch: Dispatch<{ type: "SET_SESSION"; payload: Order }>
) => {
  useEffect(() => {
    const session = getSessionStorage();
    if (session) {
      dispatch({ type: "SET_SESSION", payload: session });
    }
  }, [dispatch]);
};
