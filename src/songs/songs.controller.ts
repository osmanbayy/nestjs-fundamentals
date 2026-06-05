import { Controller, Get } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Get()
  getSongs() {
    return [
      { id: 1, title: 'Song One', artist: 'Artist A' },
      { id: 2, title: 'Song Two', artist: 'Artist B' },
      { id: 3, title: 'Song Three', artist: 'Artist C' },
    ];
  }

  @Get(':id')
  getSongById() {
    return { id: 1, title: 'Song One', artist: 'Artist A' };
  }
}
