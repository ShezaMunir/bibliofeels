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

## To run the server 
- Windows
```
set FLASK_APP=emo_reads.setup.py:app
flask run
```

- Linux
```bash
export FLASK_APP=emo_reads.setup.py:app
flask run
```

### Recommendations can be found at the "/recommend" route

Example: http://localhost:5000/recommend
