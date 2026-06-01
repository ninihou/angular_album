import { Component, Input } from '@angular/core';
import { Album } from '../../services/itunes.service';
@Component({
  selector: 'app-album-card',
  imports: [],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.scss'
})
export class AlbumCardComponent {
  @Input() album!: Album;
  ngOnInit() {
    console.log('album card:', this.album);
  }
}


