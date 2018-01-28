import { AppPage } from './app.po';
import {by, element} from 'protractor';

describe('alfresco-test App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display favourite message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('The user\'s favourite files and folders');
  });

  const _entryNames = [
    'Partner Newsletter Jan2018.docx',
    'abson_develop_great_dashlets.pdf',
    'BP-7_CustomizingShareBestPractices_Abson.pptx'
  ];
  it('should pass properties to card properly', function() {
    const parent = element.all(by.tagName('app-root')).get(0);
    const entries = parent.all(by.tagName('app-entry'));

    for (let i = 0; i < _entryNames.length; i++) {
      const childTitle = entries.get(i).element(by.tagName('mat-card-title')).getText();
      expect(childTitle).toEqual(_entryNames[i]);
    }
  });
});
