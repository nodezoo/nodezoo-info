build :
	mkdir -p app
	cp -r ../../info.js ../../srv app
	docker build -t nodezoo-info:1 .
	docker build -t nodezoo-info-prod:1 -f Dockerfile-prod .

clean :
	rm *~

.PHONY : build clean
