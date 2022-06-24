import urllib.request, json

def main():
    url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

    response = urllib.request.urlopen(url)
    data = response.read()
    dict = json.loads(data)

    print(dict)
    print("hello")
    return

main()
