# Use the official Python image as the base image
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the Flask application code into the container
COPY . /app

# Install dependencies
RUN pip install flask requests kafka-python

# Expose port 5000 to allow access to the Flask application
EXPOSE 5000

# Set environment variables
ENV FLASK_APP=ingestion.py

# Run the Flask application when the container starts
CMD ["flask", "run", "--host=0.0.0.0"]
