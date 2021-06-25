import { ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HttpConfig } from './http.config';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class HttpModule {
  public static forRoot(config: HttpConfig = new HttpConfig()): ModuleWithProviders<HttpModule> {
    return {
      ngModule: HttpModule,
      providers: [
        { provide: HttpConfig, useValue: config }
      ]
    };
  }

  constructor(@Optional() config: HttpConfig) {
    if ( !config?.API ) {
      throw new Error('Você precisa passar uma configuração válida (HttpConfig) para o HttpModule');
    }
  }
}
