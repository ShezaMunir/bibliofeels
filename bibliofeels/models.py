from bibliofeels.setup import db, ma


class Book(db.Model):
    __tablename__ = "Books"
    __table_args__ = {"extend_existing": True}
    id = db.Column("ID", db.Integer, primary_key=True)
    author = db.Column("Author", db.String)
    title = db.Column("Book Title", db.String)
    publication_date = db.Column("Publication Date", db.String)
    emotion = db.Column("Emotion", db.String)
    image_url = db.Column("Image URL", db.String)
    wikipedia_link = db.Column("Wikipedia Link", db.String)
    genre = db.Column("Genre", db.String)
    summary = db.Column("Summary", db.Text)


class BookSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Book
        load_instance = True
        sqla_session = db.session
