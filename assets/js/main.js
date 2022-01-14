function calculadora(){
    return{
        display: document.querySelector('.container .calculadora .display'),
        
        inicia(){
            this.capturaClick();
            this.capturaEnter();
            this.pressionaBackSpace();
        },
        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
              if (e.keyCode === 8) {
                e.preventDefault();
                this.display.value='';
              }
            });
          },
      
        escreveDisplay(valor){
            this.display.value += valor;
        },
        capturaEnter(){
            this.display.addEventListener('keyup',event =>{
                if(event.keyCode === 13){
                    this.fazCalculo();
                }})
        },
        fazCalculo(){
            try{
            this.display.value = eval(this.display.value);
            }catch{
                this.display.value = 'Resultado invalido'
                setTimeout(valor=>{this.display.value =''},1000)
            }
        },
        capturaClick(){
            document.addEventListener('click',e =>{
                const evento = e.target;
                if(evento.classList.contains('numero')){
                    this.escreveDisplay(evento.innerText);
                }
                else if (evento.classList.contains('limpar')){
                    this.display.value=''
                }
                else if(evento.classList.contains('deleta')){
                    this.display.value = this.display.value.slice(0,-1);
                }
                else if(evento.classList.contains('igual')){
                    this.fazCalculo();
                }
            this.display.focus();         
            })
        },
    };
}
const  CRIA_CALCULADORA = calculadora()
CRIA_CALCULADORA.inicia()