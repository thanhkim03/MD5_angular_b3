import {Injectable} from '@angular/core';
import {Song} from '../model/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  playlist: Song[] = [
    {
      id: 'M8U7PR6fQNA',
      name: 'Nhạt'
    },
    {
      id: '7K3tW1tWIro',
      name: 'Tri Kỷ'
    },
    {
      id: 'PXyXzHIZlBo',
      name: 'Hãy ra khỏi người đó đi'
    },
    {
      id: 'v7_t1oqXtIo',
      name: 'Chuyện tình mùa đông'
    },{
    id:'TTS17KxKj94',
      name:'Người tình mùa đông'
    }
  ];

  constructor() {
  }

  findSongById(id: string | null) {
    return this.playlist.find(item => item.id === id);
  }
}
