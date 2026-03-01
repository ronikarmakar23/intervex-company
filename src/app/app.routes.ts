import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'companies',
    pathMatch: 'full'
  },
  {
    path: 'companies',
    loadChildren: () =>
      import('./company/company.routes')
        .then(m => m.COMPANY_ROUTES)
  }
];
