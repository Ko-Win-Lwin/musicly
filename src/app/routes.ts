import { Routes} from "@angular/router";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./pages/home/home.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {AlbumComponent} from "./pages/album/album.component";
import {ArtistComponent} from "./pages/artist/artist.component";
import {GenresComponent} from "./pages/genres/genres.component";
import {ProfileComponent} from "./pages/profile/profile.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'profile',
    component: ProfileComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'album',
    component: AlbumComponent
  },

  {
    path: 'artist',
    component: ArtistComponent
  },

  {
    path: 'genres',
    component: GenresComponent
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
]


