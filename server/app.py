from flask import Flask, jsonify, request
from flask_cors import CORS
from cs50 import SQL
from werkzeug.security import check_password_hash, generate_password_hash
from datetime import datetime

app = Flask(__name__)
CORS(app)

db = SQL("sqlite:///todo.db")


@app.route("/")
def index():
    return "<p>Just checking</p>"


@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    registered = db.execute("SELECT * FROM users WHERE username = ?", username)

    if len(registered) != 0:
        return jsonify({"message": "Username already taken"}), 400

    hashed_password = generate_password_hash(password)
    user_id = db.execute(
        "INSERT INTO users (username, hash) VALUES (?, ?)", username, hashed_password
    )

    return (
        jsonify(
            {"message": "Registration successful", "id": user_id, "username": username}
        ),
        200,
    )


@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    registered = db.execute("SELECT * FROM users WHERE username = ?", username)

    if len(registered) != 1:
        return jsonify({"message": "Invalid username"}), 400

    original_password = registered[0]["hash"]

    if not check_password_hash(original_password, password):
        return jsonify({"message": "Invalid password"}), 401

    user_id = registered[0]["id"]
    return (
        jsonify({"message": "login successful", "id": user_id, "username": username}),
        200,
    )


@app.route("/addTask", methods=["POST"])
def addTask():
    data = request.get_json()
    user_id = data.get("id")
    desc = data.get("desc")
    date = data.get("date")
    type = data.get("type")
    state = "todo"

    if type not in ['event', 'education', 'work', 'chores']:
        return jsonify({
            'message': 'invalid input'
        }), 400

    db.execute(
        "INSERT INTO tasks (id, desc, date, type, state) VALUES (?, ?, ?, ?, ?)",
        user_id,
        desc,
        date,
        type,
        state,
    )
    return jsonify({"message": "Task added successfully"}), 200


@app.route("/deleteTask", methods=["POST"])
def deleteTask():
    data = request.get_json()
    user_id = data.get("id")
    task_idx = data.get("idx")

    db.execute("DELETE FROM tasks WHERE id = ? AND idx = ?", user_id, task_idx)

    return jsonify({
        'message': 'task deleted successfull'
    }), 200


@app.route("/tasks", methods=["POST"])
def tasks():
    data = request.get_json()
    user_id = data.get("id")

    todoList = db.execute("SELECT * FROM tasks WHERE id = ?", user_id)

    return jsonify({
        'message': 'success',
        'tasks': todoList
    }), 200


@app.route("/taskState", methods=["POST"])
def taskState():
    data = request.get_json()
    user_id = data.get("id")
    task_idx = data.get("idx")
    task_state = data.get("state")

    if task_state == 'todo':
        db.execute("UPDATE tasks SET state = 'done' WHERE id = ? AND idx = ?", user_id, task_idx)
    else:
        db.execute("UPDATE tasks SET state = 'todo' WHERE id = ? AND idx = ?", user_id, task_idx)

    return jsonify({
        'message': 'state changed successfully'
    }), 200


@app.route("/calculateStats", methods=["POST"])
def calculateStats():
    data = request.get_json()
    tasks = data.get("tasks")

    eventsDone = 0
    eventsFailed = 0
    worksDone = 0
    worksFailed = 0
    educationsDone = 0
    educationsFailed = 0
    choresDone = 0
    choresFailed = 0

    for task in tasks:
        if task["state"] == 'done':
            if task["type"] == 'event':
                eventsDone += 1
            if task["type"] == 'work':
                worksDone += 1
            if task["type"] == 'education':
                educationsDone += 1
            if task["type"] == 'chores':
                choresDone += 1

        else:
            today = datetime.now()
            y, m, d = task["date"].split('-')
            taskDate = datetime(int(y), int(m), int(d) + 1)

            if today > taskDate:
                if task["state"] == 'todo':
                    if task["type"] == 'event':
                        eventsFailed += 1
                    if task["type"] == 'work':
                        worksFailed += 1
                    if task["type"] == 'education':
                        educationsFailed += 1
                    if task["type"] == 'chores':
                        choresFailed += 1


    return jsonify({
        'message': 'stats sent successfully',
        'eventsDone': eventsDone,
        'eventsFailed': eventsFailed,
        'worksDone': worksDone,
        'worksFailed': worksFailed,
        'educationsDone': educationsDone,
        'educationsFailed': educationsFailed,
        'choresDone': choresDone,
        'choresFailed': choresFailed,
    }), 200