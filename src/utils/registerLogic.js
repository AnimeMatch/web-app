export default function logica(email, password, confirmPassword, name, terms){
    if (!email) {
        return ["emailE","Você precisa digitar um email"]
    }

    if (!email.includes("@")){
        return ["emailE", "Insira um email válido"]
    }
    
    if (!name) {
        return ["userE","Você precisa escolher seu nome de usuario"]
    }

    if (!password) {
        return ["pswdE","Você precisa escolher uma senha"]
    }

    if (!/[A-Z]/.test(password)) {
        return ["pswdE", "Você precisa de pelo menos uma letra maiúscula"];
    }
      
    if (!/[^a-zA-Z0-9]/.test(password)) {
        return ["pswdE", "Você precisa de pelo menos um caractere especial"];
    }
      
    if (!/\d/.test(password)) {
        return ["pswdE", "Você precisa de pelo menos um número"];
    }
    
    if (password.length < 8) {
        return ["pswdE", "A senha deve ter pelo menos 8 caracteres"];
    }

    if (!confirmPassword) {
        return ["pswdE2","Você precisa confirmar sua senha"]
    }
  
    if (password != confirmPassword) {
        return ["pswdE2","As senhas precisam ser iguais"]
    }

    if (!terms) {
        return 1
    }

    return;
}