from flask import render_template
from bibliofeels.models import Book, BookSchema


def index():
    return render_template("index.html")


def get_recommendations(emotions):
    print("doing stuff")
    book = Book.query.filter_by(id=1).first()
    books = BookSchema(many=True).dump([book])
    return books
