import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-special-offer',
  template: `
    <div class="offer-card">
      <div class="offer-content">
        <h3>🎁 מבצע מיוחד: {{ treatmentName }}</h3>
        <p>שרייני תור עכשיו וקבלי **{{ discount }}% הנחה**!</p>
        <button (click)="applyOffer()">למימוש ההטבה לחצי כאן</button>
      </div>
    </div>
  `,
  styles: [`
    .offer-card { background: linear-gradient(135deg, #d4af37, #b8962d); color: white; padding: 20px; border-radius: 15px; text-align: center; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
    button { background: white; color: #d4af37; border: none; padding: 10px 20px; border-radius: 20px; font-weight: bold; cursor: pointer; transition: 0.3s; }
    button:hover { background: #333; color: white; }
  `]
})
export class SpecialOffer {
  @Input() treatmentName: string = ''; // מקבל את שם הטיפול מההורה
  @Input() discount: number = 0;       // מקבל את אחוז ההנחה מההורה
  @Output() offerClaimed = new EventEmitter<string>(); // מודיע להורה שההטבה נבחרה

  applyOffer() {
    this.offerClaimed.emit(this.treatmentName); // שולח את שם הטיפול חזרה
  }
}
