import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
  // זו הכתובת שבדקנו קודם בדפדפן והיא עבדה
  private apiUrl = '/api/treatments';

  constructor(private http: HttpClient) { }

  // הפונקציה הזו "הולכת" לשרת ומביאה את הנתונים
  getTreatments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  //הוספת טיפול
addTreatment(treatment: any): Observable<any> {
  return this.http.post('/api/treatments', treatment);
}
//הוספת תור
addAppointment(appointment: any): Observable<any> {
  return this.http.post('/api/appointments', appointment);
}
//שליפת כל התורים
getAppointments(): Observable<any[]> {
  return this.http.get<any[]>('/api/appointments');
}

//פונקציית מחיקת תור
// deleteAppointment(id: string): Observable<any> {
//   return this.http.delete(`/api/appointments/${id}`);
// }
getBranches(): Observable<any[]> {
  return this.http.get<any[]>('/api/branches');
}
bookAppointment(id: string, name: string, phone: string, available: boolean): Observable<any> {
    const body = { 
      id: id, 
      customerName: name, 
      phone: phone, 
      isAvailable: available 
    };
    // שליחת בקשת POST לעדכון הנתונים בשרת
    return this.http.post(`/api/appointments/update-status`, body);
  }

}
