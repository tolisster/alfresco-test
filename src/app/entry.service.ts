import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Target } from './target';
import { Entry } from './entry';
import { File } from './file';
import { Folder } from './folder';

@Injectable()
export class EntryService {
  private entriesUrl = 'https://s3.eu-west-2.amazonaws.com/alfresco-adf-app-test/favorites.json';

  constructor(private http: HttpClient) { }

  getEntries(): Observable<Entry[]> {
    return this.http
        .get(this.entriesUrl)
        .map(response => response['list']['entries'].map(({ entry: { targetGuid, target: t } }) => {
          let target: Target;
          if (t['file']) {
            target = new File(t['file']['name']);
          } else if (t['folder']) {
            target = new Folder(t['folder']['name']);
          }
          return new Entry(targetGuid, target);
        }));
  }

}
