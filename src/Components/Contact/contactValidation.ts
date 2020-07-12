import validator from 'validator';

export const onSubmit = (values : any) => {
    console.log(values);
}

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