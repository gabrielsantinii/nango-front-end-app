import { Auth, signInWithEmailAndPassword } from "@firebase/auth";

export class LoginService {
    constructor(private readonly auth: Auth) {}

    public async login(email: string, password: string): Promise<void> {
        await signInWithEmailAndPassword(this.auth, email, password);
    }
}
