import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashcardListComponent } from './flashcard-list/flashcard-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FlashcardDetailsComponent } from './flashcard-details/flashcard-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashcardListComponent,
    FlashcardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
