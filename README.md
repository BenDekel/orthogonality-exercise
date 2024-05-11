# Development environment
In order to run application use:
      `docker-compose up`

API url = http://localhost:3000
Frontend url = http://localhost:3001

## API Documentation

### Businesses

#### Retrieve All Businesses

- **URL:** `/businesses`
- **Method:** `GET`
- **Description:** Retrieve a list of all businesses.
- **Response:** Array of `Business` objects.

#### Retrieve a Business

- **URL:** `/businesses/:id`
- **Method:** `GET`
- **Description:** Retrieve details of a specific business.
- **Parameters:** `id` - ID of the business.
- **Response:** `Business` object.

#### Create a Business

- **URL:** `/businesses`
- **Method:** `POST`
- **Description:** Create a new business.
- **Request Body:** `CreateBusinessDto`
- **Response:** Created `Business` object.

#### Update a Business

- **URL:** `/businesses/:id`
- **Method:** `PATCH`
- **Description:** Update details of a specific business.
- **Parameters:** `id` - ID of the business.
- **Request Body:** `UpdateBusinessDto`
- **Response:** Updated `Business` object.

#### Delete a Business

- **URL:** `/businesses/:id`
- **Method:** `DELETE`
- **Description:** Delete a specific business.
- **Parameters:** `id` - ID of the business.

### Staff

#### Retrieve Staff by Business

- **URL:** `/staff/:businessId`
- **Method:** `GET`
- **Description:** Retrieve staff members associated with a specific business.
- **Parameters:** `businessId` - ID of the business.
- **Response:** Array of `Staff` objects.

#### Create Staff

- **URL:** `/staff/:businessId`
- **Method:** `POST`
- **Description:** Add a new staff member to a business.
- **Parameters:** `businessId` - ID of the business.
- **Request Body:** `CreateStaffDto`
- **Response:** Created `Staff` object.

#### Update Staff

- **URL:** `/staff/:businessId/:staffId`
- **Method:** `PATCH`
- **Description:** Update details of a specific staff member.
- **Parameters:** `businessId` - ID of the business, `staffId` - ID of the staff member.
- **Request Body:** `UpdateStaffDto`
- **Response:** Updated `Staff` object.

#### Remove Staff

- **URL:** `/staff/:businessId/:staffId`
- **Method:** `DELETE`
- **Description:** Remove a specific staff member from a business.
- **Parameters:** `businessId` - ID of the business, `staffId` - ID of the staff member.

### Object Structures

```typescript
interface Business {
  id: number;
  name: string;
  location: string;
  type?: BusinessType;
}

interface CreateBusinessDto {
  name: string;
  location: string;
  type?: BusinessType;
}

interface UpdateBusinessDto {
  name?: string;
  location?: string;
  type?: BusinessType;
}

interface Staff {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  position: StaffPosition;
  phoneNumber?: string;
}

interface CreateStaffDto {
  email: string;
  firstName: string;
  lastName: string;
  position: StaffPosition;
  phoneNumber?: string;
}

interface UpdateStaffDto {
  email?: string;
  firstName?: string;
  lastName?: string;
  position?: StaffPosition;
  phoneNumber?: string;
}
```

## Database Schema Design

### Business Entity

| Column   | Type        | Nullable | Description     |
|----------|-------------|----------|-----------------|
| id       | INTEGER     | No       | Primary Key     |
| name     | VARCHAR     | No       | Name of the business |
| location | VARCHAR     | No       | Location of the business |
| type     | ENUM        | Yes      | Type of the business (Bar, Restaurant, Club, Hotel, Cafe) |

### Staff Entity

| Column      | Type        | Nullable | Description         |
|-------------|-------------|----------|---------------------|
| id          | INTEGER     | No       | Primary Key         |
| email       | VARCHAR     | No       | Email of the staff  |
| firstName   | VARCHAR     | No       | First name of the staff |
| lastName    | VARCHAR     | No       | Last name of the staff |
| business_id | INTEGER     | No       | Foreign Key referencing Business |
| position    | ENUM        | No       | Position of the staff |
| phoneNumber | VARCHAR     | Yes      | Phone number of the staff |


# CI/CD and Deployment Plan

## CI/CD Pipeline Overview
- **Source Control Management**: Use Git for version control.
- **Continuous Integration (CI)**: Automatically build and test code on each push.
- **Continuous Deployment (CD)**: Automate deployment to production after passing CI tests.

## CI/CD Tools
- **CI Service**: GitLab CI/CD
- **Container Registry**: Docker Hub, GitHub Container Registry, or AWS ECR.
- **Deployment Targets**: AWS, Azure, or self-hosted servers.

## CI Pipeline
### Backend
- Run linting and static code analysis.
- Run unit tests and integration tests.
- Build Docker image for the backend.
- Push Docker image to the container registry.

### Frontend
- Run linting and static code analysis.
- Run unit tests and integration tests.
- Build Docker image for the frontend.
- Push Docker image to the container registry.

## CD Pipeline
### Backend Deployment
- Pull latest Docker image for the backend.
- Deploy backend Docker container to production environment.
- Run database migrations and backend configuration.

### Frontend Deployment
- Pull latest Docker image for the frontend.
- Deploy frontend Docker container to production environment.
- Set up routing and configure web server.

## Manual Approval
- Optionally, set up manual approval step before deploying to production.

## Monitoring and Rollback
- Implement monitoring and logging for both backend and frontend.
- Define rollback procedures in case of deployment failures.
