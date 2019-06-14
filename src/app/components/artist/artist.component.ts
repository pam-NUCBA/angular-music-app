import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // this is needed to navigate to the active route
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {}; // to get the data of the selected artist
  topTracks: any[] = [];

  loading: boolean;

  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService
    ) {

      this.loading = true;
      this.router.params.subscribe( params => { // it will recieve parameters, and subscribes to check for changes
 //     console.log(params['id']);
      this.getArtist(params.id); // call the artist function
      this.getTopTracks(params.id); // call the toptracks
    });
   }

   getArtist(id: string) {
     this.spotify.getArtist(id)
     .subscribe(artist => {
       console.log(artist);
       this.artist = artist;
       this.loading = false;

    });
   }

   getTopTracks (id: string) {
     this.spotify.getTopTracks(id)
     .subscribe(topTracks => {
       console.log(topTracks);
       this.topTracks = topTracks;
     })
   }

}
