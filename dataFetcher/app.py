from flask import Flask
from flask_cors import CORS

# configuration
from letsProfile import getProfile;

DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app)

# sanity check route
@app.route('/profile/<user_id>', methods=['GET'])
def get_profile(user_id):
    return getProfile(user_id);

if __name__ == '__main__':
    app.run()
