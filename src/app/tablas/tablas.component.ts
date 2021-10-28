import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {

  disableSelect = new FormControl(false);

  constructor(private router: Router) { }

  public respuestas = {
    valor1 : "",
    valor2 : "",
    valor3 : "",
    valor4 : "",
    valor5 : "",
    valor6 : "",
    valor7 : "",
    valor8 : "",
    valor9 : "",
    valor10 : "",
    valorTabla : ""
  }

  operacion : any;
  public userLogger = localStorage.getItem("user");
  intentos = 0;

  resultadoTest1 = false;
  resultadoTest2 = false;
  resultadoTest3 = false;
  resultadoTest4 = false;
  resultadoTest5 = false;
  resultadoTest6 = false;
  resultadoTest7 = false;
  resultadoTest8 = false;
  resultadoTest9 = false;
  resultadoTest10 = false;
  
  ngOnInit(): void {
  }

  testResult(){

    if (this.respuestas.valorTabla == ""){
      Swal.fire("","Seleccione una tabla para realizar el test");

    }else{

      if (this.intentos == 0){

        this.intentos = 1;
        console.log(this.respuestas);
        console.log(this.respuestas.valorTabla);

  
        const tablaInt = +this.respuestas.valorTabla;
        const respuesta1 = +this.respuestas.valor1;
        const respuesta2 = +this.respuestas.valor2;
        const respuesta3 = +this.respuestas.valor3;
        const respuesta4 = +this.respuestas.valor4;
        const respuesta5 = +this.respuestas.valor5;
        const respuesta6 = +this.respuestas.valor6;
        const respuesta7 = +this.respuestas.valor7;
        const respuesta8 = +this.respuestas.valor8;
        const respuesta9 = +this.respuestas.valor9;
        const respuesta10 = +this.respuestas.valor10;
  
        let correctas = 0;
        let incorrectas = 0;
        
        if (respuesta1 == (tablaInt * 1)){ console.log ("Respuesta 1 CORRECTA"); correctas = correctas + 1;
        }else {console.log ("Respuesta 1 INCORRECTA");incorrectas = incorrectas + 1; this.resultadoTest1 = true;}
  
        if (respuesta2 == (tablaInt * 2)){ console.log ("Respuesta 2 CORRECTA"); correctas = correctas + 1;
        }else {console.log ("Respuesta 2 INCORRECTA");incorrectas = incorrectas + 1; this.resultadoTest2 = true;}
  
        if (respuesta3 == (tablaInt * 3)){ console.log ("Respuesta 3 CORRECTA"); correctas = correctas + 1;
        }else {console.log ("Respuesta 3 INCORRECTA");incorrectas = incorrectas + 1; this.resultadoTest3 = true;}
  
        if (respuesta4 == (tablaInt * 4)){ console.log ("Respuesta 4 CORRECTA"); correctas = correctas + 1;
        }else {console.log ("Respuesta 4 INCORRECTA");incorrectas = incorrectas + 1; this.resultadoTest4 = true;}
  
        if (respuesta5 == (tablaInt * 5)){ console.log ("Respuesta 5 CORRECTA"); correctas = correctas + 1;
        }else {console.log ("Respuesta 5 INCORRECTA");incorrectas = incorrectas + 1; this.resultadoTest5 = true;}
  
        if (respuesta6 == (tablaInt * 6)){ console.log ("Respuesta 6 CORRECTA"); correctas = correctas + 1;
        }else {console.log ("Respuesta 6 INCORRECTA");incorrectas = incorrectas + 1; this.resultadoTest6 = true;}
  
        if (respuesta7 == (tablaInt * 7)){ console.log ("Respuesta 7 CORRECTA"); correctas = correctas + 1;
        }else {console.log ("Respuesta 7 INCORRECTA");incorrectas = incorrectas + 1; this.resultadoTest7 = true;}
  
        if (respuesta8 == (tablaInt * 8)){ console.log ("Respuesta 8 CORRECTA"); correctas = correctas + 1;
        }else {console.log ("Respuesta 8 INCORRECTA");incorrectas = incorrectas + 1; this.resultadoTest8 = true;}
  
        if (respuesta9 == (tablaInt * 9)){ console.log ("Respuesta 9 CORRECTA"); correctas = correctas + 1;
        }else {console.log ("Respuesta 9 INCORRECTA");incorrectas = incorrectas + 1; this.resultadoTest9 = true;}
  
        if (respuesta10 == (tablaInt * 10)){ console.log ("Respuesta 10 CORRECTA"); correctas = correctas + 1;
        }else {console.log ("Respuesta 10 INCORRECTA");incorrectas = incorrectas + 1; this.resultadoTest10 = true;}
  
        console.log("correctas:"+correctas+" incorrectas:"+incorrectas);
        Swal.fire({
          title: "Resultado del Test", 
          html: "Respuestas Correctas: "+correctas+"<br> Respuesta Incorrectas: "+incorrectas+""})
        .then(() => {
          // Aquí la alerta se ha cerrado
          console.log("Alerta cerrada");
        });

      } else{
        console.log("Intentos mayor a cero "+ this.intentos)
      }
      console.log("Intentos mayor a cero "+ this.intentos)
    }     
  }


  resetTest (){
    window.location.reload();
    //this.router.navigate(["tablas"]);
  }

}
