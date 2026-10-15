import subprocess
repo = r"C:\Users\esoph\Documents\vault\LIFT courses\quartz"
msg = "polish how-to-wander copy (author's edit pass: prose form, voice line); drops the dead Field Notes link left over from the fold"
print(subprocess.run(["git", "status", "--short"], cwd=repo, capture_output=True, text=True).stdout)
r = subprocess.run(["git", "add", "-A"], cwd=repo, capture_output=True, text=True)
r = subprocess.run(["git", "commit", "-m", msg], cwd=repo, capture_output=True, text=True)
print(r.stdout, r.stderr)
r = subprocess.run(["git", "push", "origin", "v4"], cwd=repo, capture_output=True, text=True)
print(r.stdout[-400:] if len(r.stdout) > 400 else r.stdout)
print(r.stderr[-400:] if len(r.stderr) > 400 else r.stderr)
