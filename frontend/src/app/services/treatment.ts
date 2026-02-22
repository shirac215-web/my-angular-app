import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
  // זו הכתובת שבדקנו קודם בדפדפן והיא עבדה
  private apiUrl = 'http://localhost:3000/api/treatments';

  constructor(private http: HttpClient) { }

  // הפונקציה הזו "הולכת" לשרת ומביאה את הנתונים
  getTreatments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  //הוספת טיפול
addTreatment(treatment: any): Observable<any> {
  return this.http.post('http://localhost:3000/api/treatments', treatment);
}
//הוספת תור
addAppointment(appointment: any): Observable<any> {
  return this.http.post('http://localhost:3000/api/appointments', appointment);
}
//שליפת כל התורים
getAppointments(): Observable<any[]> {
  return this.http.get<any[]>('http://localhost:3000/api/appointments');
}

//פונקציית מחיקת תור
// deleteAppointment(id: string): Observable<any> {
//   return this.http.delete(`http://localhost:3000/api/appointments/${id}`);
// }
getBranches(): Observable<any[]> {
  return this.http.get<any[]>('http://localhost:3000/api/branches');
}
bookAppointment(id: string, name: string, phone: string, available: boolean): Observable<any> {
    const body = { 
      id: id, 
      customerName: name, 
      phone: phone, 
      isAvailable: available 
    };
    // שליחת בקשת POST לעדכון הנתונים בשרת
    return this.http.post(`http://localhost:3000/api/appointments/update-status`, body);
  }

}
