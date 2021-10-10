import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCarouselModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AlojamentoService } from './services/alojamento/alojamento.service';
import { BarracasService } from './services/barracas/barracas.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, FooterComponent, HeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
    NgbCarouselModule,
    MatToolbarModule,
    NgbCollapseModule,
    HttpClientModule
  ],
  providers: [
    AlojamentoService,
    BarracasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
