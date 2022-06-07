const validate = (state, name) => {
    let error = '';

    if(!state.length){
        if(name === "email") error = "Enter your E-mail";

        if(name === "password") error = "Enter your password";
    
        if(name === "name") error = "Enter your name";
    
        if(name === "lastname") error = "Enter your lastname";
    
        if(name === "birthday") error = "Enter your birthday";
    
        if(name === "country") error = "Enter your country";
    }

    return error;
}

export default validate