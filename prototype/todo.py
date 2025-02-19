from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Sample task list (temporary storage)
tasks = []

@app.route('/')
def index():
    return render_template('index.html', tasks=tasks)

@app.route('/add_task', methods=['POST'])
def add_task():
    task_content = request.form.get('task')
    if task_content:
        tasks.append({'id': len(tasks) + 1, 'content': task_content, 'completed': False})
    return redirect(url_for('index'))

@app.route('/delete_task/<int:task_id>')
def delete_task(task_id):
    global tasks
    tasks = [task for task in tasks if task['id'] != task_id]
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
