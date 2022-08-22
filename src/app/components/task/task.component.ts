import { Component, Input, Output, EventEmitter } from '@angular/core';
import {task } from "../task";


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class taskComponent {

  editable = false;

  @Input() item!: task;
  @Input() newItem!: string;
  @Output() remove = new EventEmitter<task>();

  saveItem(description: string, category: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
    this.item.category = category;
  }
}
