import { delay } from "../../../../../../../shared/helpers";
import { notificationsService } from "../../../../../../../shared/services/notifications";
import { addEmployeeServiceErrors } from "../errors";
import { AddEmployee, AddEmployeeFormValues } from "../interfaces";

class AddEmployeeService {
    async add(data: AddEmployee) {
        await  delay(2000);
        return { ...data, id: "ID_FALSE" };
    }
}

const addEmployeeService = new AddEmployeeService();

export class AddEmployeeController {
    public add = async (data: AddEmployeeFormValues, closeModal: VoidFunction): Promise<void> => {
        console.log("Received data onsubmit: ", data);
        const formattedData: AddEmployee = { ...data, profileType: data.profileType.value };
        const addEmployeePromise = addEmployeeService.add(formattedData);
        notificationsService.promise(addEmployeePromise, {
            error: addEmployeeServiceErrors.unexpected,
            loading: "Adicionado colaborador...",
            success: "Colaborador adicionado com sucesso!",
        });
        closeModal();
    };
}
