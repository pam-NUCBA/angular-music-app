import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() items: any[] = [];

  constructor(
    private router: Router
  ) { }

  viewArtist(item: any ) {
    console.log(item);

    let artistId;

    if (item.type === 'artist') { // retrieve the artist id, first needs to check whether it is type artist or not
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }
    this.router.navigate([ '/artist', artistId]);
    // uses [] because it will navigate to a route that has a parameter. It will navigate to the /artist route, and then to the parameter
  }


}
