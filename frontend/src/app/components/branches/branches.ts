import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { TreatmentService } from '../../services/treatment'; // וודאי שבשירות זה קיימת הפונקציה getBranches

@Component({
  selector: 'app-branches',
  //מה זה standalone
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branches.html',
  styleUrl: './branches.css',
})
export class Branches implements OnInit {
  // 1. הגדרת המערך כריק בהתחלה
  branches: any[] = [];

constructor(private cdr: ChangeDetectorRef,
      private treatmentService: TreatmentService,

){}
 

 ngOnInit() {
    this.treatmentService.getBranches().subscribe({
      next: (data) => {
        this.branches = data;
        console.log('נתוני סניפים!', data);
        
        // 3. הפקודה הקריטית: רענון התצוגה מיד עם הגעת הנתונים
        this.cdr.detectChanges(); 
      },
      error: (err) => console.error(err)
    });
  }
}