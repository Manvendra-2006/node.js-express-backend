# 🚀 Node.js & Express Backend Learning Repository

A comprehensive learning repository covering **Node.js fundamentals** and **Express.js backend development** — from basic server setup to MVC architecture, middleware, template engines, and more.

---

## 📁 Folder Structure

```
node.js-express-backend/
│
├── express.js-learning/               # Express.js concepts & examples
│   │
│   ├── 📂 File/                       # Static file serving
│   │   ├── 404.html                   # Custom 404 error page
│   │   ├── Home.html                  # Homepage HTML
│   │   ├── login.html                 # Login page HTML
│   │   └── style.css                  # Stylesheet
│   │
│   ├── 📂 Form/                       # Form handling in Express
│   │   ├── Form.js                    # Form setup & routes
│   │   ├── Home.js                    # Home route handler
│   │   ├── Login.js                   # Login route handler
│   │   └── Submit.js                  # Form submission handler
│   │
│   ├── 📂 MVC/                        # MVC Architecture pattern
│   │   ├── Controller/
│   │   │   └── userController.js      # User controller logic
│   │   ├── Models/
│   │   │   └── userData.js            # User data model
│   │   ├── views/
│   │   │   └── user.ejs               # User view template
│   │   ├── MVC.txt                    # MVC concept notes
│   │   └── index.js                   # MVC entry point
│   │
│   ├── 📂 Middleware/                 # Express Middleware examples
│   │   ├── Built-In-Middleware.js     # express.json, express.static etc.
│   │   ├── ErrorHandling.js           # Custom error handling middleware
│   │   ├── ExternalMiddleware.js      # Third-party middleware (morgan etc.)
│   │   ├── MiddleWareExample.js       # Basic middleware examples
│   │   ├── RouteMiddleware.js         # Route-level middleware
│   │   └── index.js                   # Middleware entry point
│   │
│   ├── 📂 TemplateEngine/             # EJS Template Engine
│   │   ├── views/
│   │   │   ├── Home.ejs               # Home page template
│   │   │   ├── Login.html             # Login page
│   │   │   ├── array.ejs              # Array rendering template
│   │   │   └── submit.ejs             # Form submit template
│   │   ├── Array.js                   # Rendering arrays with EJS
│   │   ├── Basics.js                  # EJS basics
│   │   └── Form.js                    # Template form handling
│   │
│   ├── CSSinExpress.js                # Serving CSS with Express
│   ├── Render404.js                   # Custom 404 rendering
│   ├── RenderHtml.js                  # HTML rendering with Express
│   ├── index.js                       # Main Express entry point
│   ├── package.json
│   └── package-lock.json
│
├── node.js-learning/                  # Node.js core concepts
│   │
│   ├── 📂 Component/                  # Reusable Node components
│   │   ├── root.js                    # Root component
│   │   ├── userDataSubmitted.js       # User data handler
│   │   └── userForm.js                # User form component
│   │
│   ├── 📂 CoreModule/                 # Built-in Node.js modules
│   │   ├── OsModule.js                # OS module usage
│   │   ├── PathModule.js              # Path module usage
│   │   ├── fs.js                      # File System module
│   │   └── queryString.js             # Query String module
│   │
│   ├── 📂 ExternalModule/             # npm packages
│   │   ├── colors.js                  # colors package demo
│   │   └── nodemon.js                 # nodemon usage
│   │
│   ├── 📂 GlobalConstants/            # Node.js global variables
│   │   └── constant.js                # __dirname, __filename etc.
│   │
│   ├── 📂 MiniProject/                # Mini project
│   │   └── website.js                 # Simple Node.js website
│   │
│   ├── 📂 file/                       # Static HTML files
│   │   ├── About.html
│   │   ├── Contact.html
│   │   ├── Header.html
│   │   ├── Home.html
│   │   ├── Service.html
│   │   ├── hello.txt
│   │   └── style.css
│   │
│   ├── 📂 html/                       # HTML data files
│   │   └── data.html
│   │
│   ├── API.js                         # API creation basics
│   ├── BasicForm.js                   # Basic form in Node.js
│   ├── HandleForm.js                  # Form data handling
│   ├── Request.js                     # HTTP Request handling
│   ├── Response.js                    # HTTP Response handling
│   ├── SyncVSAsync.js                 # Synchronous vs Asynchronous
│   ├── app.js                         # App entry point
│   ├── basic-server.js                # Basic HTTP server
│   ├── basics.js                      # Node.js fundamentals
│   ├── command-line-input.js          # CLI input handling
│   ├── fsCrud.js                      # File System CRUD operations
│   ├── package.json
│   └── package-lock.json
│
└── MongoDB-Connection/                # MongoDB & Mongoose integration
    │
    ├── 📂 Mongoose/                   # Mongoose ODM examples
    │   ├── Model/
    │   │   └── StudentModel.js        # Mongoose student model
    │   ├── Schema/
    │   │   └── StudentSchema.js       # Mongoose student schema
    │   ├── DeleteAPI.js               # DELETE route with Mongoose
    │   ├── GETAPI.js                  # GET route with Mongoose
    │   ├── Mongoose.js                # Mongoose connection setup
    │   ├── POSTAPI.js                 # POST route with Mongoose
    │   └── PUTAPI.js                  # PUT route with Mongoose
    │
    ├── 📂 MongoDB/                    # MongoDB with EJS UI (Full CRUD)
    │   ├── views/
    │   │   ├── form.ejs               # Form to add/edit student data
    │   │   └── home.ejs               # Homepage listing all records
    │   ├── DELETEAPI.js               # DELETE route handler
    │   ├── DataUI.js                  # Render data to UI
    │   ├── EDITAPI.js                 # Edit/update route handler
    │   ├── GETAPI.js                  # GET route handler
    │   ├── POSTAPI.js                 # POST route handler
    │   ├── RenderFormData.js          # Render form with existing data
    │   └── index.js                   # MongoDB section entry point
    │
    ├── .gitignore
    ├── package-lock.json
    └── package.json
---

## 📚 Topics Covered

### 🟢 Node.js (`node.js-learning/`)
| Topic | File(s) |
|-------|---------|
| Basic Server Setup | `basic-server.js`, `basics.js` |
| HTTP Request & Response | `Request.js`, `Response.js` |
| File System (CRUD) | `fsCrud.js`, `CoreModule/fs.js` |
| Sync vs Async | `SyncVSAsync.js` |
| Core Modules | `OsModule.js`, `PathModule.js`, `queryString.js` |
| Global Constants | `GlobalConstants/constant.js` |
| CLI Input | `command-line-input.js` |
| External Packages | `ExternalModule/colors.js` |
| API Basics | `API.js` |
| Form Handling | `BasicForm.js`, `HandleForm.js` |
| Mini Project | `MiniProject/website.js` |

### 🔵 Express.js (`express.js-learning/`)
| Topic | File(s) |
|-------|---------|
| Render HTML & Static Files | `RenderHtml.js`, `CSSinExpress.js` |
| Custom 404 Page | `Render404.js`, `File/404.html` |
| Form Handling | `Form/` |
| Middleware (Built-in) | `Middleware/Built-In-Middleware.js` |
| Middleware (External) | `Middleware/ExternalMiddleware.js` |
| Error Handling Middleware | `Middleware/ErrorHandling.js` |
| Route-Level Middleware | `Middleware/RouteMiddleware.js` |
| Template Engine (EJS) | `TemplateEngine/` |
| MVC Architecture | `MVC/` |

### 🍃 MongoDB (`MongoDB-Connection/`)
| Topic | File(s) |
|-------|---------|
| Mongoose Connection | `Mongoose/Mongoose.js` |
| Schema Definition | `Mongoose/Schema/StudentSchema.js` |
| Model Creation | `Mongoose/Model/StudentModel.js` |
| GET API | `Mongoose/GETAPI.js` |
| POST API | `Mongoose/POSTAPI.js` |
| PUT API | `Mongoose/PUTAPI.js` |
| DELETE API | `Mongoose/DeleteAPI.js` |
| GET API (UI) | `MongoDB/GETAPI.js` |
| POST API (UI) | `MongoDB/POSTAPI.js` |
| Edit API (UI) | `MongoDB/EDITAPI.js` |
| DELETE API (UI) | `MongoDB/DELETEAPI.js` |
| Render Form Data | `MongoDB/RenderFormData.js` |
| Data UI Render | `MongoDB/DataUI.js` |
| EJS Views | `MongoDB/views/home.ejs`, `MongoDB/views/form.ejs` |
| Entry Point (UI) | `MongoDB/index.js` |
---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/Manvendra-2006/node.js-express-backend.git

# Navigate to Express learning folder
cd node.js-express-backend/express.js-learning
npm install

# OR navigate to Node.js learning folder
cd node.js-express-backend/node.js-learning
npm install

# OR navigate to MongoDB connection folder
cd node.js-express-backend/MongoDB-Connection
npm install
```

### Running Examples

```bash
# Run any specific file
node filename.js

# Example: Run the main Express server
node index.js

# Example: Run basic Node.js server
node basic-server.js

# Example: Run Mongoose connection
node Mongoose/Mongoose.js
```

---

## 🧰 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Template Engine:** EJS
- **Architecture:** MVC Pattern
- **Dev Tools:** Nodemon

---
