from flask import Flask, render_template

app = Flask(__name__, template_folder='template')

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host='192.168.1.29', port='5000')