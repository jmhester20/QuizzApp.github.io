// Array of questions grouped by category (20 questions each)

const questions = [
  {
    category: "VT History",
    questions: [
      { question: "In what year did Virginia Tech first open its doors?", options: ["1892", "1882", "1872", "1902"], correctAnswer: 2 },
      { question: "What was Virginia Tech’s original name?", options: ["Virginia Agricultural and Mechanical College", "Virginia Polytechnic Institute", "Virginia Tech", "Virginia State University"], correctAnswer: 0 },
      { question: "On what date did the first student, Addison Caldwell, enroll?", options: ["October 1, 1872", "January 1, 1873", "October 10, 1872", "September 1, 1871"], correctAnswer: 3 },
      { question: "What are Virginia Tech’s official school colors?", options: ["Chicago maroon & burnt orange", "Maroon & black", "Blue & orange", "Orange & black"], correctAnswer: 1 },
      { question: "What is Virginia Tech’s motto?", options: ["Ut Prosim", "Veritas", "Esse Quam Videri", "Sapientia"], correctAnswer: 0 },
      { question: "What is the name of the Hokies’ mascot?", options: ["HokieBird", "Gobbler", "Techie", "Hokio"], correctAnswer: 0 },
      { question: "Under which federal act was Virginia Tech founded as a land-grant college?", options: ["GI Bill", "Homestead Act", "Hatch Act", "Morrill Act of 1862"], correctAnswer: 3 },
      { question: "In which year did Virginia Tech admit its first female students?", options: ["1923", "1921", "1944", "1970"], correctAnswer: 1 },
      { question: "Which academic calendar did Virginia Tech originally use?", options: ["Semester", "Quarter", "Trimester", "Modular"], correctAnswer: 1 },
      { question: "In what year was the Corps of Cadets requirement reduced to two years?", options: ["1923", "1921", "1944", "1964"], correctAnswer: 0 },
      { question: "When did the institution officially become Virginia Polytechnic Institute (VPI)?", options: ["1896", "1944", "1970", "1872"], correctAnswer: 1 },
      { question: "In which year did the school adopt the legal name Virginia Polytechnic Institute and State University (Virginia Tech)?", options: ["1999", "1980", "1990", "1970"], correctAnswer: 4 },
      { question: "What is the name of the oldest academic building on campus, often called 'Old Main'?", options: ["War Memorial Court", "Burruss Hall", "Old Main", "Squires Student Center"], correctAnswer: 3 },
      { question: "Which annual event reenacts Addison Caldwell’s 26-mile walk to enroll?", options: ["Caldwell March", "Hokie March", "Corps Walk", "Addison’s Journey"], correctAnswer: 0 },
      { question: "What governing body oversees Virginia Tech?", options: ["Board of Regemts", "Board of Visitors", "Board of Trustees", "State Board of Education"], correctAnswer: 1 },
      { question: "What is the name of the memorial court honoring fallen Hokies?", options: ["Pylons Plaza", "Memorial Chapel", "War Memorial Court", "Alumni Memorial"], correctAnswer: 2 },
      { question: "Which rock song is famously played as the Hokies take the field at Lane Stadium?", options: ["Enter Sandman", "We Will Rock You", "Tech Triumph", "Thunderstruck"], correctAnswer: 0 },
      { question: "What is the name of Virginia Tech’s student yearbook?", options: ["Bugle", "Hawkeye", "Blueprint", "Carillon"], correctAnswer: 0 },
      { question: "What is Virginia Tech’s student-run newspaper called?", options: ["News Times", "Hokie News", "Tech Today", "Collegiate Times"], correctAnswer: 4 },
      { question: "On which quad are the iconic Pylons located?", options: ["Drillfield", "War Memorial Court", "Main Quad", "Cassell Coliseum"], correctAnswer: 0 }
    ]
  },
  {
    category: "VT Football",
    questions: [
      { question: "What is the name of Virginia Tech’s football stadium?", options: ["Cassell Coliseum", "Lane Stadium", "Burruss Hall", "Blacksburg Field"], correctAnswer: 1 },
      { question: "What are the Hokies’ team colors?", options: ["Blue & Orange", "Maroon & Orange", "Red & Gold", "Green & White"], correctAnswer: 1 },
      { question: "What is the Hokies’ team nickname?", options: ["Gobblers", "Techies", "Fighting Gobblers", "Hokies"], correctAnswer: 3 },
      { question: "In which conference do the Hokies compete?", options: ["SEC", "Pac-12", "Big Ten", "ACC"], correctAnswer: 3 },
      { question: "Who was the head coach from 1995 to 2015?", options: ["Justin Fuente", "Michael Vick", "Bruce Smith", "Frank Beamer"], correctAnswer: 3 },
      { question: "In what year did the Hokies play in the national championship game?", options: ["2002", "2001", "1999", "2000"], correctAnswer: 2 },
      { question: "What song plays as the team takes the field?", options: ["Thunderstruck", "Tech Triumph", "Enter Sandman", "We Will Rock You"], correctAnswer: 2 },
      { question: "Who is the Hokies’ in-state rival?", options: ["Maryland Terrapins", "North Carolina Tar Heels", "West Virginia Mountaineers", "Virginia Cavaliers"], correctAnswer: 3 },
      { question: "Which bowl game did the Hokies win in 1999?", options: ["Orange Bowl", "Rose Bowl", "Music City Bowl", "Sugar Bowl"], correctAnswer: 3 },
      { question: "Who is Virginia Tech’s all-time leading passer?", options: ["Logan Thomas", "Bryce Perkins", "Michael Vick", "Tyrod Taylor"], correctAnswer: 0 },
      { question: "Who was the first Hokie selected #1 overall in the NFL Draft?", options: ["Bruce Smith", "Michael Vick", "Dell Curry", "Andre Smith"], correctAnswer: 1 },
      { question: "In what year did Virginia Tech join the ACC?", options: ["2004", "2010", "1996", "2000"], correctAnswer: 0 },
      { question: "Which coach popularized “Beamer Ball”?", options: ["Bud Foster", "Mike London", "Justin Fuente", "Frank Beamer"], correctAnswer: 3 },
      { question: "What is the marching band’s name?", options: ["Hokie Band", "Marching Virginians", "Tech Marchers", "Blacksburg Brass"], correctAnswer: 1 },
      { question: "What is the name of the team’s fight song?", options: ["Gobble On", "Tech Triumph", "Hokie Fight", "Maroon March"], correctAnswer: 1 },
      { question: "What mascot leads the team onto the field?", options: ["GobbleGulch", "Maroon Bird", "Techie", "HokieBird"], correctAnswer: 3 },
      { question: "What is the name of the student section at games?", options: ["Gobblers Galore", "Hokie Nation", "Maroon Army", "Orange Brigade"], correctAnswer: 1 },
      { question: "Approximately how many seats does Lane Stadium hold?", options: ["60,000", "66,233", "72,000", "50,000"], correctAnswer: 1 },
      { question: "How many points is a touchdown worth?", options: ["3", "6", "7", "2"], correctAnswer: 1 },
      { question: "How many quarters are in a football game?", options: ["3", "5", "2", "4"], correctAnswer: 3 }
    ]
  },
  {
    category: "VT Basketball",
    questions: [
      { question: "What is the name of Virginia Tech’s basketball arena?", options: ["Blacksburg Field", "Cassell Coliseum", "Lane Stadium", "Burruss Hall"], correctAnswer: 1 },
      { question: "What are the Hokies’ team colors?", options: ["Green & Gold", "Blue & White", "Maroon & Orange", "Red & Black"], correctAnswer: 2 },
      { question: "What is the team nickname for VT basketball?", options: ["Gobblers", "Techies", "Fighting Gobblers", "Hokies"], correctAnswer: 3 },
      { question: "In which conference do VT basketball teams compete?", options: ["SEC", "Big Ten", "ACC", "Pac-12"], correctAnswer: 2 },
      { question: "Who became the head coach of VT men’s basketball in 2019?", options: ["Buzz Williams", "Mike Young", "Thad Matta", "Justin Fuente"], correctAnswer: 1 },
      { question: "Which VT alumnus is an NBA player and father of an NBA MVP?", options: ["Michael Vick", "Tyrod Taylor", "Dell Curry", "Bimbo Coles"], correctAnswer: 2 },
      { question: "In what year did VT make its first NCAA Tournament appearance?", options: ["1992", "1975", "1967", "1983"], correctAnswer: 2 },
      { question: "How many ACC tournament championships has VT won?", options: ["2", "3", "1", "0"], correctAnswer: 3 },
      { question: "What is the name of the student section at VT basketball games?", options: ["Hokie Nation", "Orange Brigade", "Rowdy Recruits", "Maroon Army"], correctAnswer: 2 },
      { question: "What division does VT basketball compete in?", options: ["NCAA Division II", "NCAA Division I", "NAIA", "NJCAA"], correctAnswer: 1 },
      { question: "How many points is a dunk worth?", options: ["2", "3", "1", "0"], correctAnswer: 0 },
      { question: "How many players are on the court per team?", options: ["6", "3", "5", "4"], correctAnswer: 2 },
      { question: "What shape is a basketball?", options: ["Cube", "Sphere", "Cylinder", "Circle"], correctAnswer: 1 },
      { question: "How many points is a three-pointer worth?", options: ["1", "3", "0", "2"], correctAnswer: 1 },
      { question: "How many halves are in a college basketball game?", options: ["4", "2", "3", "1"], correctAnswer: 1 },
      { question: "What is the length of each half in NCAA men’s basketball (minutes)?", options: ["20", "15", "12", "10"], correctAnswer: 0 },
      { question: "Who is VT basketball’s primary rival?", options: ["Virginia Cavaliers", "North Carolina Tar Heels", "Duke Blue Devils", "NC State Wolfpack"], correctAnswer: 0 },
      { question: "What song by Metallica is played at the start of VT basketball games?", options: ["Eye of the Tiger", "We Will Rock You", "Thunderstruck", "Enter Sandman"], correctAnswer: 3 },
      { question: "What material is the Cassell Coliseum court made of?", options: ["Concrete", "Rubber", "Hardwood", "Turf"], correctAnswer: 2 },
      { question: "What is the term for a shot made from the free-throw line?", options: ["Layup", "Free throw", "Jump shot", "Dunk"], correctAnswer: 1 }
    ]
  },
  {
    category: "VT Traditions",
    questions: [
      { question: "What is the Virginia Tech mascot?", options: ["Gobblers", "Maroon Man", "Techie", "HokieBird"], correctAnswer: 3 },
      { question: "What do students shout at the end of the spirit yell?", options: ["Maroon & Orange", "Go Tech!", "Hokie, Hokie, Hokie, Hy", "Ut Prosim!"], correctAnswer: 2 },
      { question: "What is the name of the marching band?", options: ["Hokie Band", "Marching Virginians", "Tech Marchers", "Blacksburg Brass"], correctAnswer: 1 },
      { question: "Which building houses the bells rung after wins?", options: ["Squires Center", "Cassell Coliseum", "Lane Stadium", "Burruss Hall"], correctAnswer: 3 },
      { question: "What do students take pictures under on the Drillfield?", options: ["Pylons", "Old Main", "Squires Plaza", "War Memorial Court"], correctAnswer: 0 },
      { question: "What annual walk reenacts Addison Caldwell’s journey?", options: ["Tech Trek", "Corps March", "Hokie Walk", "Caldwell March"], correctAnswer: 3 },
      { question: "Which song plays as the football team enters Lane Stadium?", options: ["Victory", "Tech Triumph", "We Will Rock You", "Enter Sandman"], correctAnswer: 3 },
      { question: "What is the signature stone on most campus buildings?", options: ["Limestone", "Hokie Stone", "Granite", "Marble"], correctAnswer: 1 },
      { question: "What colors do students wear on game day?", options: ["Red & White", "Blue & Orange", "Green & Gold", "Maroon & Orange"], correctAnswer: 3 },
      { question: "What symbol on campus should students avoid stepping on?", options: ["Drillfield Center", "University Seal", "Hokie Bird Logo", "Pylons"], correctAnswer: 1 },
      { question: "What do students rub for luck at the Pylons?", options: ["The top", "The sides", "The lights", "The base"], correctAnswer: 3 },
      { question: "What do seniors carve their names into during Senior Walk?", options: ["Sidewalk bricks", "Burruss steps", "Pylons", "Trees"], correctAnswer: 0 },
      { question: "Which chant is used at the end of the fight song?", options: ["Hug a Hokie!", "Sing Tech Triumph!", "Let’s Fight!", "Go Hokies!"], correctAnswer: 2 },
      { question: "What tradition involves a pre-game player procession through campus?", options: ["Tech Parade", "Maroon March", "Caldwell March", "Hokie Walk"], correctAnswer: 3 },
      { question: "What do students do after home football wins to celebrate?", options: ["Ring the bells", "Sing in Burruss", "March in a parade", "Gather on the Drillfield"], correctAnswer: 0 },
      { question: "Which phrase kicks off the Hokie spirit yell?", options: ["Ready, Tech!", "Hokie, Hokie, Hokie", "Go Hokies, Go!", "One, Two, Three!"], correctAnswer: 1 },
      { question: "Where do new students traditionally have their photo taken?", options: ["Under the Pylons", "On Lane Stadium steps", "At Old Main", "In Burruss Hall"], correctAnswer: 0 },
      { question: "Which event marks the start of Homecoming Weekend?", options: ["Tailgate Party", "Spirit Rally", "Caldwell March", "Parade on the Drillfield"], correctAnswer: 3 },
      { question: "What is the name of the student section at games?", options: ["Orange Brigade", "Hokie Nation", "Tech Fanatics", "Maroon Army"], correctAnswer: 1 },
      { question: "What is traditionally played at midnight before graduation?", options: ["Torchlight Procession", "Final Roll Call", "Singing of Ut Prosim", "Tolling of Old Main Bell"], correctAnswer: 0 }
    ]
  }
];
