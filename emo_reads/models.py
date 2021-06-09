from setup import db, ma


class Book(db.Model):
    __tablename__ = "Books"
    __table_args__ = {"extend_existing": True}
    id = db.Column("ID", db.Integer, primary_key=True)
    author = db.Column("Author", db.String)
    publication_date = db.Column("Publication Date", db.String)
    emotion = db.Column("Emotion", db.String, primary_key=True)
    image_url = db.Column("Image URL", db.String, primary_key=True)
    wikipedia_link = db.Column("Wikipedia Link", db.Integer, primary_key=True)
    genre = db.Column("Genre", db.String, primary_key=True)
    summary = db.Column("Summary", db.Text, primary_key=True)


class BookSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Book
        load_instance = True
        sqla_session = db.session


db.create_all()
