Learning \_TypeScript
------------------------------------>Day1<----------------------------------

-->1)Differences between type interface and type annotation
 const [studentId,setStudentId] = useState(0);
 setStudentId('test');

   If you try the code above, it will not compile, typescript will give an error. This is because typescript has already inferred the type of studentId to be an integer(number). If you try to assign a string to studentId will therefore generate an error at compile time. This is referred to as type inference in TypeScript.

const [student, setStudent] = useState(null)
setStudent({
name: 'Antony',
surname: 'Ndungu',
age: 15
})

    This is because TypeScript infers the student object to be of type null and therefore we have to explicitly define the student object and in the useState() hook we have to tell TypeScript user can be either null or student object. This is referred to as Type annotation.

-->2)Union Types:
         This is when you have an object that can be of having different types. For instance you might have const [student, setStudent] = useState<Student | null | boolean>(null). In this case Student | null | boolean are Union Types.
