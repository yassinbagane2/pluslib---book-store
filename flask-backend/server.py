from flask import Flask, jsonify, request
from flask_mysqldb import MySQL
from flask_cors import CORS



app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['MYSQL_HOST'] = "localhost"
app.config["MYSQL_USER"] = "yassinbagane"
app.config["MYSQL_PASSWORD"] = "52544318"
app.config["MYSQL_DB"] = "library_store"

mysql = MySQL(app)

@app.route("/upload", methods=['POST'])
#add book to the database
def uploadBook():
    title = request.form.get("title")
    author = request.form.get("author")
    published = request.form.get("published")
    editions = request.form.get("editions")
    imageUrl = request.form.get("imageUrl")
    cur = mysql.connection.cursor()
    query = "INSERT INTO books (title, author,published, editions_count, imageUrl) VALUES (%s, %s, %s, %s, %s)"
    cur.execute(query, (title, author, published, editions, imageUrl))
    mysql.connection.commit()
    cur.close()
    return jsonify("Book added succesfully")

@app.route('/books', methods=['GET'])
def getBooks():
    cur = mysql.connection.cursor()
    query = "SELECT * FROM BOOKS"
    cur.execute(query)
    data = [dict(zip([column[0] for column in cur.description], row)) for row in cur.fetchall()]
    cur.close()
    return jsonify(data)


@app.route('/books/<int:bookId>', methods=['DELETE'])
def deleteBook(bookId):

    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM books WHERE bookId = %s", (bookId,))
    mysql.connection.commit()
    cur.close()
    return jsonify("Book successfully deleted.")

if __name__ == "__main__":
    app.run(debug = True)