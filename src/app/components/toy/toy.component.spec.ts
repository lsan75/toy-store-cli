/*
 * Testing ToyComponent
 */
import { Component, ViewChild } from '@angular/core'
import { TestBed, async, fakeAsync, tick } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'
import { ChangeDetectionStrategy } from '@angular/core'
import { Observable } from 'rxjs/Rx'

import { ToyComponent } from './toy.component'

@Component({
  selector: 'app-parent',
  template: `
    <app-toy
      [toy]="toy"
      (selectRequest)="toySelect($event)"
    ></app-toy>
  `
})
class ParentComponent {
  public toy
  @ViewChild(ToyComponent) toyComponent
  public toySelect = toy => {}
}

describe('ToyComponent', () => {

    let comp, fixture, child

    beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [ParentComponent, ToyComponent]
        })
        .overrideComponent(ToyComponent, {
          set: { changeDetection: ChangeDetectionStrategy.Default }
        })
    })

    beforeEach(() => {
      fixture = TestBed.createComponent(ParentComponent)
      comp = fixture.componentInstance
      child = comp.toyComponent
      comp.toy = {
        title: 'toto',
        icon: 'ballon',
        selected: true
      }
    })

    it('should set a toy', () => {
      const el = fixture.debugElement.query(By.css('.toy'))
      const ii = fixture.debugElement.query(By.css('i'))
      fixture.detectChanges()

      expect(el.nativeElement.className).toBe('toy selected')
      expect(ii.nativeElement.className).toBe('mdi mdi-ballon')
    })

    it('should click and select a toy', () => {
      spyOn(comp, 'toySelect')
      child.select('hello')
      fixture.detectChanges()

      expect(comp.toySelect).toHaveBeenCalledWith('hello')
    })

})
