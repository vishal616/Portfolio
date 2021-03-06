import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LandingComponent} from './components/landing/landing.component';
import {AboutComponent} from './components/about/about.component';
import {SkillComponent} from './components/skill/skill.component';
import {ProjectComponent} from './components/project/project.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {ServicesComponent} from './components/services/services.component';
import {ProjectDetailComponent} from './components/project-detail/project-detail.component';
import {ResumeComponent} from './components/resume/resume.component';
import {JobComponent} from './components/job/job.component';
import {EducationComponent} from './components/education/education.component';
import {ContactComponent} from './components/contact/contact.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {NgxUiLoaderModule} from 'ngx-ui-loader';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		LandingComponent,
		AboutComponent,
		SkillComponent,
		ProjectComponent,
		PortfolioComponent,
		ServicesComponent,
		ProjectDetailComponent,
		ResumeComponent,
		JobComponent,
		EducationComponent,
		ContactComponent,
	],
	imports: [
		BrowserModule,
		NgbModule,
		ReactiveFormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot(),
		NgxUiLoaderModule
	],
	providers: [NgbActiveModal],
	bootstrap: [AppComponent],
})
export class AppModule {
}
