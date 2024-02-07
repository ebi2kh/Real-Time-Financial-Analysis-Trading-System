# Use an OpenJDK base image
FROM openjdk:11-jre-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the Java source code files into the container
COPY ./src /app/src
COPY ./lib /app/lib

# Compile the Java source code
RUN javac -cp "lib/*" src/*.java

# Run the Java application
CMD ["java", "-cp", "src:lib/*", "org.main.KafkaProcessor"]
