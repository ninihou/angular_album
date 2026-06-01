import { Component } from '@angular/core';

import { ItunesService, Album } from './services/itunes.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  albums: Album[] = [];
  artistName = '';
  resultCount = 0;

  constructor(private itunesService: ItunesService) {}

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    const artist = input.value.trim();
    if (!artist) return;

    this.artistName = artist;
    console.log('search...:', artist);
    this.itunesService.searchAlbums(artist).subscribe(data => {
      console.log('api res:', data);
      console.log('total results:', data.resultCount);
      console.log('first album:', data.results[0]);
      this.albums = data.results;
      this.resultCount = data.resultCount;
    });
  }
}
