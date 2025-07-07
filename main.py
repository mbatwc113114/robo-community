from flask import Flask, request, jsonify, render_template
import firebase_admin
from firebase_admin import credentials, db

app = Flask(__name__)

# --- Firebase Admin SDK Initialization ---
# IMPORTANT: Replace 'path/to/your/serviceAccountKey.json' with the actual path
# to the JSON file you downloaded from the Firebase console.
try:
    

    cred = credentials.Certificate(data)
    firebase_admin.initialize_app(cred, {
        'databaseURL': 'https://robotics-community-default-rtdb.asia-southeast1.firebasedatabase.app'
    })
    print("Firebase Admin SDK initialized successfully!")
except Exception as e:
    print(f"Error initializing Firebase Admin SDK: {e}")
   

# Get a reference to the database service
ref = db.reference('/') # This refers to the root of your database

@app.route('/')
def index():
    """
    Renders the home page.
    """
    return render_template('home.html')






if __name__ == '__main__':
    app.run(debug=True)