from flask import Flask, request
from authentication import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/user/create", methods=['POST'])
def createUser():
    obj = request.get_json()
    return newUserSignUp(obj["email"], obj["password"])

@app.route("/user/login", methods=['POST'])
def loginUser():
    obj = request.get_json()
    return userLogin(obj["email"], obj["password"])

@app.route("/user/get/<userId>", methods=["GET"])
def getUser(userId):
    return getUserData(userId)

@app.route("/get/movie-list", methods=["GET"])
def fetchMovies():
    return getData()

if __name__ == "__main__":
    app.run(debug=True)
