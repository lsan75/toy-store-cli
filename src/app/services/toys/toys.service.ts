import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import { ToysActions } from '../../store/toys/toys.actions'

@Injectable()
export class ToysService {

  constructor(
    private http: Http,
    private toysActions: ToysActions
  ) {}

  public getToys = () => {
    return this.http.get('/src/api/toys.json')
      .map(res => res.json())
      .do(res => this.toysActions.addToys(res))
      .catch((err, caught) => Observable.throw(err.statusText))
  }
}
