import os
import secrets
import connexion
import jinja2
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

from bibliofeels.config import BASE_DIR, DB_URI, APP_NAME

# ===================================================================================
#                              SETUP FLASK APP
# ===================================================================================
connex_app = connexion.App(APP_NAME, specification_dir=BASE_DIR)
app = connex_app.app
app.config['SQLALCHEMY_DATABASE_URI'] = DB_URI
app.config['SECRET_KEY'] = secrets.token_hex(32)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True

# set up custom template loader
my_loader = jinja2.ChoiceLoader([
        app.jinja_loader,
        jinja2.FileSystemLoader([os.path.join(BASE_DIR, "..", "front-end", "public"),]),
        ])
app.jinja_loader = my_loader
# ===================================================================================
#                              INITIALISE OBJECTS
# ===================================================================================
db = SQLAlchemy(app)
ma = Marshmallow(app)

