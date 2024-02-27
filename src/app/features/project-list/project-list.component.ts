import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects = [];

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects = data.projects;
      },
      error: (err) => console.error(err),
    });
  }

  // Inside ProjectListComponent class

  onCreateNewProject(): void {
    // Navigate to the project creation form or modal
    // Example: this.router.navigate(['/projects/new']);
    // Or open a modal dialog for creating a new project
    this.router.navigate(['/projects/create']);

  }

  onSelectProject(projectNodeId: string): void {
    this.router.navigate(['/projects', projectNodeId]);
  }
}