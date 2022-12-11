import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public textComponent =  [
      {
        textLogin:  'You do have an account?',
        textLoginLink:  'Log in',
        textSignin: 'You do no have an account?',
        textSigninLink: 'Sign up',
        textForgotPassword: 'I forgot my password',
        textSupport:  'Support'
      },
      {
        textLogin:  '¿Ya tiene una cuenta?',
        textLoginLink:  'Iniciar Sesión',
        textSignin: '¿No tiene una cuenta?',
        textSigninLink: 'Registrarse',
        textForgotPassword: 'Olvidé mi contraseña',
        textSupport:  'Soporte'
      },
  ];
  public idiomaActual: number = (localStorage.getItem('idiomaActual'))? parseInt(localStorage.getItem('idiomaActual')) :0;

  constructor() {}

  elegirIdioma(idiomaNuevo){
    this.idiomaActual = idiomaNuevo;
    localStorage.setItem('idiomaActual', idiomaNuevo)
  }


}
