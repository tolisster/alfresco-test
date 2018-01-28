import { Component, Input, OnInit } from '@angular/core';

import { Entry } from '../entry';
import { Folder } from '../folder';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input() entry: Entry;

  get isFolder() {
    return this.entry.target instanceof Folder;
  }

  constructor() { }

  ngOnInit() {
  }

}
