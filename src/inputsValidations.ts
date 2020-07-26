import validator from 'validator';

export const nameValidation = (value : string) => {
    if (!value) return 'Field is required';
    else if (!/^[A-Za-z\s]{2,}$/.test(value)) return 'Only letters and optionally spaces';
    else if (value.trim().length === 0) return 'Only spaces? No no...';
    else if (value.trim().length > 20) return 'Max 20 characters including spaces';
}

export const emailValidation = (value : string) => {
    if (!value) return 'Field is required';
    else if (!validator.isEmail(value)) return 'Invalid email';
}

export const messageValidation = (value : string) => {
    if (!value) return 'Field is required';
    else if (value.trim().length < 10) return 'At least 10 characters';
}

export const nicknameValidation = (value : string) => {
    if (!value) return 'Field is required';
    else if (!/^[A-Za-z0-9]+$/.test(value)) return 'Only letters and digits';
    else if (value.trim().length > 15 || value.trim().length < 3) return 'From 3 up to 15 characters';
}

export const passwordValidation = (value : string) => {
    if (!value) return 'Field is required';
    else if (!/^[A-Za-z0-9!@#$_-]+$/.test(value)) return 'Only letters, digits and ! @ # $ _ -';
    else if (value.trim().length > 30 || value.trim().length < 8) return 'From 8 up to 30 characters';
}

export const rpasswordValidation = (values : any) => {
    const errors : { rpassword ?: string } = {};
    if (!values.rpassword) errors.rpassword = 'Field is required';
    if (values.password !== values.rpassword) errors.rpassword = 'Passwords must match';
    return errors;
}