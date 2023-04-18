import { Component } from '@angular/core';
import { BackupService } from './backup.service';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.css']
})
export class BackupComponent {
  constructor( private api:BackupService) {}
  exportBackup() {
    this.api.createBackup().subscribe();
  }
}
