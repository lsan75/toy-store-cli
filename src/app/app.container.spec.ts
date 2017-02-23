import { NO_ERRORS_SCHEMA } from '@angular/core'
import { TestBed, async } from '@angular/core/testing'
import { Router, RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { AppContainer } from './app.container'
import { HeaderContainer } from './containers/header/header.container'

import { AuthActions } from './store/auth/auth.actions'

describe('AppComponent', () => {

  const spyAuth = jasmine.createSpy('spyAuth')

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, RouterTestingModule],
      declarations: [
        AppContainer,
        HeaderContainer
      ],
      providers: [
        { provide: AuthActions, useValue: spyAuth }
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
