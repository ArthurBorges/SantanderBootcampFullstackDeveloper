class ContaBancaria{
	constructor(agencia, numero, tipo, saldo){
		this.agencia = agencia;
		this.numero = numero;
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
		if(valor > this._saldo){
			return 'Operação negada';
		}
		this._saldo = this._saldo - valor;
		
		return this._saldo;
	}

	depositar(valor){
		this._saldo = this._saldo + valor;
		
		return this._saldo;
	}
}

class ContaCorrente extends ContaCorrente{
	constructor(agencia, numero){
		super(agencia, numero, cartaoCredito);
		this.tipo = 'corrente';
		this._cartaoCredito = cartaoCredito;
	}

	get cartaoCredito(){
		return this._cartaoCredito;
	}

	set cartaoCredito(valor){
		this._cartaoCredito = valor;
	}
}

class ContaPoupanca extends ContaCorrente{
	constructor(agencia, numero){
		super(agencia, numero);
		this.tipo = 'poupança';
	}
}

class ContaUniversitaria extends ContaCorrente{
	constructor(agencia, numero){
		super(agencia, numero);
		this.tipo = 'universitaria';
	}

	sacar(valor){
		if(valor > 500){
			return 'Operação negada!';
		}
		this._saldo = this._saldo - valor;
		
		return this._saldo;
	}
}
