import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TreatmentService } from '../../services/treatment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpecialOffer } from '../special-offer/special-offer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'appointments',
  standalone: true, // ודאי שזה מוגדר אם את משתמשת ב-imports ישירים
  imports: [CommonModule, FormsModule, SpecialOffer],
  templateUrl: './appointments.html',
  styleUrl: './appointments.css',
})
export class Appointments implements OnInit {
  selectedTreatmentType: string = ''; 
  treatmentsList: any[] = []; 
  appointments: any[] = []; // כאן נשמרים כל התורים מהשרת
  clientName: string = '';
  showSuccessToast: boolean = false;
  
  currentDeal = {
    name: 'מבצע מיוחד',
    sale: 20
  };

  appointment = {
    treatmentName: '',
    customerName: '',
    phone: '',
    date: ''
  };

  constructor(
    private treatmentService: TreatmentService, 
    //מה זה CDR
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadAppointments();
    this.loadTreatments();
    this.route.queryParams.subscribe(params => {
      if (params['treatment']) {
        this.selectedTreatmentType = params['treatment'];
      }
    });
  }

  loadTreatments() {
    this.treatmentService.getTreatments().subscribe({
      next: (data) => {
        this.treatmentsList = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('שגיאה בטעינת הטיפולים:', err)
    });
  }

  loadAppointments() {
    this.treatmentService.getAppointments().subscribe(data => {
      this.appointments = data;
      this.cdr.detectChanges();
    });
  }
  
  // פונקציה שמחזירה את התורים המסוננים והממוינים לפי זמינות ושעה
  get filteredSlots() {
    if (!this.selectedTreatmentType) return [];
    
    return this.appointments
      .filter(slot => slot.treatmentType === this.selectedTreatmentType && slot.isAvailable === true)
      .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
  }

  // קביעת תור - משנה ל-FALSE
  bookSlot(slot: any) {
    if (!this.clientName || !this.appointment.phone) {
      alert('נא להזין שם מלא ומספר טלפון');
      return;
    }

    this.treatmentService.bookAppointment(slot._id, this.clientName, this.appointment.phone, false).subscribe({
      next: (res) => {
        this.showSuccessToast = true;
        this.loadAppointments(); // רענון הנתונים מהשרת
        
        this.clientName = '';
        this.appointment.phone = '';

        setTimeout(() => this.showSuccessToast = false, 3000);
      },
      error: (err) => alert('שגיאה בשמירת התור')
    });
  }

  // ביטול תור - משנה ל-TRUE
  cancelAppointment(id: string) {
    if (!id) return;

    if (confirm('האם את בטוחה שברצונך לבטל את התור?')) {
      // כאן אנחנו שולחים מחרוזת ריקה לשם ולטלפון, ו-TRUE לזמינות
      this.treatmentService.bookAppointment(id, '', '', true).subscribe({
        next: () => {
          this.loadAppointments(); 
          alert('התור בוטל והוחזר לרשימה');
        },
        error: (err) => alert('שגיאה בביטול התור')
      });
    }
  }

  // --- פונקציות עזר נוספות ---
  
  showAppointmentsList: boolean = false;
  toggleAppointmentsList() {
    this.showAppointmentsList = !this.showAppointmentsList;
    if (this.showAppointmentsList) this.loadAppointments();
  }

  reviews: any[] = [
    { name: 'אורלי', rating: 5, comment: 'שירות מעולה ומקצועי מאוד!' },
    { name: 'אפרת', rating: 4, comment: 'היה מצוין, אחזור שוב.' }
  ];

  newReview = { name: '', rating: 5, comment: '' };

  addReview() {
    if (this.newReview.name && this.newReview.comment) {
      //מה זה UNSHIFT
      this.reviews.unshift({ ...this.newReview });
      this.newReview = { name: '', rating: 5, comment: '' };
    }
  }

  handleSpecialOffer(name: any) {
    this.selectedTreatmentType = name;
    alert(`ההטבה הופעלה! עכשיו בחרי את השעה המתאימה לך.`);
  }
}