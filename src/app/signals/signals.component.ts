import { NgFor } from '@angular/common';
import { Component, signal, computed, effect, inject } from '@angular/core';
import { toSignal} from '@angular/core/rxjs-interop'
import { AutoIncrementService } from '../services/auto-increment.service';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2 );
  injectService = inject(AutoIncrementService)
  autoCounter = toSignal(this.injectService.autoIncrementSub //, {initialValue: 0}
    ) // still developer preview

  constructor() {
    effect(() => console.log(this.counter())); // still developer preview
  }

  increment() {
    // this.counter.update((oldCounter) => oldCounter + 1);
    this.counter.set(this.counter() + 1);
    this.actions.update((oldActions) => [...oldActions, 'INCREMENT']);
    //this.actions.mutate((oldActions) => oldActions.push('INCREMENT')); //Removed in Angular 17
  }

  decrement() {
    this.counter.update((oldCounter) => oldCounter - 1);
    this.actions.update((oldActions) => [...oldActions, 'DECREMENT']);
  }

}
