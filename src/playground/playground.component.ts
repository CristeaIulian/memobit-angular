import { Component } from '@angular/core';
import { SelectedOption } from '@memobit/components/select/types';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
})
export class PlaygroundComponent {
  public formGroup = new FormGroup({
    myCheckboxes: new FormControl(),
  });

  ngOnInit(): void {
    // this.formGroup.controls.myCheckboxes.setValue('karate');
  }

  // public items = [
  //   { id: 1, label: 'ninja' },
  //   { id: 2, label: 'kung fu' },
  //   { id: 3, label: 'karate' },
  //   { id: 4, label: 'taekwondo' },
  // ];

  public items = ['ninja', 'kung fu', 'karate', 'taekwondo'];

  public groupLabel = 'When to eat';

  public myCheckboxes = 'my-test';

  public onSelectedItems = (value: SelectedOption): void => {
    console.log('value');
  };

  public onAddNewItem = (value: string): void => {
    console.log('new item', value);
  };
}
