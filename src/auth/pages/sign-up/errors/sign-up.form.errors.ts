export const signupFormErrors = {
    name: { required: "O nome da instituição é obrigatório." },
    categories: { required: "Selecione pelo menos uma categoria." },
    contactPerson: {
        email: { required: "O email do administrador é obrigatório.", invalid: "Insira um e-mail válido." },
        phone: { required: "O phone do administrador é obrigatório." },
        name: { required: "O nome do administrador é obrigatório." },
    },

    address: {
        state: { required: "O estado da instituição é obrigatório." },
        city: { required: "A cidade da instituição é obrigatório." }
    },
    rangeOfEmployees: { required: "Esta informação é obrigatória." },
    rangeOfStudents: { required: "Esta informação é obrigatória." },
};
