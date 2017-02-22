import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ToyComponent } from './toy/toy.component'

const components = [
  ToyComponent
]

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ ...components ],
  exports: [ ...components ]
})
export class ComponentsModule {}
