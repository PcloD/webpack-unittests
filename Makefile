NODE=node
WEBPACK=$(NODE) node_modules/.bin/webpack
KARMA=$(NODE) node_modules/.bin/karma

WEBPACK_APP=--config config/app.config.js
WEBPACK_TEST=--config config/test.config.js

DIR_SRC=src
DIR_TEST=test

default:
	$(WEBPACK) $(WEBPACK_APP)

dummy:

test: test-compile
	$(KARMA) start --single-run

test-watch: test-compile
	$(KARMA) start

test-compile: dummy
	$(eval JS_FILES := $(shell find $(DIR_SRC) -name '*_test.js'))
	make $(JS_FILES)

$(DIR_SRC)/%.js: dummy
	$(eval PATH := $(dir $@))
	$(eval FILE := $(notdir $@))
	$(eval TARGET := $(subst src,$(DIR_TEST),$(PATH))$(FILE))
	$(WEBPACK) $(WEBPACK_TEST) $@ $(TARGET)
