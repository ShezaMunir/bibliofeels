import os
import json
import sqlite3

import pandas as pd

FILE_DIR = os.path.dirname(__file__)
DB_PATH = os.path.join(FILE_DIR, "..", "bibliofeels", "db.sqlite")


def create_database():
    books_sql = '''CREATE TABLE IF NOT EXISTS "Books" (
                        "ID"	INTEGER,
                        "Author" TEXT,
                        "Book Title" TEXT,
                        "Publication Date" TEXT,
                        "Genre" TEXT,
                        "Emotion" TEXT,
                        "Summary" TEXT,
                        "Image URL" TEXT,
                        "Wikipedia Link" TEXT,
                        PRIMARY KEY("ID")
                    );'''
    conn = sqlite3.connect(DB_PATH)
    conn.execute(books_sql)
    conn.close()
    print('Database created')


def format_emotions_col(value):
    emo_list = json.loads(value.replace("'", '"')).get("emotions")
    new_val = {list(x.keys())[0]: list(x.values())[0] for x in emo_list}
    return json.dumps(new_val)


def format_genre_col(value):
    try: new_val = json.loads(value.replace("'", '"'))
    except: new_val = []
    return json.dumps(new_val)


def populate_db():
    csv_file = os.path.join(FILE_DIR, "database.csv")
    conn = sqlite3.connect(DB_PATH)
    df = pd.read_csv(csv_file).drop(columns=['Unnamed: 0'])
    df.rename(columns={'Date of Publication': 'Publication Date'}, inplace=True)
    df.rename(columns={'Genres': 'Genre'}, inplace=True)
    df.rename(columns={'Emotions': 'Emotion'}, inplace=True)
    df["Emotion"] = df["Emotion"].apply(format_emotions_col)
    df["Genre"] = df["Genre"].apply(format_genre_col)
    df.to_sql("Books", conn, if_exists="append", index_label="ID", index=True)
    conn.commit()
    conn.close()
    print("Database populated")


if __name__ == '__main__':
    create_database()
    populate_db()
