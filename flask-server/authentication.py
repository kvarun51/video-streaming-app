import pyrebase

config = {
    "apiKey": "AIzaSyA2gjRBD2W9zHopf8Wh0km778psyxPsqBI",
    "authDomain": "video-streaming-app-28fa7.firebaseapp.com",
    "projectId": "video-streaming-app-28fa7",
    "storageBucket": "video-streaming-app-28fa7.appspot.com",
    "messagingSenderId": "593370661514",
    "appId": "1:593370661514:web:d8c8833d126f11ff1ee373",
    "measurementId": "G-4FSREWEDX9",
    "databaseURL": "https://video-streaming-app-28fa7-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()

db = firebase.database()


def newUserSignUp(email, password):
    user = auth.create_user_with_email_and_password(email, password)
    print(user)
    return user

def userLogin(email, password):
    user = auth.sign_in_with_email_and_password(email, password)
    return user

def getUserData(token):
    return auth.get_account_info(token)

def getData():
    return db.child("movie_list").get().val()

# sign_in_with_email_and_password
# auth.send_email_verification(user['idToken'])
# auth.send_password_reset_email("email")
# auth.get_account_info(user['idToken'])
# user = auth.refresh(user['refreshToken'])

# db.child("users").child("Morty").update({"name": "Mortiest Morty"})
