import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  newSongs: any [] = []; // empty array
  // to control the loading:
  loading: boolean;


  constructor(
   private spotify: SpotifyService, // inject the service to use Spotify Api
  ) {
  console.log('spoti service works');

  // initialize loading before the releases:
  this.loading = true;
  this.spotify.getNewReleases()
    .subscribe((data: any) => { // need to specify any so it will asume albums is a HTTP response.
      console.log(data);
      this.newSongs = data;
      this.loading = false; // the loading is not true anymore once the data was retrieved
    });
  }

  ngOnInit() {
  }

}
