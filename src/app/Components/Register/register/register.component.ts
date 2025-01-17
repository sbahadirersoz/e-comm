import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Router, RouterLink, RouterModule} from "@angular/router";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {RegisterRequestDto} from '../../../models/RegisterRequestDto';
import {UserServiceAPIService} from '../../../API/UserAPI/user-service-api.service';
import {routes} from '../../../app.routes';

@Component({
  selector: 'app-register',
    imports: [
        FormsModule,
        NgIf,
        RouterLink,
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent
{
registerDto :RegisterRequestDto = new RegisterRequestDto("","","","","")
  errorMessage: string = "";

  register(registerDto: RegisterRequestDto): void {
    this.api.createUsers(registerDto).subscribe(
      result => {
        if (result) {
          this.errorMessage = "Başarıyla kayıt olundu!";
          this.router.navigate(['/catalogue']); // Kayıt başarılı, catalogue sayfasına yönlendirme
        } else {
          this.errorMessage = "Bilinmeyen bir hata oluştu.";
        }
      },
      (error: HttpErrorResponse) => {
        if (error.status === 500) {
          this.errorMessage = "Sunucu ile ilgili bir sorun var. Lütfen daha sonra tekrar deneyin.";
        } else if (error.status === 404) {
          this.errorMessage = "Sunucuya erişilemedi. Kaynak bulunamadı.";
        } else if (error.status === 401) {
          this.errorMessage = "Yetkilendirme hatası. Lütfen giriş yapın.";
        } else {
          this.errorMessage = `Bir hata oluştu: ${error.message}`;
        }
      }
    );
  }

  constructor(private http: HttpClient, private router: Router,private api: UserServiceAPIService) {
  }
}
