# TODO LIST WEB APPLICATION
#### Video Demo:  https://youtu.be/FPamoYts12s
#### Description:
    A todo list web application
![layout](/screenshots/todo_s&l.JPG)
### Why a todo list app?
    Every day we're swamped with pile of tasks, from simple chores to important meetings. So they're getting out of hand. In order to help manage this issue I've build a todo list web application.

### Features:
- Every body can create their own account and manage their tasks.
- Each task has a colored dot next to it to indicate its type (Event, Work, Education, Chore)
- **Journey section**:
in this section you will see a overview of how you've progressed.
It shows you how many tasks you've successfully finished and how many you've failed.
- **Filtering tasks:**
You can use filtering buttons to filter through your tasks based on their types.
- **Previous tasks**: you can display or hide past task using the show / hide previous tasks button.
- Passwords are saved as hashes for security.
- **Responsiveness:** application is responsive to the device width.

### What I've used:
- HTML, CSS, JavaScript and React for Front-End
- Python with Flask for Backend
- sqlite for Database
- Git with GitHub for source control
- Figma for UI design

#### dependancies for backend:

```python
from flask import Flask, jsonify, request
from flask_cors import CORS
from cs50 import SQL
from werkzeug.security import check_password_hash, generate_password_hash
from datetime import datetime
```

#### dependancies for Front-End:
- react-router-dom
- styled-components
- react-icons

#### Database schema:

```
CREATE TABLE users (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
username TEXT NOT NULL,
hash TEXT NOT NULL
);
CREATE TABLE sqlite_sequence(name,seq);
CREATE UNIQUE INDEX username ON users (username);
CREATE TABLE tasks (
    id INTEGER NOT NULL,
    desc TEXT NOT NULL,
    date NUMBER,
    type TEXT NOT NULL,
    state TEXT NOT NULL,
    idx INTEGER PRIMARY KEY AUTOINCREMENT
);
```

### Project structure:

```
📦todo
 ┣ 📂.git
 ┣ 📂node_modules
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┃ ┣ 📜logo192.png
 ┃ ┣ 📜logo512.png
 ┃ ┣ 📜manifest.json
 ┃ ┗ 📜robots.txt
 ┣ 📂screenshots
 ┃ ┣ 📜journey_0.JPG
 ┃ ┣ 📜journey_1.JPG
 ┃ ┣ 📜journey_2.JPG
 ┃ ┗ 📜todo_s&l.JPG
 ┣ 📂server
 ┃ ┣ 📂__pycache__
 ┃ ┣ 📜app.py
 ┃ ┗ 📜todo.db
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜Filters.js
 ┃ ┃ ┣ 📜Modal.js
 ┃ ┃ ┣ 📜Navbar.js
 ┃ ┃ ┣ 📜Sidebar.js
 ┃ ┃ ┣ 📜Stats.js
 ┃ ┃ ┗ 📜Task.js
 ┃ ┣ 📂context
 ┃ ┃ ┣ 📜context.js
 ┃ ┃ ┗ 📜mockData.js
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜Error.js
 ┃ ┃ ┣ 📜Home.js
 ┃ ┃ ┣ 📜Login.js
 ┃ ┃ ┣ 📜PrivateRoute.js
 ┃ ┃ ┗ 📜Register.js
 ┃ ┣ 📜App.js
 ┃ ┣ 📜index.css
 ┃ ┗ 📜index.js
 ┣ 📜.gitignore
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md
```

### User Journey:

#### Create an account
![registry](/screenshots/journey_0.JPG)

#### Add tasks using the plus button at the bottom of the page
![adding_tasks](/screenshots/journey_1.JPG)

#### You can check the checkbox if you've finished the task or remove it using the trash icon.
![done_or_delete](/screenshots/journey_2.JPG)


## Thank You