<<<<<<< Updated upstream
const leapYears = function() {
=======
const leapYears = function(year) {
/*
FUNCTION IsLeapYear(year):
   IF (year IS divisible by 4) AND (year IS NOT divisible by 100) THEN
     RETURN TRUE
   ELSE IF (year IS divisible by 400) THEN
     RETURN TRUE
   ELSE
     RETURN FALSE
   END IF
 END FUNCTION
*/
>>>>>>> Stashed changes
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 )){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
//