const students = [
  {
    name: 'Juan',
    age: 20,
    courses: [
      {
        name: 'Mates',
        score: 95,
      },
      {
        name: 'History',
        score: 85,
      },
    ],
  },
  {
    name: 'María',
    age: 22,
    courses: [
      {
        name: 'Mates',
        score: 100,
      },
      {
        name: 'History',
        score: 70,
      },
    ],
  },
]

const studentsList = students.map((element) => {
  return {
    basicInfo: `${element.name} - ${element.age}`,
    total: element.courses.reduce((acum, item) => acum + item.score, 0),
  }
}, {})

console.log(studentsList)
