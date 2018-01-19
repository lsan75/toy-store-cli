import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { ToysActions } from '../../store/toys/toys.actions'
import { IToy } from './toy'

@Injectable()
export class ToysService {

  private loaded = false

  constructor(
    private http: HttpClient,
    private toysActions: ToysActions
  ) {}

  public getToys = () => {
    if (this.loaded) {
      return Observable.of([])
    }

    return this.http.get<IToy[]>('api/toys.json')
      .do(res => {
        this.toysActions.addToys(res)
        this.loaded = true
      })
      .catch((err, caught) => Observable.throw(err.statusText))
  }
}
