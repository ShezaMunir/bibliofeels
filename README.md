# OrientationHackathon

## Setup Instructions

- Clone this repo
```bash
git clone https://github.com/ShezaMunir/OrientationHackathon.git
```

- Navigate to the project's root and start a virtual environment 
```bash
cd OrientationHackathon
```

- Create a virtual environment with python3
```bash
python3 -m virtualenv venv
```

- Activate the virtual environment with the following command:

  - Linux 
    ```bash
    source venv/bin/activate
    ```

  - Windows
    ```
    venv/Scripts/activate
    ```


- Install all dependencies
```bash
pip install -r requirements.txt
```

- Generate the database 
```bash
python3 data/generate_db.py
```

## To run the server 
- Windows
```cmd
set FLASK_APP=run.py:app
flask run
```

- Linux
```bash
export FLASK_APP=run.py:app
flask run
```

### Recommendations can be found at the "/recommend" route

Example: http://localhost:5000/recommend?emotions=happy,sad
