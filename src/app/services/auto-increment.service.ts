import { Injectable } from '@angular/core';
import { Subject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoIncrementService {


  autoIncrementSub: Subject<number> = new Subject()
  counter = 0	
  constructor() {
    interval(2000).subscribe(
   () => {
      this.counter += 1
      this.autoIncrementSub.next( this.counter)
    })
   }

}
