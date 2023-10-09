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
    username = data.get('username')
    password = data.get('password')

    registered = db.execute("SELECT * FROM users WHERE username = ?", username)

    if len(registered) != 0:
        return jsonify({'message': 'Username already taken'}), 400

    hashed_password = generate_password_hash(password)
    db.execute("INSERT INTO users (username, hash) VALUES (?, ?)", username, hashed_password)

    return jsonify({'message': 'Registration successful'}), 200