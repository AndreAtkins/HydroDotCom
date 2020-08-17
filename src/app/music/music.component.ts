import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  [x: string]: any;

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  goSpotify(){
    console.log("inspot")
    this.router.navigateByUrl("https://open.spotify.com/artist/2Hjwc30EzgCvWACvjaoyY6?si=MTxhp2uoSGWAqTinCMSO_A");
}


}
