
import { delay } from "../../../shared/helpers";
import { ReadUserDto } from "../../dtos";

class UserContextService {
    
    public async getUserByAuthId(authId: string): Promise<ReadUserDto> {
        await delay(2000);
        const userData = {} as ReadUserDto
        return userData;
    }
}
export default new UserContextService();
