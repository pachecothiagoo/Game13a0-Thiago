from pathlib import Path
import re
root = Path('.')
index_file = root / 'index.html'
text = index_file.read_text(encoding='utf-8')
style_match = re.search(r'<style>(.*?)</style>', text, re.S)
script_match = re.search(r'<script>(.*?)</script>', text, re.S)
if not style_match or not script_match:
    raise RuntimeError('Missing style or script block')
style = style_match.group(1).strip()
script = script_match.group(1).strip()
html_without_style = re.sub(r'<style>.*?</style>', '    <link rel="stylesheet" href="css/style.css">', text, count=1, flags=re.S)
html_out = re.sub(r'<script>.*?</script>', '    <script src="js/game.js"></script>', html_without_style, count=1, flags=re.S)
(css_dir := root / 'css').mkdir(exist_ok=True)
(js_dir := root / 'js').mkdir(exist_ok=True)
(css_dir / 'style.css').write_text(style + '\n', encoding='utf-8')
(js_dir / 'game.js').write_text(script + '\n', encoding='utf-8')
index_file.write_text(html_out, encoding='utf-8')
print('split_success')\nfrom pathlib import Path
import re
root = Path('.')
index_file = root / 'index.html'
text = index_file.read_text(encoding='utf-8')
style_match = re.search(r'<style>(.*?)</style>', text, re.S)
script_match = re.search(r'<script>(.*?)</script>', text, re.S)
if not style_match or not script_match:
    raise RuntimeError('Missing style or script block')
style = style_match.group(1).strip()
script = script_match.group(1).strip()
html_without_style = re.sub(r'<style>.*?</style>', '    <link rel="stylesheet" href="css/style.css">', text, count=1, flags=re.S)
html_out = re.sub(r'<script>.*?</script>', '    <script src="js/game.js"></script>', html_without_style, count=1, flags=re.S)
(css_dir := root / 'css').mkdir(exist_ok=True)
(js_dir := root / 'js').mkdir(exist_ok=True)
(css_dir / 'style.css').write_text(style + '\n', encoding='utf-8')
(js_dir / 'game.js').write_text(script + '\n', encoding='utf-8')
index_file.write_text(html_out, encoding='utf-8')
print('split_success')\n
