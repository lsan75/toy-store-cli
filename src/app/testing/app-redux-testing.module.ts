import { NgModule } from '@angular/core'

import { NgRedux } from '@angular-redux/store'
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing'
import { IAppState, rootReducer } from '../store'

const reduxFactory = () => {
  const ngRedux: NgRedux<IAppState> = MockNgRedux.getInstance()
  ngRedux.configureStore(rootReducer, null)
  return ngRedux
}

@NgModule({
  imports: [ NgReduxTestingModule ],
  providers: [
    { provide: NgRedux, useFactory: reduxFactory}
  ]
})
export class AppReduxTestingModule {}
