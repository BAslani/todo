from flask import Flask, jsonify, request
from flask_cors import CORS
from cs50 import SQL
from werkzeug.security import check_password_hash, generate_password_hash

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
        print("this is running")
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

    db.execute(
        "INSERT INTO tasks (id, desc, date, type, state) VALUES (?, ?, ?, ?, ?)",
        user_id,
        desc,
        date,
        type,
        state,
    )
    return jsonify({"message": "Task added successfully"}), 200


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

