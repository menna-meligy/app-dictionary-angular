import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SharedDataService } from '../shared-data-service.service';

@Component({
  selector: 'app-antonyms-component',
  templateUrl: './antonyms-component.component.html',
  styleUrls: ['./antonyms-component.component.css'],
})
export class AntonymsComponentComponent implements OnInit {
  word!: string;
  antonyms!: any[];

  constructor(
    private apiService: ApiService,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    this.word = this.sharedDataService.getWord();
  }
}
