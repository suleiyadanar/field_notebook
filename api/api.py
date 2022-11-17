from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///notes.db"
db = SQLAlchemy(app)


class Entry(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    common_name = db.Column(db.String(30), nullable=False)
    sci_name = db.Column(db.String(30), nullable=False)
    family_name = db.Column(db.String(30), nullable=False)
    leaf_type = db.Column(db.String(30), nullable=False)
    bark = db.Column(db.String, nullable=True)
    notes = db.Column(db.String, nullable=True)

    def __str__(self):
        return f'{self.id} {self.common_name}'


def entry_serializer(entry):
    return{
        'id': entry.id,
        'common_name':entry.common_name,
        'sci_name':entry.sci_name,
        'family_name':entry.family_name,
        'leaf_type':entry.leaf_type,
        'bark':entry.bark,
        'notes':entry.notes
    }

@app.route('/api', methods=['GET'])
def index():
    return jsonify([*map(entry_serializer, Entry.query.all())])

@app.route('/api/create', methods=['POST'])
def create():
    req_data = json.loads(request.data)
    entry1 = Entry(common_name=req_data['common_name'],
                   sci_name=req_data['sci_name'],
                   family_name=req_data['family_name'],
                   leaf_type=req_data['leaf_type'],
                   bark=req_data['bark'],
                   notes=req_data['notes']
                   )
    db.session.add(entry1)
    db.session.commit()

    return {'201': 'entry success'}

@app.route('/api/<int:id>')
def show(id):
    return jsonify([*map(entry_serializer, Entry.query.filter_by(id=id))])

@app.route('/api/<int:id>', methods=['POST'])
def delete(id):
    req_data = json.loads(request.data)
    Entry.query.filter_by(id=req_data['id']).delete()
    db.session.commit()

    return {'204': 'Delete successful'}
if __name__=='__main__':
    app.run(debug=True)
