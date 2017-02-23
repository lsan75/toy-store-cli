/**
 * Angular modules
 */
import { NgModule, OpaqueToken } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'

/**
 * Env
 */
import { environment } from '../environments/environment'

/**
 * Redux libs
 */
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store'
import { actions, defaultState, IAppState, rootReducer } from './store'

/**
 * Routes
 */
import { appRoutes } from './app.routes'

/**
 * Pipes
 */

/**
 * Services module
 */
import { ServicesModule } from './services/services.module'

/**
 * containers & components
 */
import { AppContainer } from './app.container'
import { ComponentsModule } from './components/components.module'
import { containers } from './containers'

/**
 * App Module
 */
@NgModule({
  declarations: [
    AppContainer,
    ...containers
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    RouterModule.forRoot(appRoutes),
    ServicesModule
  ],
  providers: [ DevToolsExtension, ...actions ],
  bootstrap: [ AppContainer ]
})
export class AppModule {
  constructor(
    public ngRedux: NgRedux<IAppState>,
    public devTool: DevToolsExtension
  ) {

    const enhancers = []
    if (!environment.production) {
      enhancers.push( devTool.isEnabled() ? devTool.enhancer() : (f) => f )
    }

    ngRedux.configureStore(
      rootReducer,
      defaultState,
      [],
      enhancers
    )

  }
}
