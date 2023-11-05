import { useContext } from "react";
import { SidebarContext } from "../state/sidebarContext";

export const useSidebar = () => {
  const { active, toggleActive } = useContext(SidebarContext);

  return {
    active,
    toggleActive,
  };
};
