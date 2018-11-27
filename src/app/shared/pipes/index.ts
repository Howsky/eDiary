import { ShortenPipe } from './shorten.pipe';
import { NgModule } from '@angular/core';

export const PIPES = [ShortenPipe];

@NgModule({
  imports: [],
  declarations: PIPES,
  exports: PIPES
})
export class PipesModule {}
