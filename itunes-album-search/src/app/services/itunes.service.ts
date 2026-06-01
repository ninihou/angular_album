import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Album {
  collectionName: string;
  artworkUrl100: string;
  artistName: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItunesService {

  constructor(private http: HttpClient) { }

  searchAlbums(artist: string): Observable<{ resultCount: number; results: Album[] }> {
              //https://itunes.apple.com/search?media=music&entity=album&attribute=artistTerm&limit=50&term=${ARTIST_NAME}
    const url = `https://itunes.apple.com/search?media=music&entity=album&attribute=artistTerm&limit=50&term=${encodeURIComponent(artist)}`;
    return this.http.get<{ resultCount: number; results: Album[] }>(url);
  }
}
