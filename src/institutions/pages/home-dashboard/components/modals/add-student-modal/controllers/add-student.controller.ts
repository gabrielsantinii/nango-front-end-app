import { delay } from "../../../../../../../shared/helpers";
import { notificationsService } from "../../../../../../../shared/services/notifications";
import { addStudentServiceErrors } from "../errors";
import { AddStudent, AddStudentFormValues } from "../interfaces";

class AddStudentService {
    async add(data: AddStudent) {
        await  delay(2000);
        return { ...data, id: "ID_FALSE" };
    }
}

const addStudentService = new AddStudentService();

export class AddStudentController {
    public add = async (data: AddStudentFormValues, closeModal: VoidFunction): Promise<void> => {
        const formattedData: AddStudent = { ...data };
        const addStudentPromise = addStudentService.add(formattedData);
        notificationsService.promise(addStudentPromise, {
            error: addStudentServiceErrors.unexpected,
            loading: "Adicionando aluno...",
            success: "Aluno adicionado com sucesso!",
        });
        closeModal();
    };
}
