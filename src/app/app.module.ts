import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProjectComponent } from './components/project/project.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    AboutComponent,
    SkillComponent,
    ProjectComponent,
    PortfolioComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
