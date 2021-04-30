import os

from flask import Flask
from flask import redirect, render_template, url_for

# import openpyxl module
import openpyxl

# Give the location of the file
path = "TKH Student Projects.xlsx"
wb_obj = openpyxl.load_workbook(path)
sheet_obj = wb_obj.active
cell_obj = sheet_obj.cell(row = 1, column = 1)
max_col_num = sheet_obj.max_column
max_row_num = sheet_obj.max_row

class EndpointFunction:
    def __init__(self):
        self.function_name = None

    def _Handler(self, **kwargs):
        print('Calling function {} with parameters {}'.format(self.function_name, kwargs))
        self.function_name = None

    def __getattr__(self, attr):
        self.function_name = attr
        return self._Handler

def rename(newname):
    def decorator(f):
        f.__name__ = newname
        return f
    return decorator


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    track_keyword_web = {}
    # read project urls from TKH Student Projects.xlsx
    for r in range(2, max_row_num):
        track = sheet_obj.cell(row = r, column = 2).value
        student_first_name = sheet_obj.cell(row = r, column = 1).value.split(" ")[0]
        keyword = sheet_obj.cell(row = r, column = 3).value.split(" ")[0] if " " in sheet_obj.cell(row = r, column = 3).value else sheet_obj.cell(row = r, column = 3).value
        track_keyword_name = track + "_" + keyword + "_" + student_first_name
        website = sheet_obj.cell(row = r, column = 4).value
        track_keyword_web[track_keyword_name] = website
    print(track_keyword_web)

    #http://127.0.0.1:5000/projects/WD_Bloom_Quiana
    #http://127.0.0.1:5000/projects/D_Treasury_Gyasi
    #http://127.0.0.1:5000/projects/D_Food_Jessica

    @app.route('/projects/<track_keyword_name>')
    def endpoint(track_keyword_name):
        return redirect(track_keyword_web[track_keyword_name])

    return app