export function validateSignUpBody(name, email, password){
    if (!name || !email || !password) {
        return false;
    }
    return true;
}

