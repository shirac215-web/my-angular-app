import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {

  // 1. רשימת התמונות שלך (ודאי שהשמות תואמים לקבצים בתיקייה)
  backgroundImages: string[] = [
    //'images/image4.jpg',
    // 'images/image10.jpg',
    'images/image11.jpg'
  ];

  // 2. משתנה שמחזיק את התמונה הנוכחית
  currentImage: string = this.backgroundImages[0];
  
  // משתנה עזר לטיימר
  private intervalId: any;

  ngOnInit() {
    // 3. הפעלת הטיימר כשהדף עולה
    this.startImageSlider();
  }

  ngOnDestroy() {
    // 4. ניקוי הטיימר כשהמשתמש יוצא מהדף (מונע תקלות זיכרון)
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startImageSlider() {
    let index = 0;
    // החלפת תמונה כל 4 שניות (4000 מילישניות)
    this.intervalId = setInterval(() => {
      index = (index + 1) % this.backgroundImages.length;
      this.currentImage = this.backgroundImages[index];
    }, 4000);
  }

}
