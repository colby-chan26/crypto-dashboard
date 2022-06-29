from flask import Flask, request, send_from_directory, jsonify
import urllib.request, json
import os 

app = Flask(__name__, static_folder="./build", static_url_path="")

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/getInfoCurrency', methods=['GET'])
def getCryptoCurrency():
    url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

    response = urllib.request.urlopen(url)
    data = response.read()
    dict = json.loads(data)

    return jsonify(dict)

@app.route('/getInfoExchange', methods=['GET'])
def getCryptoCurrency():
    url = "https://api.coingecko.com/api/v3/exchanges?per_page=250"

    response = urllib.request.urlopen(url)
    data = response.read()
    dict = json.loads(data)

    return jsonify(dict)

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(host="0.0.0.0")