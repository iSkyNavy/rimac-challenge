import { UserContext } from "@contexts/UserContext";
import { useContext } from "react";

export const useUserProviderHook = () => useContext(UserContext);
