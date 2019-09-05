FROM openjdk:8u222-jdk-slim

COPY target/api-java-*.jar /app/api-java.jar

CMD java -Xms128M -Xmx256M -jar /app/api-java.jar
