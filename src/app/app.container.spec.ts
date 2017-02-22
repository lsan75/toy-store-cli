import { NO_ERRORS_SCHEMA } from '@angular/core'
import { TestBed, async } from '@angular/core/testing'
import { Router, RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { AppContainer } from './app.container'
import { HeaderContainer } from './containers/header/header.container'

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppContainer,
        HeaderContainer
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    TestBed.compileComponents()
  })

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppContainer)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
})
