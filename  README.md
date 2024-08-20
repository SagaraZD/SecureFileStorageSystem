# Secure File Storage System

## Project Description
This project is a web-based application designed to securely store and manage files. It includes features such as user authentication, file encryption, access control, and audit logging.

## Features
- Secure User Authentication (JWT)
- File Upload and Download with Encryption
- Role-Based Access Control (Admin, User)
- Audit Logs for Tracking File Access and Changes
- Data Encryption at Rest and in Transit
- API Integration for File Management

## Technologies Used
- **Frontend:** React.js, Bootstrap
- **Backend:** Node.js, Express.js, JWT for authentication
- **Database:** MongoDB with Mongoose
- **Security:** bcrypt for password hashing, SSL/TLS for secure communication

## Installation
1. **Clone the repository:**
    ```bash
    git clone [repository-url]
    ```
2. **Navigate to the project directory:**
    ```bash
    cd SecureFileStorageSystem
    ```
3. **Install dependencies for backend:**
    ```bash
    cd backend
    npm install
    ```
4. **Install dependencies for frontend:**
    ```bash
    cd ../frontend
    npm install
    ```
5. **Run the project:**
    - Start the backend server:
      ```bash
      cd backend
      npm start
      ```
    - Start the frontend development server:
      ```bash
      cd ../frontend
      npm start
      ```

## API Documentation
- **/api/auth/login**: POST - User login
- **/api/files**: GET - Fetch all files (Admin access only)
- **/api/files/upload**: POST - Upload a new file (User/Admin access)
- **/api/files/:id/download**: GET - Download a file by ID
- **/api/files/:id/delete**: DELETE - Delete a file by ID (Admin access only)

## Contributions
Feel free to fork this project, open issues, and submit pull requests.

## License
This project is licensed under the MIT License.
