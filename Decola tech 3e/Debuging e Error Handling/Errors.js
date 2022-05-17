//Objeto Error
//new Error(message,filename,lineNumber);

const MeuErro = new Error("Mensagem Invalida");
MeuErro.name="InvalidMessage"
throw MeuErro;

