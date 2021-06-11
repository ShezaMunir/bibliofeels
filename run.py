import os

from bibliofeels.config import BASE_DIR
from bibliofeels.setup import connex_app

# ===================================================================================
#                               ADD SWAGGER APIs
# ===================================================================================
connex_app.add_api(os.path.join(BASE_DIR, 'spec.yaml'))
app = connex_app.app


if __name__ == '__main__':
    app.run(debug=True, port=5000)
