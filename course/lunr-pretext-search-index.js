var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-welcome",
  "level": "1",
  "url": "sec-welcome.html",
  "type": "Section",
  "number": "",
  "title": "Welcome and Departmental Mission",
  "body": " Welcome and Departmental Mission   A Word to the Mathematics Major  The Mathematics Department would like to welcome you as one of our majors. This planning guide is intended to help you in selecting your courses in their proper sequence and to give you direction in your overall program of study. You are not alone in this process. Although you are primarily responsible for your schedule, you will be assigned an advisor who can help answer questions you may have about the program and course selections. It is important to keep in mind that not all courses are offered every semester and some upper level courses are only offered on alternate years. It is also important to be sure you have satisfied the prerequisites for each course.  The top graduating senior mathematics major with a G.P.A. above 3.5 in mathematics is awarded the Frank Castagna Award for Excellence in Mathematics. There are other awards possible within the Department and the University.  The faculty is here to help you with any questions you may have. It is our hope that you will have a successful and rewarding experience at Framingham State University.  Congratulations on your choice of school and major.    Mission  The mission of the Mathematics Department is twofold. Firstly, we provide a strong, broadbased preparation in mathematics and its related skills to enable the student to select a variety of career paths in which the knowledge and intellectual skills of mathematics can be used. Secondly, we function as a service department to other programs on the campus.  The goals of the mathematics curriculum for the mathematics major will develop, in the student, competencies in analysis, algebra, probability and statistics, number theory, geometry, technology, and the history and applications of mathematics. It will also develop and enhance such relevant abilities as critical thinking, logical reasoning, problem solving, including intuition and rigor, modeling, and oral and written communication skills in mathematics.  The combination of the mathematics curriculum and general education portion of the University curriculum is such that the career paths open to the student are broad and varied from teaching, actuarial science, statistics, graduate studies, and more.  In order to carry out its mission, the Mathematics Department strives to meet the needs of a diverse campus and student body through periodic assessment of its course and program offerings. The faculty is committed to developing and improving students’ problem solving and reasoning skills, as well as their mathematical knowledge, in order to prepare them to face the challenges of the twenty-first century. The department will continue to offer programs to meet the ever-changing needs of the students and the nation. Our continuing goal is the achievement of excellence and scholarship by all our students.   "
},
{
  "id": "Faculty",
  "level": "1",
  "url": "Faculty.html",
  "type": "Section",
  "number": "",
  "title": "Full-time Faculty",
  "body": " Full-time Faculty          Name  Office  Email  Phone    Sheree Arpin  HH 402I  sarpin@framingham.edu  x4776    Benjamin Atchison  HH 402E  batchison@framingham.edu  x4725    Michael Krul, Chair  HH 402H  mkrul@framingham.edu  x4877    Julie Levandosky  HH 402G  jlevandosky@framingham.edu  x4722    Sarah Mabrouk  HH 402B  smabrouk@framingham.edu  x4785    Matthew Moynihan  HH 402D  mmoynihan5@framingham.edu  x4728    Robert Page  HH 402F  rpage@framingham.edu  x4773    Mohammad Salmassi  HH 402J  msalmassi@framingham.edu  x4751    Nicholas Sedlock  HH 404D  nsedlock@framingham.edu  x4727    Christopher Staniszewski  HH 402C  cstaniszewski@framingham.edu  x4710    Njesa Totty  HH 404C  ntotty@framingham.edu  x5765    "
},
{
  "id": "sec-math-program-reqs",
  "level": "1",
  "url": "sec-math-program-reqs.html",
  "type": "Section",
  "number": "",
  "title": "Program Requirements and Four-Year Plans",
  "body": " Program Requirements and Four-Year Plans   Mathematics Program Requirements     STAT 157  Probability and Statistics    MATH 206  Discrete Mathematics I    MATH 219  Calculus I    MATH 220  Calculus II    MATH 221  Calculus III    MATH 226  Linear Algebra    MATH 419  Abstract Algebra I    MATH 427  Real Analysis    CSCI xxx  One Computer Science Course     In addition to those courses listed above, each student must complete the major requirements described in the following sections.    General Mathematics Program (UMAG)  Students enrolled in the UMAG program must complete five electives from the following list.   MATH 222 Differential Equations    Any MATH\/STAT course at the 300-level or above.       Minor in Secondary Education (UMAT)  Students enrolled in the UMAT program must complete MATH 317 Higher Geometry, MATH 322 History of Mathematics, and three electives from the following list.   MATH 222 Differential Equations    Any MATH\/STAT course at the 300-level or above     It is important to note that middle school or high school student teaching occurs only in the Spring semester. Please see the University Catalog for additional information on teacher education programs.    Mathematics Minor     MATH 219 Calculus I    One mathematics course at or above the 200-level or one of the following.   STAT 107 Business Statistics    STAT 117 Introduction to Statistics    STAT 157 Probability and Statistics    STAT 203 Statistics for the Natural Sciences       Three additional mathematics courses at or above the 200-level.       Minor in Mathematics for Elementary Education     MATH 110 Mathematics for Elementary Educators I    MATH 120 Mathematics for Elementary Educators II    MATH 206 Discrete Mathematics I    Three courses from the following list. At least one course must be at the 300-level.   MATH 219 Calculus I    MATH 220 Calculus II    MATH 226 Linear Algebra and Applications    MATH 301 Problem Solving and Modeling in Mathematics    MATH 310 Number Theory    MATH 317 Higher Geometry    MATH 322 History of Mathematics    STAT 117 Introduction to Statistics or STAT 157 Probability and Statistics         "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
