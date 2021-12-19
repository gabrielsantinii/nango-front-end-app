export const signupFormErrors = {
    name: { required: "O nome da instituição é obrigatório." },
    categories: { required: "Selecione pelo menos uma categoria." },
    contactPerson: {
        email: { required: "O email é obrigatório.", invalid: "Insira um e-mail válido." },
        phone: { required: "O phone é obrigatório." },
        firstName: { required: "O nome é obrigatório." },
        lastName: { required: "O sobrenome é obrigatório." },
        pass: { required: "A senha é obrigatória.", min: "Sua senha deve ter no mínimo 5 caracteres." },
    },
    address: {
        state: { required: "O estado da instituição é obrigatório." },
        city: { required: "A cidade da instituição é obrigatório." },
    },
    rangeOfEmployees: { required: "Esta informação é obrigatória." },
    rangeOfStudents: { required: "Esta informação é obrigatória." },
};
