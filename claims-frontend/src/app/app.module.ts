import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { SpinnerComponent } from './animations/spinner/spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './animations/alert/alert.component';
import { ClaimsPortalComponent } from './claims-portal/claims-portal.component';
import { ClaimsFormComponent } from './claims-portal/claims-form/claims-form.component';
import { ClaimsResultComponent } from './claims-portal/claims-result/claims-result.component';
import { SubmitClaimFormComponent } from './claims-portal/submit-claim-form/submit-claim-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AuthComponent,
    SpinnerComponent,
    AlertComponent,
    ClaimsPortalComponent,
    ClaimsFormComponent,
    ClaimsResultComponent,
    SubmitClaimFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
