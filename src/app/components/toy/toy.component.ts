import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output
} from '@angular/core'
import { IToy } from '../../services/toys/toy'

@Component({
  selector: 'app-toy',
  templateUrl: './toy.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToyComponent {
  @Input() toy: IToy
  @Output() selectRequest = new EventEmitter()

  select = toy => {
    this.selectRequest.emit(toy)
  }
}
