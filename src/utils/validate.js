export const validateData = (email, password, fullname) => {

    // const trimmedEmail = email.trim();

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
    const isNameValid = /^[A-Za-z\s'-]{2,50}$/.test(fullname)

 if(!isEmailValid)return "Email id is not valid "
 if(!isPasswordValid) return "please enter strong password"
 if(!isNameValid) return "enter valid name"

 return null;
} 