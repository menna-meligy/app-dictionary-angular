import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private word!: string;
  private sourceLanguage!: string;
  private targetLanguage!: string;

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
