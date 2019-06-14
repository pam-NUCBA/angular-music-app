import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { SpotifyService } from './services/spotify.service';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardsComponent } from './components/shared/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavBarComponent,
    NoimagePipe,
    CardsComponent,
    LoadingComponent,
    DomseguroPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true}) // definition of routes inside ()
  ],
  providers: [
    SpotifyService, // service to use the spotify Api
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
