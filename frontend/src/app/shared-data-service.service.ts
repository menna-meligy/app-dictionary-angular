import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
// Making the data of the word form accessible from other components
export class SharedDataService {
  private word!: string;
  private sourceLanguage!: string;
  private targetLanguage!: string;

  // Sets the word for translation so it can be passed to the api url
  setWord(word: string): void {
    this.word = word;
  }

  getWord(): string {
    return this.word;
  }

  setSourceLanguage(language: string): void {
    this.sourceLanguage = language;
  }

  getSourceLanguage(): string {
    return this.sourceLanguage;
  }

  setTargetLanguage(language: string): void {
    this.targetLanguage = language;
  }

  getTargetLanguage(): string {
    return this.targetLanguage;
  }
}
