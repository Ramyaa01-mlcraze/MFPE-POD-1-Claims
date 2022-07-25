import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { ClaimsFormComponent } from './claims-portal/claims-form/claims-form.component';
import { ClaimsResultComponent } from './claims-portal/claims-result/claims-result.component';
import { UnsavedChangesGuard } from './claims-portal/guards/claims.candeactivate-guard';
import { ClaimsPortalComponent } from './claims-portal/claims-portal.component';
import { SubmitClaimFormComponent } from './claims-portal/submit-claim-form/submit-claim-form.component';
import { HomeComponent } from './home/home.component';
import { ClaimsGuard } from './claims-portal/guards/claims.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  {
    path: ':username',
    component: ClaimsPortalComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'viewClaims',
        component: ClaimsFormComponent,
        data: { mode: 'billMode' },
      },
      {
        path: 'viewClaims/result',
        component: ClaimsResultComponent,
        canActivate: [ClaimsGuard],
      },
      {
        path: 'getClaimStatus',
        component: ClaimsFormComponent,
        data: { mode: 'claimStatusMode' },
      },
      {
        path: 'getClaimStatus/result',
        component: ClaimsResultComponent,
        canActivate: [ClaimsGuard],
      },
      {
        path: 'submitClaim',
        component: SubmitClaimFormComponent,
        canDeactivate: [UnsavedChangesGuard],
      },
      {
        path: 'submitClaim/result',
        component: ClaimsResultComponent,
        canActivate: [ClaimsGuard],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
