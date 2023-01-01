from flask import Flask


app = Flask(__name__)


# Users API route

@app.route("/user-list")
def users():
    return {"users": ["Varun", "Vishal", "Vaibhav"]}
