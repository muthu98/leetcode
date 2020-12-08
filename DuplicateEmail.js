// # Write your MySQL query statement below
// https://leetcode.com/problems/duplicate-emails/
//easy

SELECT Email from Person
Group By Email
Having Count(*) > 1;