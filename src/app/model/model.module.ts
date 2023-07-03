import { NgModule } from '@angular/core';
import { TokenInterceptor } from '../service/admin-inter.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StaticDataSource } from './static.dataSource';
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
