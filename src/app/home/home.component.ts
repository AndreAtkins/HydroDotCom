import { Component, OnInit } from '@angular/core';
import { TwiiterService } from '../twiiter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: TwiiterService) { }
  screenName: string;

  ngOnInit() {
  }

followFan(screenName: string){
  this.service.followFan("https://api.twitter.com/1.1/friendships/create.json?screen_name="+screenName+"&follow=true")
}


}
