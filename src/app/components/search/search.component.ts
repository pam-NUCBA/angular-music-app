import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'

})
export class SearchComponent {

  artists: any [] = [];

  constructor(
    private spotify: SpotifyService
  ) { }

  search(word: string) {
    console.log(word);
    this.spotify.getArtist(word)
    .subscribe ((data: any) => {
      console.log(data);
      this.artists = data; // I only need to write data because of the pipe
    });
  }


}
