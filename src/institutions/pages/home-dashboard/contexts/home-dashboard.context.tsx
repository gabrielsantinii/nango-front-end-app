import { createContext, ReactNode } from "react";
import { HomeData } from "../interfaces";

export const HomeDashboardContext = createContext({} as HomeData);

export function HomeDashboardContextProvider({ children }: { children: ReactNode }): JSX.Element {
    return (
        <HomeDashboardContext.Provider
            value={{
                classes: [],
                employees: [],
                messages: [],
                students: [],
                progress: { activities: { finishedCount: 0, totalCount: 0 }, period: { remainingDays: 0 } },
            }}
        >
            {children}
        </HomeDashboardContext.Provider>
    );
}
