import firebaseService from "../../../shared/providers/firebase/services/firebase.service";
import { notificationsService } from "../../../shared/services/notifications";
import { StateModifier } from "../../../shared/types";
import { ReadAuthDto, ReadUserDto } from "../../dtos";
import { getUserErrors, signOutErrors } from "../errors";
import { userContextService } from "../services";

class AuthContextController {
    public async getUserByAuthId(authId: string, setUser: StateModifier<ReadUserDto>) {
        try {
            const user = await userContextService.getUserByAuthId(authId);
            setUser(user);
        } catch (err) {
            notificationsService.error(getUserErrors.notFound);
        }
    }

    public identifyUserAuth(setAuth: StateModifier<ReadAuthDto>) {
        
        firebaseService.getAuth().onAuthStateChanged((user) => {
            if (user) {
                setAuth({ email: user.email as string, uid: user.uid });
            }
        });
    }

    public async signOut(setAuth: StateModifier<ReadAuthDto>, setUser: StateModifier<ReadUserDto>) {
        try {
            await firebaseService.getAuth().signOut();
            setAuth(null);
            setUser(null);
        } catch (err) {
            notificationsService.error(signOutErrors.unexpected);
        }
    }
}

export const authContextController = new AuthContextController();
