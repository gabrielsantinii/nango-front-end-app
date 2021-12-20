export const signupFormErrors = {
    name: { required: "O nome da instituição é obrigatório.", invalid: "Insira um nome válido." },
    categories: { required: "Selecione pelo menos uma categoria." },
    contactPerson: {
        email: { required: "O email é obrigatório.", invalid: "Insira um e-mail válido." },
        phone: { required: "O telefone é obrigatório.", invalid: "Insira um telefone válido." },
        firstName: { required: "O nome é obrigatório.", invalid: "Insira um nome válido." },
        lastName: { required: "O sobrenome é obrigatório.", invalid: "Insira um sobrenome válido." },
        pass: { required: "A senha é obrigatória.", min: "Sua senha deve ter no mínimo 6 caracteres." },
    },
    address: {
        state: { required: "O estado da instituição é obrigatório.", invalid: "Insira um estado válido." },
        city: { required: "A cidade da instituição é obrigatório.", invalid: "Insira uma cidade válido." },
    },
    rangeOfEmployees: { required: "Esta informação é obrigatória." },
    rangeOfStudents: { required: "Esta informação é obrigatória." },
};
