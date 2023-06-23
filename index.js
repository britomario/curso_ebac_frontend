function Funcionarios(nome){
    this.nome = nome;
    this.saudacao = function (){
        console.log('Olá meu nome é ' + nome + ' e eu sou funcionário da empresa EBAC.')
    }
}

function Gerente(nome, cargo){
    Funcionarios.call(this, nome);
    this.cargo = cargo;
    this.funcao = function(){
        console.log('Meu cargo na EBAC é de ' + this.cargo);
    }
}

function Programador(nome, salario){
    Funcionarios.call(this, nome);
    this.salario = salario;
    this.payment = function(){
        console.log('Meu salário na EBAC é de R$' + this.salario + ' reais.');
    }
}

function Designer(nome, ferramenta){
    Funcionarios.call(this, nome);
    this.ferramenta = ferramenta;
    this.framework = function(){
        console.log('Aqui na EBAC nos designers usamos a ferramenta ' + this.ferramenta + ' para criar nossos protótipos.')
    }
}

let gerente = new Gerente('Mario', 'Gerente');
let programador = new Programador('Lucas', 5000);
let designer = new Designer('Felipe', 'Figma');

// classe Gerente
gerente.saudacao();
gerente.funcao();

// classe Programador
programador.saudacao();
programador.payment();

// classe Designer

designer.saudacao();
designer.framework();