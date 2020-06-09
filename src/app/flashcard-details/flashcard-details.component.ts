import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-flashcard-details',
  templateUrl: './flashcard-details.component.html',
  styleUrls: ['./flashcard-details.component.css']
})
export class FlashcardDetailsComponent implements OnInit {
  @Input() card;
  @Output() answer = new EventEmitter();

  showAnswer = false;

  constructor() { }

  ngOnInit(): void {
  }

  flip() {
    this.showAnswer = !this.showAnswer;
    // console.log('showAnswer', this.showAnswer);
  }

  setAnswer(isRight) {
    // console.log('isRight', isRight);
    this.answer.emit ({card : this.card, isRight});
  }

}
