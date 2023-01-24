#build image
docker build -t myapp:latest .
#run the container
docker run -p 8080:8080 -td myapp:latest