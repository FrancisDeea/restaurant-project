'use client'

import { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    if (active) {
      setActive(false)
      document.body.style.overflow = "auto"
    } else {
      setActive(true)
      document.body.style.overflow = "hidden"
    }
    // setActive(prevState => !prevState)
  }

  return (
    <SidebarContext.Provider value={{ active, toggleActive }} >
      {children}
    </SidebarContext.Provider>
  )
};
