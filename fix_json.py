import json
import re

file_path = "/Users/chenivan/Desktop/雄工/h1-6-u5.json"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

def replace_second(match):
    return match.group(1) + "that" + match.group(2)

new_content = re.sub(r'(________.*?)________(.*?\n)', replace_second, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Done")
