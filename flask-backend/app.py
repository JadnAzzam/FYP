from flask import Flask, request, redirect, url_for, session
import mysql.connector  # pip install mysql-connector
from werkzeug.security import generate_password_hash
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func
from flask_cors import CORS

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:Mysqlrootpass1@localhost:3306/exchange'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'your_secret_key_here'
CORS(app)
db = SQLAlchemy(app)


class Persons(db.Model):
    __tablename__ = 'persons'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    email = db.Column(db.String(50))
    phone = db.Column(db.String(20))
    password = db.Column(db.String)


# Establish database connection
# conn = mysql.connector.connect(
#     host=host,
#     user=username,
#     password=password,
#     database=database
# )


@app.route('/signup', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        # Get form data
        username = request.form['username']
        email = request.form['email']
        phone = request.form['phone']
        password = request.form['password']

        # Hash the password
        hashed_password = generate_password_hash(password)

        # Insert the new user into the database
        transaction = Persons(username=username, email=email, phone=phone, password=hashed_password)
        db.session.add(transaction)
        db.session.commit()

        # Redirect to success page
        return redirect(url_for('success'))

    # Render the registration form
    return '''
        <form method="post">
            <label>Username</label>
            <input type="text" name="username" required><br>
    
            <label>Email</label>
            <input type="email" name="email" required><br>
    
            <label>Phone</label>
            <input type="text" name="phone" required><br>
    
            <label>Password</label>
            <input type="password" name="password" required><br>
    
            <input type="submit" value="Register">
        </form>
    '''


@app.route('/success')
def success():
    return "Registration successful!"


@app.route('/signIn', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Get form data
        username = request.form['username']
        password = request.form['password']

        # Check if the user exists
        transaction = Persons.query.filter_by(username=username).first()

        if transaction is not None:
            # Verify the password
            if check_password_hash(transaction.password, password):
                # Login successful
                session['username'] = username
                return redirect(url_for('dashboard'))
            else:
                # Password is incorrect
                error = "Incorrect password"
        else:
            # User not found
            error = "User not found"

    # Render the login form
    return '''
            <form method="post">
                <label>Username</label>
                <input type="text" name="username" required><br>

                <label>Password</label>
                <input type="password" name="password" required><br>

                <input type="submit" value="Login">
            </form>
        '''


@app.route('/home')
def dashboard():
    # Check if user is logged in
    if 'username' in session:
        return "Welcome to your dashboard, " + session['username']
    else:
        return redirect(url_for('signIn'))


if __name__ == '__main__':
    app.run()

# Close database connection
# conn.close()
