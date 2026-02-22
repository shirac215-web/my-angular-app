use('beauty_salon_db');

// הכנסת רשימת טיפולים
db.getCollection('treatments').insertMany([
  { "name": "עיצוב גבות", "price": 60, "duration": 20, "description": "עיצוב מקצועי" },
  { "name": "מניקור לק גל", "price": 120, "duration": 45, "description": "מניקור רוסי" },
  { "name": "טיפול פנים", "price": 300, "duration": 60, "description": "ניקוי עמוק" }
]);