import {Component} from '@angular/core';
import {AuthAPI} from '../../API/AuthAPI';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {UserServiceAPIService} from '../../API/UserAPI/user-service-api.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName: string = "";
  password: string = "";
  errorMessage: string | null = null;
  token: string |null = null;

  constructor(private http: HttpClient, private authAPI: AuthAPI, private  userService: UserServiceAPIService, private router:Router) {
  }

  login() {
    this.authAPI.login(this.userName, this.password).subscribe(
      (response: any) => {
        this.errorMessage=null;// JWT'yi al ve sakla
        this.authAPI.saveToken(response.token);

        this.router.navigate(['/catalogue']);

        console.log("Giriş Başarılı");
      }
      ,
       (error: HttpErrorResponse) =>
       {
         if (error.status === 500)
         {
           this.errorMessage = "KULLANICI ADI VEYA ŞİFRE EKSİK YADA YANLIŞ";
         }
      }
    );
  }
}
