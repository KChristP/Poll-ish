#Schema

##Users
- id (integer, primary key, not_null, unique)
- email (string, not null, unique)
- password_digest (string, not null)
- session_token (string, not null)

##Groups
- id (integer, primary key, not_null, unique)
- name (string, not null)
<!-- - user_id -->

<!-- ##User_Groups
user_id
group_id -->

##Polls
- id (integer, primary key, not null, unique)
- group_id (integer, foreign key, find a way to default to a users' "ungrouped" group?, also need to ensure these are deleted when a group is deleted)
- live (boolean, default: false)

##Question
- id (integer, primary key, not_null, unique)
- body (string, not null)
- poll_id (integer, foreign key, not_null, make sure these delete when polls are deleted)


##Answers
- id (integer, primary key, not_null, unique)
- answer (string, not null)
- question_id (integer, foreign key, not null, make sure these delete when questions are deleted)
- votes (integer, default: 0)
