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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { WorkModule } from './sections/work/work.module';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    AboutMeComponent,
    ContactMeComponent,
    EducationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    WorkModule
  ],
  providers: [{ provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: { disabled: true } }],
  bootstrap: [AppComponent]
})
export class AppModule { }