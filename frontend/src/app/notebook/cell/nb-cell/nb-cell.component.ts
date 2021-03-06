import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NotebookCellTypeEnum } from '../../notebook.models';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NbCellComponent),
  multi: true,
};

/**
 * @see https://javascript-conference.com/blog/angular-reactive-forms-building-custom-form-controls/
 */
@Component({
  selector: 'app-nb-cell',
  templateUrl: './nb-cell.component.html',
  styleUrls: ['./nb-cell.component.scss'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class NbCellComponent implements OnInit, ControlValueAccessor {
  public value;
  protected backup: string;
  protected disabled: boolean;
  public cellStatus = 'result';
  public cellType = NotebookCellTypeEnum.MARKDOWN;
  public NotebookCellTypeEnum = NotebookCellTypeEnum;

  protected onChanged: any = () => { };
  protected onTouched: any = () => { };

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSourceCtrlEnter(event: KeyboardEvent) {
    this.cellStatus = 'result';
    this.backup = '';
  }

  onSourceEsc(event: KeyboardEvent) {
    this.cellStatus = 'result';
    this.writeValue(this.backup);
    this.backup = '';
  }

  onResultDblClick(event) {
    this.cellStatus = 'edit';
    this.backup = this.value;
  }

}
