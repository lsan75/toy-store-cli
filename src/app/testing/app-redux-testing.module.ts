import { NgModule } from '@angular/core'

import { NgRedux, NgReduxModule } from '@angular-redux/store'
import { IAppState, rootReducer, defaultState } from '../store'

@NgModule({
  imports: [ NgReduxModule ]
})
export class AppReduxTestingModule {
  constructor(
    public ngRedux: NgRedux<IAppState>
  ) {
    ngRedux.configureStore(
      rootReducer,
      defaultState,
      [], []
    )
  }

}
