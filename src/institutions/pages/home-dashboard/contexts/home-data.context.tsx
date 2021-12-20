import { createContext, ReactNode, useEffect, useState } from "react";
import { useAuthContext } from "../../../../auth/hooks/contexts";
import { api } from "../../../../shared/providers/api/services";
import { notificationsService } from "../../../../shared/services/notifications";
import { HomeData } from "../interfaces";

export const HomeDashboardContext = createContext({} as HomeData);

export function HomeDashboardContextProvider({ children }: { children: ReactNode }): JSX.Element {
    const [homeData, setHomeData] = useState({} as HomeData);
    const { auth } = useAuthContext();

    useEffect(() => {
        if (!auth) return;
        const getAsynHomeData = async () => {
            try {
                const { data } = await api.get<{ data: HomeData }>(`/institutions/${auth.uid}/dashboard`);
                if (data) {
                    setHomeData(data.data);
                }
            } catch (err) {
                notificationsService.error("Erro ao buscar dados da instituição. Entre em contato com o suporte.");
                console.log(err);
            }
        };
        getAsynHomeData();
    }, [auth]);
    return <HomeDashboardContext.Provider value={homeData}>{children}</HomeDashboardContext.Provider>;
}
