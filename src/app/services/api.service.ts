import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:3000';
  cards = [];
  error = null;
  answers = [];

  constructor(private http: HttpClient) {
    this.getCards()
    .subscribe(data => {
      this.cards = data;
      console.log('cards', data);
    }, error => {
      this.error = error;
      console.log('error', error);
    });
   }


   getCards(){
     return this.http.get<Card[]>(`${this.BASE_URL}/cards`);
   }

   saveAnswer(answer) {
     this.answers = [...this.answers, answer];
     console.log('this.answers', this.answers);
   }
}
