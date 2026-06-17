import { Component } from '@angular/core';
import { AlbumCardComponent } from '../components/album-card/album-card.component';
import { ItunesService, Album } from '../services/itunes.service';

@Component({
  selector: 'app-album-search',
  imports: [AlbumCardComponent],
  templateUrl: './album-search.component.html',
  styleUrl: './album-search.component.scss'
})
export class AlbumSearchComponent {
  albums: Album[] = [];
  artistName = '';
  resultCount = 0;

  constructor(private itunesService: ItunesService) {}

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    const artist = input.value.trim();
    if (!artist) return;
    this.artistName = artist;
    this.itunesService.searchAlbums(artist).subscribe(data => {
      this.albums = data.results;
      this.resultCount = data.resultCount;
    });
  }

  onSearchClick(artist: string): void {
    this.artistName = artist;
    this.itunesService.searchAlbums(artist).subscribe({
      next: (data) => {
        this.albums = data.results;
        this.resultCount = data.resultCount;
      },
      error: (err) => {
        console.error('API error:', err);
      }
    });
  }
}
