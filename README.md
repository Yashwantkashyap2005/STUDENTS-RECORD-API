# 🎓 STUDENTS RECORD API

A simple and powerful RESTful API for managing student records — built using **Node.js**, **Express**, and **MongoDB**.  
This API allows you to perform CRUD (Create, Read, Update, Delete) operations on student data efficiently.

---

## 🚀 Features

- Add new student records  
- View all students or a specific student by ID  
- Update student details  
- Delete student records  
- Built with Express.js and connected to MongoDB Atlas / Local MongoDB  
- JSON-based clean and simple REST endpoints  

---

## 🧰 Tech Stack

- **Node.js** — Backend runtime  
- **Express.js** — Web framework for API handling  
- **MongoDB / Mongoose** — Database and ODM  
- **Postman / Thunder Client** — For API testing  

---

## 📚 API Endpoints

| Method | Endpoint        | Description                |
| ------ | --------------- | -------------------------- |
| GET    | `/students`     | Get all students           |
| GET    | `/students/:id` | Get a single student by ID |
| POST   | `/students`     | Add a new student          |
| PUT    | `/students/:id` | Update student details     |
| DELETE | `/students/:id` | Delete a student           |

---

## 🧪 Example Request (POST /students)
  ```
    {
  "name": "Yashwant Kashyap",
  "rollNo": 101,
  "course": "B.Tech Computer Science",
  "email": "yash@example.com"
}
```
---

## ✅ Response:
```
{
  "message": "Student record added successfully!",
  "data": {
    "_id": "64e8a6b123...",
    "name": "Yashwant Kashyap",
    "rollNo": 101,
    "course": "B.Tech Computer Science",
    "email": "yash@example.com"
  }
}
```
---

## 🪪 License
This project is licensed under the MIT License — feel free to use and modify.

---

## 🧑‍💻 Author
Yashwant Kumar Kashyap
[GITHUB]()

      
