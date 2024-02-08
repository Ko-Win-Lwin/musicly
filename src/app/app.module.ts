import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './component/header/header.component';
import {HomeComponent} from "./pages/home/home.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import { SearchBoxComponent } from './component/search-box/search-box.component';
import { LeftNavigationComponent } from './component/left-navigation/left-navigation.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { AlbumComponent } from './pages/album/album.component';
import { GenresComponent } from './pages/genres/genres.component';
import { CreatePlaylistComponent } from './pages/your-play-lists/create-playlist/create-playlist.component';
import { GreatestHitsComponent } from './pages/your-play-lists/greatest-hits/greatest-hits.component';
import { SongsOfDreamComponent } from './pages/your-play-lists/songs-of-dream/songs-of-dream.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FavouriteListComponent } from './component/favourite-list/favourite-list.component';
import { FollowingArtistsComponent } from './component/following-artists/following-artists.component';
import { ShareProfileComponent } from './component/share-profile/share-profile.component';
import { LatestChatComponent } from './component/latest-chat/latest-chat.component';
import { SongCardComponent } from './component/song-card/song-card.component';
import { FriendsComponent } from './component/friends/friends.component';
import { FriendProfileCardComponent } from './component/friend-profile-card/friend-profile-card.component';
import { ChatComponentComponent } from './component/latest-chat/chat-component/chat-component.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    SearchBoxComponent,
    LeftNavigationComponent,
    DashboardComponent,
    ArtistComponent,
    AlbumComponent,
    GenresComponent,
    CreatePlaylistComponent,
    GreatestHitsComponent,
    SongsOfDreamComponent,
    ProfileComponent,
    FavouriteListComponent,
    FollowingArtistsComponent,
    ShareProfileComponent,
    LatestChatComponent,
    SongCardComponent,
    FriendsComponent,
    FriendProfileCardComponent,
    ChatComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
