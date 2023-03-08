import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom modules
import { AuthModule } from './_modules/auth/auth.module';
import { DashboardComponent } from './_modules/dashboard/dashboard.component';
import { CoursesModule } from './_modules/courses/courses.module';
import { ComponentsModule } from './_components/components.module';
import { DecksModule } from './_modules/decks/decks.module';
import { CompetenciesModule } from './_modules/competencies/competencies.module';
import { GroupsModule } from './_modules/groups/groups.module';

// Services
import { AuthInterceptor } from './_services/auth.interceptor';

// NGZorro
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    CoursesModule,
    ComponentsModule,
    NzLayoutModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzProgressModule,
    NzButtonModule,
    NzDropDownModule,
    DecksModule,
    CompetenciesModule,
    GroupsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
