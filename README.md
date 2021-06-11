# BiblioFeels

[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![made-with-python](https://img.shields.io/badge/Made%20with-Python-1f425f.svg)](https://www.python.org/)
[![PyPI status](https://img.shields.io/pypi/status/ansicolortags.svg)](https://pypi.python.org/pypi/ansicolortags/)
[![PyPI license](https://img.shields.io/pypi/l/ansicolortags.svg)](https://pypi.python.org/pypi/ansicolortags/)
[![GitHub release](https://img.shields.io/github/release/Naereen/StrapDown.js.svg)](https://GitHub.com/Naereen/StrapDown.js/releases/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


**We believe books are for everyone and for every emotion!**

Looking for something deep and reflective? We have a book for you!

Want somehting that can help you escape reality? We have a book for you!

Or maybe something spooky? Guess what, We have a book for you!

BiblioFeels aims to recommend the best book to the best person(YES YOU!), along with relevant details and all you need to do is click on a button and let us know how you want to feel. It is that simple!

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
```cmd
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
