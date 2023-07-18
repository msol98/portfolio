import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IntroComponent } from './sections/intro/intro.component';
import { WorkComponent } from './sections/work/work.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactMeComponent } from './sections/contact-me/contact-me.component';
import { EducationComponent } from './sections/education/education.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    WorkComponent,
    AboutMeComponent,
    ContactMeComponent,
    EducationComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
