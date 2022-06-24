from flask import Flask, request, send_from_directory
import os 

app = Flask(__name__, static_folder="./build", static_url_path="")

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=False, port=os.environ.get('PORT', 80))