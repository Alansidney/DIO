class ContaBancaria{
    constructor (agencia,conta,tipo){
        this.agencia = agencia;
        this.conta = conta;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }
    sacar(valor){
        if(this._saldo<valor){
            return "operacao inválida!"
        }
        this._saldo-=valor;
        return this._saldo; 
    }
    depositar(valor){
        this._saldo += valor;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia,conta,cartaoCredito){
        super(agencia,conta);
        this.tipo = "conta corrente"
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}
class contaPoupanca extends ContaBancaria{
    constructor(agencia,conta){
        super(agencia,conta);
        this.tipo = "poupança";
    }
}
class contaUniversitaria extends ContaBancaria{
    constructor(agencia,conta){
        super(agencia,conta);
        this.tipo = "universitária";
    }

    sacar(valor){
        if(valor>500)   return "Operação negada"
        this._saldo -= valor;
    }
}