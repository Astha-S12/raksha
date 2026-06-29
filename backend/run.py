from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

# Allow requests from the React frontend
CORS(app)

@app.route("/")
def home():
    return {
        "message": "Suraksha Backend Running"
    }

if __name__ == "__main__":
    app.run(debug=True)