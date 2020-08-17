import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwiiterService {





  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
      
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
          "authorization": "OAuth oauth_consumer_key= 'YOUR_CONSUMER_KEY', oauth_nonce='AUTO_GENERATED_NONCE', oauth_signature='AUTO_GENERATED_SIGNATURE', oauth_signature_method='HMAC-SHA1', oauth_timestamp='AUTO_GENERATED_TIMESTAMP', oauth_token='USERS_ACCESS_TOKEN', oauth_version='1.0'"
        
    })
  }
  constructor(private _http: HttpClient) { }


  followFan(url: string){
    const x= this._http.post<any>(url, JSON.stringify(null), this.headers)
    console.log(x);  
    return x;
 }
}
