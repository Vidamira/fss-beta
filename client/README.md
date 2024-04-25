## FSS Beta - Faltstein Solutions Agency Website

This project houses the source code for the FSS Beta website, a React application serving as the official website for the Faltstein Solutions Agency.

### Tech Stack

* Frontend: React with Vite, Styled Components
* Backend: Node.js with Express
* Database: MongoDB with Mongoose
* Build Tool: Vite
* Other Dependencies: Axios, React Router DOM, p5.js, dotenv, bcrypt, cookie-parser, cors, jsonwebtoken, nodemon

### Project Setup

FSS Beta is divided into two main directories: `client` (frontend) and `server` (backend). You'll need to navigate into each directory to run the respective commands.

**Client Setup**

1. Clone the repository:

```
git clone https://github.com/Vidamira/fss-beta.git
```

2. Navigate to the `client` directory:

```
cd fss-beta/client
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm run dev
```

This will launch the frontend application in development mode, typically accessible at http://localhost:5173 (local host for vite).

**Server Setup**

1. Navigate to the `server` directory:

```
cd fss-beta/server
```

2. Install dependencies:

```
npm install
```

3. Start the development server:

```
npm start
```

This will launch the backend server at (http://localhost:8000). 



### Production Build

Build the project for production with the following command (executed from the project root directory):

```
npm run build
```

This creates an optimized production build in the `build` folder.

### Features

* User authentication with login for authorized admins.
* Admin dashboard for creating new users.
* Blog functionality with data stored in MongoDB using Mongoose.

### Code Structure

The codebase is divided into two main parts:

* `client`: Contains the React frontend code for the website.
* `server`: Contains the Node.js backend code for handling server-side logic and API requests.

### License

This project is licensed under the ISC License. See the LICENSE file for details.

### Contact

If you have any questions or issues, please create an issue on this repository.

### Additional Notes

* This project utilizes Styled Components for CSS-in-JS styling.
* The frontend uses React Router DOM for handling client-side routing.
* p5.js is included for interactive elements within the website, the animation is currently not used on the website.
* Environment variables are managed using the dotenv package.
