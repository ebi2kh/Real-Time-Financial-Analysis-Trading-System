# Use the official Python image as the base image
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the Python script into the container
COPY generate.py /app/your_script.py

# Install any necessary dependencies
RUN pip install requests numpy psutil

# Run the Python script when the container starts
CMD ["python", "generate.py"]
