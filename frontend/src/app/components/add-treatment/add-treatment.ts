import { Component } from '@angular/core';
import { TreatmentService } from '../../services/treatment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-treatment',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-treatment.html',
  styleUrl: './add-treatment.css',
})
export class AddTreatment {

showSuccessToast: boolean = false;
constructor(private treatmentService: TreatmentService) {}

newTreatment = { name: '', description: '', price: 0, duration: '' };
  treatments: any;

addTreatment() {
  this.treatmentService.addTreatment(this.newTreatment).subscribe({
      next: (res) => {
        // 2. שינוי: במקום alert, אנחנו מפעילים את ההודעה המעוצבת
        this.showSuccessToast = true;

        // איפוס הטופס כדי שיהיה אפשר להוסיף טיפול חדש
        this.newTreatment = { name: '', description: '', price: 0, duration: '' };

        // 3. הוספה: טיימר שסוגר את ההודעה לבד אחרי 3 שניות
        setTimeout(() => {
          this.showSuccessToast = false;
        }, 3000);

        console.log('הטיפול נוסף בהצלחה!', res);
      },
      error: (err) => {
        console.error('שגיאה בהוספת טיפול:', err);
      }
    });
}

  
}
