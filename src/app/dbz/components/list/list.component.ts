import { Component, Input, EventEmitter, Output } from '@angular/core';
import { v4 as uuid} from 'uuid'
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  // onDeleteCharacter (i: number):void {
  //   this.onDelete.emit(i);
  // }

  deleteCharacterById (id?: string ) {
    if(!id) return;
    this.onDelete.emit(id);
  }


}


