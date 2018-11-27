import { SearchProfileResultComponent } from './search-profile-result/search-profile-result.component';
import { SearchEntryResultComponent } from './search-entry-result/search-entry-result.component';
import { SearchDiaryResultComponent } from './search-diary-result/search-diary-result.component';
import { ContainersModule } from '../../shared/containers';
import { SearchResultsApiClient } from './search-results.api-client';
import { SearchResultsController } from './search-results.controller';
import { SearchResultsRouting } from './search-results.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results.component';

@NgModule({
  declarations: [SearchResultsComponent, SearchDiaryResultComponent, SearchEntryResultComponent, SearchProfileResultComponent],
  imports: [CommonModule, SearchResultsRouting, ContainersModule],
  providers: [SearchResultsController, SearchResultsApiClient]
})
export class SearchResultsModule {}
