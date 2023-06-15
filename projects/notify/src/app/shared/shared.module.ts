import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { LayoutHeaderComponent } from './layout/layout-header/layout-header.component';
import { LayoutFooterComponent } from './layout/layout-footer/layout-footer.component';
import { LayoutBodyComponent } from './layout/layout-body/layout-body.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutBodyComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
