const Duolingo = require('duolingo-api');
const credential = {
    username: 'melikaxo',
    // id: 809811933
};
// can also be {username: 'JohnDoe1}, or {id: 123456789}
let duolingo = new Duolingo(credential);
async function getMetadata() {
  return await duolingo.getProcessedData();
}

getMetadata.then(data => {
  console.log('My Processed Metadata: ', data);
});
// Gets raw metadata from duolingo. No pre/post-processing
duolingo.getRawData();

// Gets processed metadata from duolingo. Post-processing of adding display name for achievements,
// Adding level for each course and adding total level based on XP.
duolingo.getProcessedData();

// Gets selected fields metadata
let fields = [];
duolingo.getDataByFields();

// Identifies which level based on xp.
let xp = 1650; // or "1650"
duolingo.translateXpToLevels(xp);

// Adds a "level" property to a list of objects, as long as "xp" field is present.
let courses = [];
duolingo.addLevelToCourses(courses);

// Adds a "displayName" property to a list of objects, as long as "name" field is present.
let achievements = [];
duolingo.translateAchievements(achievements);
