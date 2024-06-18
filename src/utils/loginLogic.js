export default function logica(email, password, confirmPassword, name, terms){
    if (!email) {
        return ["emailE","Você precisa digitar seu email"]
    }

    if (!password) {
        return ["pswdE","Você precisa digitar sua senha"]
    }
    
    return;
}