import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoadingService } from './../../util/loading.service';
import { SendInputComponent } from './../../component/send-input/send-input.component';
import { UserService } from './../../api/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public textComponent =  [
    {
      textTitle: 'Log in',
      btnLogin:  'Login',
      textSignin: 'You do no have an account?',
      textSigninLink: 'Sign up',
      textForgotPassword: 'I forgot my password',
      textPlaceholderPassword:  'Password',
      textErrorEmpety : 'Empty Fields',
      textLoad : 'Please wait...',
    },
    {
      textTitle: 'Iniciar sesión',
      btnLogin:  'Iniciar sesión',
      textSignin: '¿No tiene una cuenta?',
      textSigninLink: 'Registrarse',
      textForgotPassword: 'Olvidé mi contraseña',
      textPlaceholderPassword:  'Contraseña',
      textErrorEmpety : 'Campos vacios',
      textLoad : 'Por favor espere...',
    },
  ];
  public idiomaActual: number = (localStorage.getItem('idiomaActual'))? parseInt(localStorage.getItem('idiomaActual')) :0;

  @ViewChild('txtMail', {static: false}) txtMail: SendInputComponent;
  @ViewChild('txtPassword', {static: false}) txtPassword: SendInputComponent;

  mensajeError = '';

  constructor(
    public loading: LoadingService, 
    public servicio: UserService,
    public router: Router,
    private navCtrl: NavController) {}

  ngOnInit() {
  }

  elegirIdioma(idiomaNuevo){
    this.idiomaActual = idiomaNuevo;
    localStorage.setItem('idiomaActual', idiomaNuevo)
  }

  login(){
    let routerr = this.router

    let datos_ = {
      mail: this.txtMail.value,
      password: this.txtPassword.value,
    };

    this.mensajeError = '';
    if (datos_.mail !== '' && datos_.password !== '') {
      this.loading.presentLoadingWithOptions(this.textComponent[this.idiomaActual].textLoad);

      this.servicio.login(datos_, (result) => {
          if (result._body) {

            const datos = JSON.parse(result._body);
            console.log(datos)
            if (datos.error === false) {
              window.localStorage.setItem('token', datos.token);
              routerr.navigateByUrl('/loby');
              this.loading.dismiss();

            } else {

              this.loading.dismiss();
              this.mensajeError = datos.message;
            }

          }
        });
    } else {
        this.mensajeError = this.textComponent[this.idiomaActual].textErrorEmpety;
    }

  }

}
