import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';
register();

export interface Song {
  name: string;
  singer: string;
  poster: string;
  filePath: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],
})
export class HomePage {

  @ViewChild('audioPlayer', { static: false }) audioPlayerRef!: ElementRef;
  @ViewChild('audioSlider', { static: false }) audioSliderRef!: ElementRef;
  
  position: any;
  duration: number;
  
  songsPlayList: Song[] = [
    {
      name: 'Believer',
      singer: 'Imagine Dragon',
      poster: 'believer.jpg',
      filePath: ''
    },
    {
      name: 'Moment Apart',
      singer: 'Odesza',
      poster: 'a-moment-apart.jpg',
      filePath: ''
    },
    {
      name: 'Shortwave',
      singer: 'Ryan Grigdry',
      poster: 'shortwave.jpg',
      filePath: ''
    }
  ]
  playing: boolean = false;
  constructor() {
    this.position = 0;
    this.duration = 0;
  }

  initAudioPlayer() {
    this.duration = this.audioPlayerRef.nativeElement.duration;
    this.audioPlayerRef.nativeElement.ontimeupdate = this.updateAudioProgress.bind(this);
  }

  seekAudio() {
    this.audioPlayerRef.nativeElement.currentTime = this.position;
  }

  updateAudioProgress() {
    this.position = this.audioPlayerRef.nativeElement.currentTime;
  }

  playPauseToggle() {
    this.playing = !this.playing;
  }
}
