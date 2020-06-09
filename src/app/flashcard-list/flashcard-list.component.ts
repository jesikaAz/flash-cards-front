import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.css']
})
export class FlashcardListComponent implements OnInit {

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }

  saveAnswer(answer) {
   // console.log('answer', answer);
   this.api.saveAnswer(answer);
  }

  saveAll() {
    this.api.saveAllAnswersToServer().subscribe(data => {
      console.log('save SUCCESS', data);
      this.api.getCards()
     }, err => {
       console.error('save FAILURE', err);
    });
  }

  reset() {
    this.api.reset().subscribe(data => {
      console.log('reset Success', data);
      this.api.getCards();
    } , err => {
      console.error('reset FAILURE', err);
    })
  }
}
