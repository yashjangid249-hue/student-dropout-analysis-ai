# Student Dropout Analysis System

## Overview
The **Student Dropout Analysis System** is a comprehensive full-stack application designed to help educational authorities identify and address the reasons behind student dropouts at the school level. This data-driven analytical system visualizes and predicts dropout patterns across multiple socio-economic and demographic parameters, enabling government bodies and educational institutions to take targeted corrective actions.

## Problem Statement
Despite the implementation of the Right to Education, the dropout ratio in schools remains high due to economic, social, and regional disparities. There is a critical need for a system that can help visualize and predict dropout patterns to support policy-making and interventions.

## Main Features

### 1. Student Profile Management
- Upload student data via CSV/Excel
- Data validation and error handling
- Summary dashboard showing upload statistics
- View and edit student records

### 2. Interactive Dashboard and Reporting
- Comprehensive dropout statistics visualization
- Multi-dimensional analysis:
  - School-wise analysis
  - Area-wise analysis
  - Gender-wise analysis
  - Caste-wise analysis
  - Age/Standard-wise analysis
- Advanced search and filter capabilities
- Custom report builder
- Graphical visualizations with charts
- Export, print, and share functionality

### 3. Risk Scoring and Prediction Module
- Predictive model for dropout risk assessment
- AI-driven risk scoring for individual students
- Explainable AI interface showing reasons behind predictions
- Actionable recommendations for high-risk cases
- Risk analytics dashboard

### 4. Admin and Access Control
- Role-based authentication (Admin, Data Analyst, Viewer)
- JWT-based secure login system
- User management and access restrictions
- Data access control based on user roles

### 5. Data Ingestion and Validation
- Automated data parsing from multiple sources
- Missing/invalid data detection and correction
- Data cleaning and preprocessing pipeline
- Error reporting for invalid entries

## Technology Stack

### Frontend
- **React.js** - Modern UI framework
- **Axios** - HTTP client for API calls
- **React Router** - Client-side routing
- **Chart.js/Recharts** - Data visualization

### Backend
- **Spring Boot** - REST API development
- **Spring Data JPA** - Database operations
- **Hibernate** - ORM framework
- **Spring Security** - Authentication & authorization

### Database
- **MySQL** - Relational database management

### Development Tools
- **Postman** - API testing
- **GitHub** - Version control
- **Maven** - Build automation

## Project Structure

```
student-dropout-analysis-ai/
│
├── backend/
│   ├── src/
│   │   ├── main/java/com/dropoutanalysis/
│   │   │   ├── controller/
│   │   │   ├── model/
│   │   │   ├── repository/
│   │   │   ├── service/
│   │   │   └── config/
│   │   ├── main/resources/
│   │   │   ├── application.properties
│   │   │   └── data.sql
│   ├── pom.xml
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   └── App.js
│   ├── package.json
│   ├── .env
│   └── README.md
│
├── docs/
│   ├── SRS_StudentDropoutAnalysis.docx
│   ├── UML_Diagrams/
│   │   ├── DFD.png
│   │   ├── ER_Diagram.png
│   │   ├── Class_Diagram.png
│   │   ├── UseCase_Diagram.png
│   │   └── Sequence_Diagram.png
│   ├── Project_Poster.pdf
│   └── API_Documentation.md
│
└── README.md
```

## Getting Started

### Prerequisites
- Java 17 or higher
- Node.js 16+ and npm
- MySQL 8.0+
- Git

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/yashjangid249-hue/student-dropout-analysis-ai.git
cd student-dropout-analysis-ai
```

#### 2. Backend Setup
```bash
cd backend
```

Configure MySQL database in `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/dropout_analysis
spring.datasource.username=your_username
spring.datasource.password=your_password
```

Build and run:
```bash
mvn clean install
mvn spring-boot:run
```

The backend API will be available at `http://localhost:8080`

#### 3. Frontend Setup
```bash
cd frontend
npm install
```

Configure API endpoint in `.env`:
```
REACT_APP_API_URL=http://localhost:8080/api
```

Start the development server:
```bash
npm start
```

The frontend will be available at `http://localhost:3000`

## Expected Outcomes

- Help stakeholders identify regions, schools, or demographic segments with high dropout risks
- Enable data-driven policy decisions
- Facilitate targeted interventions for at-risk students
- Provide actionable insights through predictive analytics
- Support evidence-based resource allocation

## Documentation

Comprehensive documentation is available in the `/docs` folder:
- Software Requirements Specification (SRS)
- UML Diagrams (DFD, ER, Class, Use Case, Sequence)
- API Documentation
- Project Poster

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is developed for educational purposes.

## Contact

For questions or suggestions, please open an issue on GitHub.
