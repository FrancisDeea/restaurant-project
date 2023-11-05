'use client'

import { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(prevState => !prevState)
  }

  return (
    <SidebarContext.Provider value={{ active, toggleActive }} >
      {children}
    </SidebarContext.Provider>
  )
};
