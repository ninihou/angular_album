import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-undoable-counter',
  imports: [],
  templateUrl: './undoable-counter.component.html',
  styleUrl: './undoable-counter.component.scss',
})
export class UndoableCounterComponent {
  count = signal(0);
  history = signal<number[]>([]);//display
  undoStack = signal<number[]>([]); 
  redoStack = signal<number[]>([]);

  change(amount: number) {
    
    //console.log('Current count:', this.count());
    this.history.update(h => [...h, this.count()]);
    // this.undoStack.update(s=>[...s, this.count()]);
    console.log('History:', this.history()); // save history
    this.count.update(c => c + amount);
    this.undoStack.set([]);
  }
  undo() { // brings back undo, not repeat the prev move
    const stack = this.history();
    console.log(stack)
    const prev = stack.at(-1);
    console.log('Current prev', prev);
    if (prev !== undefined) {
      this.redoStack.update(r => [...r, this.count()]);
                              // restore count
      this.history.update(h => h.slice(0, -1));      // remove last from history
    this.count.set(prev);  
    }
  }

  redo() {
    const prev = this.redoStack().at(-1);
  if (prev !== undefined) {
    this.history.update(h => [...h, this.count()]); // save current for undo
    this.count.set(prev);
    this.redoStack.update(r => r.slice(0, -1));
  }
  }

}
