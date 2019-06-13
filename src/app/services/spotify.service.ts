import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // needs headers because spotify requests a token

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  constructor(
    private http: HttpClient,
  ) { }

  getQuery(query: string) { // query is the code that's unique to each of the gets. They have a part that's the same and one that's unique.
    const url = `https://api.spotify.com/v1/${query}`

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAtMSb-bQZ-O9rJEwWEm2wmZVVKsoR5m_gpCFwaZiFq7CodEK6M3rXYrw98Ql0KY4cQnDXVDHLDG5_FzqY',
    });
    return this.http.get(url, { headers })
  }


  
  getNewReleases() { // doesn't need arguments because the info comes from spotify
    return this.getQuery('browse/new-releases') // this is the only part that's different from the getQuery function.
      .pipe(map(data => data['albums'].items // with the pipe, I can write only data instead of data.albums.items
      ));

  // old code:
    // const headers = new HttpHeaders({ Authorization: 'Bearer BQBeoaogBp1Ncmm17SFh-rPYFd_jF65ReExJ5J_ecoN_nXLLDJ1ee8eDuVtYEAa5PJlR4Q1Mb_9H5ncvuM0', // });
    // I need to tell the http petition to use those headers:
    // this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }
    //    .subscribe(data => {console.log(data)}) 
  }

  // getting all the artist for the cards:
  getArtists(word: string) {
    return this.getQuery(`search?query=${word}&type=artist&market=AR&offset=0&limit=15`)
      .pipe(map(data => data['artists'].items)) // if an arrow function has only one line, it can be expressed without the return and the {}

  }

  // getting only one artist for the details:
  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
   //   .pipe(map(data => data['artists'].items))

  }
}
