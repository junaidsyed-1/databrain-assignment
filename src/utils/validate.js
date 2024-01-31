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

export const checkValidAddress = (street, city, zipCode, country) => {
    if (!street.trim()) {
        return "Please enter your street address";
    }
    if (!city.trim()) {
        return "Please enter your city";
    }
    if (!zipCode.trim()) {
        return "Please enter your zip code";
    }
    if (!country.trim()) {
        return "Please enter your Country";
    }
    return null;
};

// utils/validate.js

export const checkValidPayment = (cardNumber, expiryDate, cvv) => {
    if (!cardNumber.trim()) {
        return "Please enter your card number";
    }

    if (!expiryDate.trim()) {
        return "Please enter the expiry date";
    }

    if (!cvv.trim()) {
        return "Please enter the CVV";
    }
    return null;
};
