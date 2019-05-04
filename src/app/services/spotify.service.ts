import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // needs headers because spotify requests a token

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  constructor(
    private http: HttpClient,
  ) { }

  getNewReleases() { // doesn't need arguments because the info comes from spotify

  // token:
  const headers = new HttpHeaders({
    Authorization: 'Bearer BQA3ZuJ0Lwa5FSfGFRoV4VuUGgob0Uw9p-pjT2zrzUp5Ka9kB57Ysu2LQKl8NutINKlmyIW3C6nNl6in-6w',
  });

// I need to tell the http petition to use those headers:
  this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    .subscribe(data => {
      console.log(data);
    });
  }
}
