import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {


  constructor(
   private spotify: SpotifyService, // inject the service to use Spotify Api
  ) { 
  console.log('spoti service works');
  this.spotify.getNewReleases();
  }

  ngOnInit() {
  }

}
