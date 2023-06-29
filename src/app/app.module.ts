import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IntroComponent } from './sections/intro/intro.component';
import { AboutMeComponent } from './sections/intro/about-me/about-me.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactMeComponent } from './sections/intro/contact-me/contact-me.component';
import { EducationComponent } from './sections/intro/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    AboutMeComponent,
    ContactMeComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
