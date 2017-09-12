import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import { ToysActions } from '../../store/toys/toys.actions'

@Injectable()
export class ToysService {

  private loaded = false

  constructor(
    private http: Http,
    private toysActions: ToysActions
  ) {}

  public getToys = () => {
    if (this.loaded) {
      return Observable.of([])
    }

    return this.http.get('api/toys.json')
      .map(res => res.json())
      .do(res => {
        this.toysActions.addToys(res)
        this.loaded = true
      })
      .catch((err, caught) => Observable.throw(err.statusText))
  }
}
