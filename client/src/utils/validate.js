const validate = (state) => {
    let errors = {};

    if(!state.email) errors.email = "Enter your E-mail";

    if(!state.password) errors.password = "Enter your password";

    if(!state.name) errors.name = "Enter your name";

    if(!state.lastname) errors.lastname = "Enter your lastname";

    if(!state.birthday) errors.birthday = "Enter your birthday";

    if(!state.country) errors.country = "Enter your country";

    return errors;
}

export default validate