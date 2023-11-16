class Display {
    constructor(displayValorAnterior, displayvalorAtual) {
        this.displayvalorAtual = displayvalorAtual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorAtual = '';
        this.valorAnterior = '';
        this.signos = {
            somar: '+',
            dividir: '%',
            multiplicar: 'x',
            subtrair: '-', 
        }
    }

    borrar() {
        this.valorAtual = this.valorAtual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorAtual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorAtual || this.valorAnterior;
        this.valorAtual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorAtual.includes('.')) return
        this.valorAtual = this.valorAtual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayvalorAtual.textContent = this.valorAtual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorAtual = parseFloat(this.valorAtual);

        if( isNaN(valorAtual)  || isNaN(valorAnterior) ) return
        this.valorAtual = this.calculador[this.tipoOperacion](valorAnterior, valorAtual);
    }
}