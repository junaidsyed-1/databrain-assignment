/* eslint-disable no-useless-escape */
export const checkValidData = (email, name) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isName = /^([a-zA-Z ]){2,30}$/.test(name);

    if (email.length === 0) return "Please enter your Email";
    if (name.length === 0) return "Please enter your Name";
    if (!isEmailValid) return "Email is not valid";
    if (!isName) return "Name is not valid";

    return null;
};