import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SharedDataService } from '../shared-data-service.service';
@Component({
  selector: 'app-translation-result',
  templateUrl: './translation-result.component.html',
  styleUrls: ['./translation-result.component.css'],
})
export class TranslationResultComponent implements OnInit {
  word!: string;
  sourceLanguage!: string;
  targetLanguage!: string;
  translation: any;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.word = this.sharedDataService.getWord();
    this.sourceLanguage = this.sharedDataService.getSourceLanguage();
    this.targetLanguage = this.sharedDataService.getTargetLanguage();
    // this.fetchTranslations();
  }

  // fetchTranslations(): void {
  //   this.apiService.fetchTranslations(this.word).subscribe(
  //     (response) => {
  //       this.translation = response;
  //     },
  //     (error) => {
  //       console.error('Error fetching translations:', error);
  //     }
  //   );
  // }
}
