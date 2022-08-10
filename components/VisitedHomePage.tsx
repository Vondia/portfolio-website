import React, {
  useState,
  useRef,
  useLayoutEffect,
  createContext,
  useContext,
} from "react";

const VisitedHomePage = createContext(false);

export function useVisitedHomePage() {
  return useContext(VisitedHomePage);
}

interface Props {
  children: React.ReactNode;
}

export function VisitedHomePageProvider({ children }: Props) {
  const [visitedHomePage, setVisitedHomePage] = useState(false);
  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setVisitedHomePage(true);
  });
  return (
    <VisitedHomePage.Provider value={visitedHomePage}>
      {children}
    </VisitedHomePage.Provider>
  );
}
