import { EventData, Page } from '@nativescript/core';
import { MoodEntryViewModel } from './mood-entry-view-model';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new MoodEntryViewModel();
}