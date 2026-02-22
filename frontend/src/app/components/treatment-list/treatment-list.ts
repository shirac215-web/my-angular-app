import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. ייבוא השירות
import { FormsModule } from '@angular/forms';
import { TreatmentService } from '../../services/treatment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-treatment-list',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './treatment-list.html',
  styleUrl: './treatment-list.css',
})
export class TreatmentList implements OnInit {
  treatments: any[] = [];

  // 2. הזרקת ה-ChangeDetectorRef ב-Constructor
  constructor(
    private treatmentService: TreatmentService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit() {
    this.treatmentService.getTreatments().subscribe({
      next: (data) => {
        this.treatments = data;
        console.log('הנתונים הגיעו!', data);
        
        // 3. הפקודה הקריטית: רענון התצוגה מיד עם הגעת הנתונים
        this.cdr.detectChanges(); 
      },
      error: (err) => console.error(err)
    });
  }
}