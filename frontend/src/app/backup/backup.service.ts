import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackupService {
  constructor( private http:HttpClient ) { }

  createBackup() {
    return this.http.get('http://localhost:3000/backup');
  }
}
