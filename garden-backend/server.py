from flask import Flask, jsonify
from waitress import serve #similar to Express.js in node
from config import Config
app = Flask(__name__) #makes a flask app
app.config.from_object(Config)
@app.route('/') # home page
def home():
    return jsonify({"message":"Backend is up!"})

if __name__ == '__main__':
    # production
    if app.config['FLASK_ENV'] == 'production':
        serve(app, host='0.0.0.0', port=8080)
    else:
        # development
        app.run(debug=True)




