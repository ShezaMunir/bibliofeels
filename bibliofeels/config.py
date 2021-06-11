import os

# ===================================================================================
#                                 CONSTANTS
# ===================================================================================
BASE_DIR = os.path.abspath(os.path.dirname(__file__))

DB_URI = 'sqlite:///' + os.path.join(BASE_DIR, 'db.sqlite')
APP_NAME = "bibliofeels"
MAX_RESPONSE_PER_QUERY = 5
