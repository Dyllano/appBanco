import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { AngularSlickgridModule, ContainerService } from 'angular-slickgrid'
import { MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { SignupModule } from './generales/signup/signup.module';
import { MydirectiveDirective } from './directives/mydirective.directive';
import { loggingInterceptor } from './interceptors/logging.interceptor';
import { authInterceptor } from './interceptors/auth.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    MydirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SignupModule,
    MatMenuModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptors([loggingInterceptor, authInterceptor])),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
