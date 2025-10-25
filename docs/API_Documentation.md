# API Documentation

## Student Dropout Analysis System - REST API Reference

**Version:** 1.0.0  
**Base URL:** `http://localhost:8080/api`  
**Authentication:** JWT Bearer Token

---

## Table of Contents

1. [Authentication](#authentication)
2. [Student Management](#student-management)
3. [Dashboard & Analytics](#dashboard--analytics)
4. [Risk Prediction](#risk-prediction)
5. [User Management](#user-management)
6. [Data Upload & Validation](#data-upload--validation)
7. [Reports](#reports)
8. [Error Codes](#error-codes)

---

## Authentication

### Login

**Endpoint:** `POST /auth/login`

**Request:**
```json
{
  "username": "admin@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "type": "Bearer",
  "expiresIn": 86400,
  "user": {
    "id": 1,
    "username": "admin@example.com",
    "role": "ADMIN"
  }
}
```

### Register

**Endpoint:** `POST /auth/register`

**Request:**
```json
{
  "username": "user@example.com",
  "password": "SecurePass123",
  "role": "ANALYST"
}
```

---

## Student Management

### Get All Students

**Endpoint:** `GET /students`

**Query Parameters:**
- `page` (int): Page number (default: 0)
- `size` (int): Page size (default: 20)
- `sort` (string): Sort field (default: "id")

**Response:**
```json
{
  "content": [
    {
      "id": 1,
      "name": "John Doe",
      "age": 15,
      "gender": "Male",
      "caste": "General",
      "area": "Urban",
      "schoolId": 101,
      "standard": 10,
      "status": "ACTIVE"
    }
  ],
  "totalElements": 1500,
  "totalPages": 75,
  "currentPage": 0
}
```

### Get Student by ID

**Endpoint:** `GET /students/{id}`

**Response:**
```json
{
  "id": 1,
  "name": "John Doe",
  "age": 15,
  "gender": "Male",
  "caste": "General",
  "area": "Urban",
  "schoolId": 101,
  "standard": 10,
  "status": "ACTIVE",
  "riskScore": 0.23
}
```

### Create Student

**Endpoint:** `POST /students`

**Request:**
```json
{
  "name": "Jane Smith",
  "age": 14,
  "gender": "Female",
  "caste": "OBC",
  "area": "Rural",
  "schoolId": 102,
  "standard": 9
}
```

### Update Student

**Endpoint:** `PUT /students/{id}`

### Delete Student

**Endpoint:** `DELETE /students/{id}`

---

## Dashboard & Analytics

### Get Dashboard Summary

**Endpoint:** `GET /dashboard/summary`

**Response:**
```json
{
  "totalStudents": 5000,
  "activeStudents": 4200,
  "droppedOut": 800,
  "atRisk": 450,
  "dropoutRate": 16.0
}
```

### Get School-wise Statistics

**Endpoint:** `GET /dashboard/school-wise`

**Response:**
```json
[
  {
    "schoolId": 101,
    "schoolName": "ABC High School",
    "totalStudents": 500,
    "dropouts": 45,
    "dropoutRate": 9.0
  }
]
```

### Get Gender-wise Statistics

**Endpoint:** `GET /dashboard/gender-wise`

### Get Area-wise Statistics

**Endpoint:** `GET /dashboard/area-wise`

### Get Caste-wise Statistics

**Endpoint:** `GET /dashboard/caste-wise`

### Get Age/Standard-wise Statistics

**Endpoint:** `GET /dashboard/standard-wise`

---

## Risk Prediction

### Predict Dropout Risk

**Endpoint:** `POST /predict/risk`

**Request:**
```json
{
  "studentId": 123,
  "features": {
    "age": 15,
    "gender": "Male",
    "caste": "SC",
    "area": "Rural",
    "standard": 10,
    "attendance": 65.5,
    "parentIncome": 50000
  }
}
```

**Response:**
```json
{
  "studentId": 123,
  "riskScore": 0.78,
  "riskLevel": "HIGH",
  "factors": [
    {
      "factor": "Low Attendance",
      "impact": 0.35
    },
    {
      "factor": "Rural Area",
      "impact": 0.25
    },
    {
      "factor": "Low Parent Income",
      "impact": 0.18
    }
  ],
  "recommendations": [
    "Improve attendance monitoring",
    "Provide financial assistance",
    "Counseling support"
  ]
}
```

### Get Risk Analytics

**Endpoint:** `GET /predict/analytics`

**Response:**
```json
{
  "highRisk": 120,
  "mediumRisk": 230,
  "lowRisk": 3850,
  "distribution": {
    "byGender": {...},
    "byArea": {...},
    "byCaste": {...}
  }
}
```

---

## User Management

### Get All Users (Admin Only)

**Endpoint:** `GET /users`

### Create User (Admin Only)

**Endpoint:** `POST /users`

### Update User Role

**Endpoint:** `PUT /users/{id}/role`

### Delete User

**Endpoint:** `DELETE /users/{id}`

---

## Data Upload & Validation

### Upload CSV File

**Endpoint:** `POST /data/upload`

**Content-Type:** `multipart/form-data`

**Request:**
- File parameter: `file` (CSV or Excel)

**Response:**
```json
{
  "uploadId": "uuid-1234",
  "fileName": "students_data.csv",
  "totalRecords": 500,
  "validRecords": 485,
  "invalidRecords": 15,
  "status": "COMPLETED",
  "errors": [
    {
      "row": 12,
      "field": "age",
      "message": "Age must be between 5 and 18"
    }
  ]
}
```

### Validate Data

**Endpoint:** `POST /data/validate`

### Get Upload Status

**Endpoint:** `GET /data/upload/{uploadId}`

---

## Reports

### Generate Report

**Endpoint:** `POST /reports/generate`

**Request:**
```json
{
  "reportType": "DROPOUT_ANALYSIS",
  "filters": {
    "schoolId": 101,
    "dateFrom": "2024-01-01",
    "dateTo": "2024-12-31"
  },
  "format": "PDF"
}
```

### Download Report

**Endpoint:** `GET /reports/{reportId}/download`

### Get Report List

**Endpoint:** `GET /reports`

---

## Error Codes

| Code | Message | Description |
|------|---------|-------------|
| 200 | Success | Request successful |
| 201 | Created | Resource created |
| 400 | Bad Request | Invalid request parameters |
| 401 | Unauthorized | Authentication required |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource not found |
| 409 | Conflict | Resource already exists |
| 422 | Unprocessable Entity | Validation failed |
| 500 | Internal Server Error | Server error |

### Error Response Format

```json
{
  "timestamp": "2025-10-26T00:34:00.000+00:00",
  "status": 400,
  "error": "Bad Request",
  "message": "Invalid student data",
  "path": "/api/students"
}
```

---

## Rate Limiting

- **Rate Limit:** 100 requests per minute per user
- **Header:** `X-RateLimit-Remaining`

---

## Notes

1. All endpoints except `/auth/login` and `/auth/register` require JWT authentication
2. Include token in header: `Authorization: Bearer <token>`
3. All timestamps are in ISO 8601 format
4. Pagination uses zero-based indexing
5. Maximum upload file size: 10MB

---

*Last Updated: October 26, 2025*
