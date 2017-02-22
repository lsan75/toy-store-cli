import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Rx'
import { IToy } from './toy'
import { ToysService } from './toys.service'

@Injectable()
export class ToysResolver {

  constructor(private toysService: ToysService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IToy[]> {
    return this.toysService.getToys()
  }
}
