# KIST Park Admin Dashboard

## Project Overview
KIST Park Admin Dashboard is a web-based application designed to manage administrative tasks efficiently. Built with modern web technologies, this project leverages a scalable architecture and user-friendly UI components.

## Tech Stack
- **Database:** MongoDB
- **Backend:** Express.js (Node.js)
- **Frontend:** React.js
- **State Management:** React Query (via Refine.dev)
- **UI Library:** Material UI

## System Architecture
The project follows a client-server architecture with the following structure:
```
/kist-park-admin-dashboard
│── /client  (Frontend application)
│── /server  (Backend API)
│── README.md
│── package.json
```
- **Client:** Handles user interactions and UI rendering.
- **Server:** Manages API requests, database interactions, and authentication.

## Project Template
- **Refine.dev Version:** [3.xx.xx](https://refine.dev/docs/3.xx.xx/)

## Frontend UI
- **Material UI:** Provides a responsive and modern UI design.

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/kist-park-admin-dashboard.git
   cd kist-park-admin-dashboard
   ```

2. Install dependencies for both client and server:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

3. Run the development servers:
   ```bash
   cd client
   npm run dev
   ```
   ```bash
   cd server
   npm start
   ```
To build the client side for deployment:
```bash
cd client
npm run build
```

## Contributing
Contributions are welcome! Feel free to submit issues and pull requests.

## License
This project is licensed under the MIT License.
