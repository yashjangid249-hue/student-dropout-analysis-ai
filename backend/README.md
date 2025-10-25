# Backend - Student Dropout Analysis System

## Overview
This is the Spring Boot backend for the Student Dropout Analysis System. It provides RESTful APIs for managing student data, performing dropout analysis, and generating predictive insights.

## Technology Stack
- **Framework:** Spring Boot 3.x
- **Language:** Java 17+
- **Database:** MySQL 8.x
- **ORM:** Hibernate/JPA
- **Build Tool:** Maven
- **API Documentation:** SpringDoc OpenAPI

## Project Structure

```
backend/
├── src/
│   ├── main/
│   │   ├── java/com/dropoutanalysis/
│   │   │   ├── controller/     # REST API Controllers
│   │   │   ├── model/          # Entity classes
│   │   │   ├── repository/     # JPA Repositories
│   │   │   ├── service/        # Business logic services
│   │   │   └── config/         # Configuration classes
│   │   └── resources/
│   │       ├── application.properties  # Application configuration
│   │       └── data.sql               # Initial data (optional)
│   └── test/                   # Unit and integration tests
├── pom.xml                      # Maven dependencies
└── README.md                    # This file
```

## API Modules

### 1. Student Management Module
**Package:** `controller/StudentController.java`

**Endpoints:**
- `POST /api/students/upload` - Upload student data (CSV/Excel)
- `GET /api/students` - Retrieve all students with pagination
- `GET /api/students/{id}` - Get student by ID
- `PUT /api/students/{id}` - Update student information
- `DELETE /api/students/{id}` - Delete student record
- `POST /api/students/validate` - Validate uploaded data

**Features:**
- CSV/Excel file parsing
- Data validation and error reporting
- Bulk insert operations
- Student profile management

### 2. Dashboard & Analytics Module
**Package:** `controller/DashboardController.java`

**Endpoints:**
- `GET /api/dashboard/statistics` - Overall dropout statistics
- `GET /api/dashboard/school-wise` - School-wise analysis
- `GET /api/dashboard/area-wise` - Area-wise analysis
- `GET /api/dashboard/gender-wise` - Gender-wise analysis
- `GET /api/dashboard/caste-wise` - Caste-wise analysis
- `GET /api/dashboard/age-wise` - Age/Standard-wise analysis

**Features:**
- Aggregated statistics
- Filter and search capabilities
- Custom date range queries
- Export data in multiple formats

### 3. Risk Prediction Module
**Package:** `controller/PredictionController.java`

**Endpoints:**
- `POST /api/prediction/analyze` - Predict dropout risk for a student
- `GET /api/prediction/high-risk` - Get list of high-risk students
- `GET /api/prediction/explanation/{id}` - Get prediction explanation
- `GET /api/prediction/recommendations/{id}` - Get intervention recommendations

**Features:**
- ML model integration
- Risk score calculation
- Explainable AI components
- Actionable recommendations

### 4. Report Generation Module
**Package:** `controller/ReportController.java`

**Endpoints:**
- `POST /api/reports/generate` - Generate custom reports
- `GET /api/reports/download/{id}` - Download generated report
- `GET /api/reports/templates` - Get available report templates

**Features:**
- PDF/Excel report generation
- Custom report builder
- Scheduled reports
- Report history tracking

### 5. User Management & Authentication Module
**Package:** `controller/AuthController.java`, `controller/UserController.java`

**Endpoints:**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login (JWT token generation)
- `POST /api/auth/logout` - User logout
- `GET /api/users` - Get all users (Admin only)
- `PUT /api/users/{id}/role` - Update user role (Admin only)

**Features:**
- JWT-based authentication
- Role-based access control (Admin, Analyst, Viewer)
- Password encryption
- Session management

## Database Models

### Core Entities (in `model/` package):
- **Student** - Student demographic and academic information
- **School** - School details
- **Dropout** - Dropout records and reasons
- **Prediction** - Prediction results and risk scores
- **User** - System user accounts
- **Role** - User roles and permissions
- **Report** - Generated report metadata

## Configuration

### Database Configuration
Edit `src/main/resources/application.properties`:

```properties
# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/dropout_analysis_db
spring.datasource.username=your_username
spring.datasource.password=your_password

# JPA/Hibernate Configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

# Server Configuration
server.port=8080

# JWT Configuration
jwt.secret=your_secret_key
jwt.expiration=86400000
```

## Setup Instructions

### Prerequisites
- Java 17 or higher
- Maven 3.6+
- MySQL 8.x
- Git

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yashjangid249-hue/student-dropout-analysis-ai.git
   cd student-dropout-analysis-ai/backend
   ```

2. **Configure Database:**
   - Create MySQL database:
     ```sql
     CREATE DATABASE dropout_analysis_db;
     ```
   - Update `application.properties` with your database credentials

3. **Build the project:**
   ```bash
   mvn clean install
   ```

4. **Run the application:**
   ```bash
   mvn spring-boot:run
   ```

5. **Access the API:**
   - Base URL: `http://localhost:8080`
   - API Documentation: `http://localhost:8080/swagger-ui.html`

## Development Guidelines

### Code Organization
- **Controllers:** Handle HTTP requests and responses
- **Services:** Contain business logic
- **Repositories:** Data access layer
- **Models:** Entity definitions
- **Config:** Application configuration and security

### Best Practices
- Follow RESTful API conventions
- Use DTOs for request/response objects
- Implement proper exception handling
- Add validation annotations
- Write unit tests for services
- Document APIs using OpenAPI annotations

## Testing

Run tests using:
```bash
mvn test
```

## API Testing

Use Postman collection available in `/docs/API_Documentation.md`

## Dependencies

Key Maven dependencies:
- Spring Boot Starter Web
- Spring Boot Starter Data JPA
- Spring Boot Starter Security
- Spring Boot Starter Validation
- MySQL Connector
- JWT Library
- Apache POI (Excel processing)
- OpenCSV (CSV processing)
- Lombok
- SpringDoc OpenAPI

## Future Enhancements
- Machine Learning model integration
- Real-time analytics with WebSocket
- Advanced caching with Redis
- Microservices architecture
- Docker containerization

## Contributing

Please follow the project's coding standards and submit pull requests for any enhancements.

## License

This project is part of an academic system development initiative.

## Contact

For queries, please contact the development team through the GitHub repository.
