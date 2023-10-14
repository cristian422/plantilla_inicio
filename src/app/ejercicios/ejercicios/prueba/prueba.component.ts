import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Parser} from 'expr-eval';
import { environment } from 'environments/environment';/*importamos enviroment */ 
import { el } from 'date-fns/locale';
@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {
  
  env:any=environment;
  
  calcular: string="";
  texto: string = ''; 
    constructor(
      private router: Router
    ) { }

    
  
    ngOnInit(): void {
    }

    mostrar(){
      if(this.env.modeof==true){
        alert("Estas en produccion");
    }else{
      alert("Estas en desarrollo");
    }}

    numero1(){
      this.calcular=this.calcular+"1";
      this.texto=this.calcular;
      
    }
    numero2(){
      this.calcular=this.calcular+"2";
      this.texto=this.calcular;
      
    }
    numero3(){
      this.calcular=this.calcular+"3";
      this.texto=this.calcular;
      
    }
    numero4(){
      this.calcular=this.calcular+"4";
      this.texto=this.calcular;
      
    }
    numero5(){
      this.calcular=this.calcular+"5";
      this.texto=this.calcular;
      
    }
    numero6(){
      this.calcular=this.calcular+"6";
      this.texto=this.calcular;
      
    }
    numero7(){
      this.calcular=this.calcular+"7";
      this.texto=this.calcular;
      
    }
    numero8(){
      this.calcular=this.calcular+"8";
      this.texto=this.calcular;
      
    }
    numero9(){
      this.calcular=this.calcular+"9";
      this.texto=this.calcular;
      
    }
    numero0(){
      this.calcular=this.calcular+"0";
      this.texto=this.calcular;
      
    }
    Resta(){
      this.calcular=this.calcular+"-";
      this.texto=this.calcular;
      
    }
    Multiplicacion(){
      this.calcular=this.calcular+"*";
      this.texto=this.calcular;
      
    }
  
    Division(){
      this.calcular=this.calcular+"/";
      this.texto=this.calcular;
      
    }
  
  
    Suma(){
      this.calcular=this.calcular+"+";
      this.texto=this.calcular;
      
    }
    Resultado(){
      try {
        var parser = new Parser();
        var expr = parser.parse(this.calcular);
        this.texto=expr.evaluate({});
      
        
      } catch (error) {
        alert("Error en la operacion");
      }
      
      
  
    }
    Limpiar(){
      this.calcular="";
      this.texto=this.calcular;
    }
    BorrarUNO(){
      this.calcular=this.calcular.slice(0,-1);
      this.texto=this.calcular;
    }
  
}
