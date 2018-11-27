import { UnauthorizedLayoutContainer } from './unauthorized-layout/unauthorized-layout.container';
import { NavbarModule } from './../../core/navbar/navbar.module';
import { PoolLayoutContainer } from './pool-layout/pool-layout.container';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



export const CONTAINERS = [
  PoolLayoutContainer,
  UnauthorizedLayoutContainer
];

@NgModule({
  imports: [CommonModule, NavbarModule],
  declarations: CONTAINERS,
  exports: CONTAINERS,
  providers: []
})
export class ContainersModule {}
