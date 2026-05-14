/*import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('vite-angular');
}*/

import { Component } from '@angular/core';
import { TaskFormComponent } from '../components/task-form.component';
import { TaskTableComponent } from '../components/task-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFormComponent, TaskTableComponent],
  template: `
    <main class="min-h-screen bg-gray-100 p-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-gray-800 mb-8">
          Gerenciador de Atividades
        </h1>
        <app-task-form />
        <app-task-table />
      </div>
    </main>
  `
})
export class App {}
