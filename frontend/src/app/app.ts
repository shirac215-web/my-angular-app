import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // חשוב להצגת רשימות
import { TreatmentService } from './services/treatment';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent  {
  
  
}