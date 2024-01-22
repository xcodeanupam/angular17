import { Routes } from "@angular/router";
import { AddNewComponent } from "./add-new/add-new.component";
import { LandingComponent } from "./landing/landing.component";
import { ViewResumeComponent } from "./view-resume/view-resume.component";

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'add-new-resume', component: AddNewComponent },
    { path: 'view/:id', component: ViewResumeComponent },
  ];