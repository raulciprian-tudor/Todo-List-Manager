import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BEConnectionService } from '../services/beConnectionService.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private beConnectionService: BEConnectionService) {}


  createNewItem() {
    debugger
    this.beConnectionService.createNewTodoItem({
      title: 'New Item',
      description: 'New Description',
      isDone: false,
    });
  }
}
