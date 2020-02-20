import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from './profile/profile.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';


const routes: Routes = [
    {
        path: "",
        pathMatch: 'full',
        component: ProfileComponent
    },
    {
        path: "settings",
        component: ProfileSettingsComponent
    }
]

export const UserRoutingModule = RouterModule.forChild(routes);