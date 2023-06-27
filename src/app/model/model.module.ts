import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.dataSource';
import { TokenInterceptor } from '../service/admin-inter.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({

  providers: [StaticDataSource,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
})
export class ModelModule { }
