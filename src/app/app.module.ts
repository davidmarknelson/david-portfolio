import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './portfolio/projects/projects.component';
import { SkillsComponent } from './portfolio/skills/skills.component';
// Font Awesome
import { faExternalLinkAlt, faPaperPlane, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    PortfolioComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // Font Awesome
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Font Awesome
    library.add(faExternalLinkAlt, faGithub, faPaperPlane, faEnvelope, faUser, faLinkedin, faGithubSquare);
  }
}
