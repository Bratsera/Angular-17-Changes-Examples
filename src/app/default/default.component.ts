import { CommonModule, NgFor } from '@angular/common';
import { Component, DestroyRef, OnDestroy, OnInit, inject } from '@angular/core';
import { AutoIncrementService } from '../services/auto-increment.service';
import { Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  standalone: true,
  imports: [NgFor, CommonModule],
})
export class DefaultComponent implements OnInit, OnDestroy{
  private destroyRef = inject(DestroyRef);
  incrementServiceSub = new Subscription;
  constructor (private incrementService: AutoIncrementService){
        // new
        //this.incrementService.autoIncrementSub.pipe(takeUntilDestroyed()).subscribe(counter => this.autoCounter = counter)
  }
  ngOnInit(): void {
    // old
    this.incrementServiceSub = this.incrementService.autoIncrementSub.subscribe( counter => this.autoCounter = counter)   
    // new outside constructor
    //this.incrementService.autoIncrementSub.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(counter => this.autoCounter = counter)
  }
  ngOnDestroy(): void {
    this.incrementServiceSub.unsubscribe()
  }
  actions: string[] = [];
  counter = 0;
  autoCounter = 0;

  increment() {
    this.counter++;
    this.actions.push('INCREMENT');
  }

  decrement() {
    this.counter--;
    this.actions.push('DECREMENT');
  }

}
