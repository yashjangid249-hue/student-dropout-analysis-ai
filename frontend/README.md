# Student Dropout Analysis System - Frontend

## Overview
This is the React.js frontend for the Student Dropout Analysis System. It provides an interactive user interface for analyzing student dropout patterns, uploading data, viewing risk predictions, and generating reports.

## Technology Stack
- **React.js** - UI framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API communication
- **Chart.js / Recharts** - Data visualization and charting
- **CSS3** - Styling and responsive design

## Project Structure

```
frontend/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── DataTable.jsx
│   │   ├── ChartComponent.jsx
│   │   ├── FilterPanel.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/            # Page-level components
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── DataUpload.jsx
│   │   ├── RiskAnalysis.jsx
│   │   ├── ReportBuilder.jsx
│   │   └── StudentManagement.jsx
│   │
│   ├── services/         # API service layers
│   │   ├── api.js               # Axios configuration
│   │   ├── authService.js       # Authentication APIs
│   │   ├── studentService.js    # Student data APIs
│   │   ├── reportService.js     # Report generation APIs
│   │   └── riskService.js       # Risk prediction APIs
│   │
│   ├── utils/            # Utility functions
│   │   ├── validators.js        # Input validation
│   │   ├── formatters.js        # Data formatting
│   │   ├── constants.js         # App constants
│   │   └── helpers.js           # Helper functions
│   │
│   ├── App.js            # Main application component
│   ├── App.css           # Global styles
│   └── index.js          # Application entry point
│
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── .env                  # Environment variables
└── README.md             # This file
```

## Features

### 1. Authentication & Authorization
- **Login Page**: Secure JWT-based authentication
- **Role-based Access Control**: Admin, Data Analyst, and Viewer roles
- **Protected Routes**: Restrict access based on user permissions

### 2. Dashboard
- **Interactive Main Dashboard**: Overview of key metrics and statistics
- **Multi-dimensional Analysis**:
  - School-wise dropout statistics
  - Area-wise distribution
  - Gender-wise analysis
  - Caste-wise breakdown
  - Age/Standard-wise trends
- **Visual Charts**: Bar charts, pie charts, line graphs using Chart.js/Recharts
- **Filter and Search**: Dynamic filtering by multiple parameters

### 3. Data Upload Module
- **CSV/Excel Import**: Upload student data files
- **Data Validation**: Real-time validation and error detection
- **Upload Summary**: Display statistics and validation results
- **Error Handling**: Clear error messages for invalid data

### 4. Risk Analysis Dashboard
- **Dropout Risk Scoring**: View AI-predicted dropout probabilities
- **Explainable AI Interface**: Understand reasons behind each prediction
- **Actionable Recommendations**: Suggested interventions for high-risk students
- **Risk Visualization**: Color-coded risk levels (Low, Medium, High, Critical)
- **Detailed Student Profiles**: Drill-down into individual student data

### 5. Student Management
- **Data Table View**: Paginated, sortable student records
- **Search and Filter**: Find students by multiple criteria
- **Edit Profiles**: Update student information
- **Bulk Operations**: Export, delete, or update multiple records

### 6. Report Builder
- **Custom Report Generation**: Select parameters and generate reports
- **Export Options**: Download as PDF, Excel, or CSV
- **Print Functionality**: Print-friendly report layouts
- **Share Reports**: Email or share report links
- **Scheduled Reports**: (Future feature)

### 7. Filters and Search
- **Advanced Filtering**: Multiple filter combinations
- **Date Range Selection**: Filter by enrollment or dropout dates
- **Category Filters**: School, area, gender, caste, standard
- **Save Filter Presets**: Store frequently used filter combinations

## Component Architecture

### Reusable Components

#### Header Component
- Application title and branding
- User profile dropdown
- Logout functionality

#### Sidebar Component
- Navigation menu
- Role-based menu items
- Active route highlighting

#### DataTable Component
- Reusable table with pagination
- Sorting and filtering capabilities
- Custom column rendering

#### ChartComponent
- Wrapper for Chart.js/Recharts
- Support for multiple chart types
- Responsive and interactive

#### FilterPanel Component
- Dynamic filter generation
- Multi-select dropdowns
- Date range pickers
- Apply/Reset filter actions

## API Integration

### Service Layer Architecture
All API calls are abstracted into service modules for clean separation of concerns:

```javascript
// Example: studentService.js
import api from './api';

export const getAllStudents = () => api.get('/students');
export const getStudentById = (id) => api.get(`/students/${id}`);
export const uploadStudentData = (formData) => api.post('/students/upload', formData);
export const updateStudent = (id, data) => api.put(`/students/${id}`, data);
export const deleteStudent = (id) => api.delete(`/students/${id}`);
```

### Axios Configuration (api.js)
- Base URL configuration
- Request/Response interceptors
- JWT token attachment
- Error handling

## Environment Variables

Create a `.env` file in the frontend root:

```env
REACT_APP_API_BASE_URL=http://localhost:8080/api
REACT_APP_ENVIRONMENT=development
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   - Copy `.env.example` to `.env`
   - Update API base URL if needed

4. **Start the development server**:
   ```bash
   npm start
   ```

5. **Access the application**:
   - Open browser at `http://localhost:3000`

## Available Scripts

### `npm start`
Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.
Optimizes the build for best performance.

### `npm run eject`
**Note: This is a one-way operation!**
Ejects from Create React App configuration.

## Dependencies

### Core Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.14.0",
  "axios": "^1.4.0",
  "chart.js": "^4.3.0",
  "react-chartjs-2": "^5.2.0"
}
```

### Development Dependencies
```json
{
  "@testing-library/react": "^14.0.0",
  "@testing-library/jest-dom": "^5.16.5",
  "eslint": "^8.44.0"
}
```

## Styling Approach

- **CSS Modules** or **Regular CSS** for component styling
- **Responsive Design**: Mobile-first approach
- **Color Scheme**: Professional and accessible color palette
- **Typography**: Clear, readable fonts

## State Management

- **React Context API**: For global state (authentication, user info)
- **Component State (useState)**: For local component state
- **Future Enhancement**: Redux or Zustand for complex state management

## Routing Structure

```javascript
/                          → Login Page
/dashboard                 → Main Dashboard
/upload                    → Data Upload Page
/students                  → Student Management
/risk-analysis             → Risk Analysis Dashboard
/reports                   → Report Builder
/profile                   → User Profile
```

## Authentication Flow

1. User submits credentials on Login page
2. Frontend sends POST request to `/api/auth/login`
3. Backend validates and returns JWT token
4. Token stored in localStorage or sessionStorage
5. Token attached to all subsequent API requests
6. Protected routes check for valid token
7. Logout clears token and redirects to login

## Data Visualization

### Chart Types Used
- **Bar Charts**: School-wise, area-wise comparisons
- **Pie Charts**: Gender, caste distribution
- **Line Charts**: Trends over time
- **Donut Charts**: Category breakdowns
- **Stacked Charts**: Multi-dimensional analysis

### Chart Libraries
- **Chart.js**: Primary charting library
- **Recharts**: Alternative for complex visualizations
- **React-chartjs-2**: React wrapper for Chart.js

## Error Handling

- **API Errors**: Display user-friendly error messages
- **Form Validation**: Real-time client-side validation
- **Network Errors**: Show connectivity issues
- **404 Pages**: Custom not found page
- **Error Boundaries**: Catch and handle React errors

## Performance Optimization

- **Code Splitting**: Lazy load routes and components
- **Memoization**: Use React.memo for expensive components
- **Debouncing**: For search and filter inputs
- **Pagination**: Limit data fetching
- **Caching**: Cache API responses when appropriate

## Security Considerations

- **XSS Protection**: Sanitize user inputs
- **CSRF Protection**: Token-based authentication
- **Secure Storage**: Avoid storing sensitive data in localStorage
- **HTTPS**: Enforce secure connections in production
- **Input Validation**: Validate all user inputs

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing Strategy

- **Unit Tests**: Test individual components
- **Integration Tests**: Test component interactions
- **E2E Tests**: Test complete user flows
- **Testing Library**: React Testing Library

## Deployment

### Production Build
```bash
npm run build
```

### Deployment Options
- **Netlify**: Static hosting
- **Vercel**: Serverless deployment
- **AWS S3 + CloudFront**: Scalable hosting
- **Docker**: Containerized deployment

## Future Enhancements

- [ ] Progressive Web App (PWA) support
- [ ] Dark mode toggle
- [ ] Multi-language support (i18n)
- [ ] Advanced analytics dashboard
- [ ] Real-time notifications
- [ ] Mobile app version (React Native)
- [ ] Offline data access
- [ ] Enhanced data visualization
- [ ] AI chatbot for insights

## Troubleshooting

### Common Issues

**Issue**: `npm start` fails
- **Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install`

**Issue**: API calls fail
- **Solution**: Check `.env` file for correct API base URL

**Issue**: CORS errors
- **Solution**: Ensure backend has proper CORS configuration

**Issue**: Charts not rendering
- **Solution**: Verify Chart.js installation and data format

## Contributing

1. Create a feature branch
2. Make your changes
3. Write/update tests
4. Submit a pull request

## License

This project is part of an academic/research initiative.

## Support

For issues and questions, please contact the development team or create an issue in the repository.

---

**Note**: This is a frontend-only README. For backend documentation, refer to `backend/README.md`. For overall project documentation, see the root `README.md`.
