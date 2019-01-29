/*SQL Statements for creating todolist database*/

/*Creating database*/
CREATE DATABASE todolist;

USE todolist;

CREATE TABLE Users (
    userId INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    PRIMARY KEY(userId)
);

CREATE TABLE Tasks (
    taskId INT NOT NULL AUTO_INCREMENT,
    taskDescription VARCHAR(255) NOT NULL,
    taskCompleted BOOLEAN,
    userId INT,
    PRIMARY KEY(taskId),
    FOREIGN KEY(userId) REFERENCES Users(userId)
);

/*Inserting data*/
INSERT INTO Users (username)
VALUES ("susan@bbc.co.uk"),("geoff@bbc.co.uk");

INSERT INTO Tasks (taskDescription, taskCompleted, userId)
VALUES ("Learn JavaScript", 0, 2),("Learn MySQL", 0, 2), ("Learn NodeJS", 0, 1);


/*Retrieving Data*/
SELECT * FROM Tasks 
WHERE userId = 2;

SELECT * FROM Tasks 
WHERE userId = 1;

UPDATE Tasks 
SET taskCompleted = 1 
WHERE userId = 2 && taskDescription = "Learn JavaScript";

SELECT * FROM Tasks
WHERE userId = 2 && taskCompleted = 0;