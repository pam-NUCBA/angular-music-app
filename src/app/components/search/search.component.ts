import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'

})
export class SearchComponent {

  artists: any [] = [];
  // loading:
  loading: boolean;

  constructor(
    private spotify: SpotifyService
  ) { }

  search(word: string) {
    this.loading = true;
    console.log(word);
    this.spotify.getArtists(word)
    .subscribe ((data: any) => {
      console.log(data);
      this.artists = data; // I only need to write data because of the pipe
      this.loading = false;
    });
  }


}
