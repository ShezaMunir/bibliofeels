from random import choices

from flask import render_template, abort
from typing import List

from bibliofeels.config import MAX_RESPONSE_PER_QUERY, EMOTIONS
from bibliofeels.models import Book, BookSchema
from bibliofeels.setup import app


def index():
    return render_template("index.html")


@app.errorhandler(404)
def not_found(error):
    return render_template("404.html")


@app.errorhandler(400)
def not_found(error):
    return render_template("400.html")


def get_recommendations(emotions: List[str]):
    if not emotions:
        abort(400)
    query = Book.query
    for emotion in emotions:
        if emotion not in EMOTIONS:
            continue
        query = query.filter(getattr(Book, emotion) > 0)
    query = query.order_by(getattr(Book, emotions[0]).desc())
    query = query.limit(MAX_RESPONSE_PER_QUERY*3)
    _books = query.all()
    _books = choices(_books, k=min(len(_books), MAX_RESPONSE_PER_QUERY))
    books = BookSchema(many=True).dump(_books)
    return books, 200
