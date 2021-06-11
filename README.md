# BiblioFeels

[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![made-with-python](https://img.shields.io/badge/Made%20with-Python-1f425f.svg)](https://www.python.org/)
[![PyPI status](https://img.shields.io/pypi/status/ansicolortags.svg)](https://pypi.python.org/pypi/ansicolortags/)
[![PyPI license](https://img.shields.io/pypi/l/ansicolortags.svg)](https://pypi.python.org/pypi/ansicolortags/)
[![GitHub release](https://img.shields.io/github/release/Naereen/StrapDown.js.svg)](https://GitHub.com/Naereen/StrapDown.js/releases/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![BiblioFeels - For The Love of Books](assets/banner.png?raw=true "Title")


**We believe books are for everyone and for every emotion!**

Looking for something deep and reflective? We have a book for you!

Want somehting that can help you escape reality? We have a book for you!

Or maybe something spooky? Guess what, We have a book for you!

## Inspiration

__Necessity is the mother of invention__

Ever felt that none of the books in the library seem to be matching the type of book you want to read in that mood? Fear no more! Bibliofeels brings you a two-tap solution to find the perfect book for you.

## What it does

BiblioFeels aims to recommend the best book to the best person(YES YOU!), along with relevant details and all you need to do is click on a button and let us know how you want to feel. It is that simple!

## How we built it
We wanted the user's experience with the app to be as smooth as possible, so we started with an aesthetic, minimalistic design for the front end. 

- how the database was built
- how the backend was done 
- how the backend was connected to frontend

## Challenges we ran into
We worked on the following challenges:
- The biggest challenge for this project was planning around the team's time zones. But we realized that when we decided on times well in advance, that problem seemed to subside. 
- planning the workflow
- learning new technologies
- managing the database


## Accomplishments that we're proud of
- the whole team pulled their weight and pulled off a project we are all proud of
- learning the new technologies needed for the project.
- compiling a database of about 16000 books to find the perfect book to match one's mood 
- making new friends across the world 

## What we learned
- working with an international team, with different time zones
- new technologies for the project like figma, CSS, flask, etc.
-working with a large database 

## What's next for bibliofeels
Features we think could make bibliofeels even better:
- adding a bot to analyze the user's mood
- adding the feature to look for more books to match a particular mood, e.g. a list of 10 books
- adding the feature of 'books like this' cluster that takes a book title as input
- deploying the app
- take multiple emotions from the user to match in the database



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

Example: http://localhost:5000/recommend?emotions=joy,analytical
