JS_DIR = lib/

minify:
	uglifyjs ${JS_DIR}nepalify.js -c -m -o ${JS_DIR}nepalify.min.js  -b "beautify=false,ascii-only=true"

clean:
	rm ${JS_DIR}nepalify.min.js

.PHONY: clean minify