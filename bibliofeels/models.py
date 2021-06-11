from bibliofeels.setup import db, ma


class Book(db.Model):
    __tablename__ = "Books"
    __table_args__ = {"extend_existing": True}
    id = db.Column("ID", db.Integer, primary_key=True)
    author = db.Column("Author", db.String)
    title = db.Column("Book Title", db.String)
    publication_date = db.Column("Publication Date", db.String)
    image_url = db.Column("Image URL", db.String)
    wikipedia_link = db.Column("Wikipedia Link", db.String)
    genre = db.Column("Genre", db.String)
    # emotions
    summary = db.Column("Summary", db.Text)
    sadness = db.Column("Sadness", db.String)
    fear = db.Column("Fear", db.String)
    analytical = db.Column("Analytical", db.String)
    joy = db.Column("Joy", db.String)
    anger = db.Column("Anger", db.String)
    confident = db.Column("Confident", db.String)
    tentative = db.Column("Tentative", db.String)


class BookSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Book
        load_instance = True
        sqla_session = db.session
