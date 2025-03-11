const ProfileCard = ({student, deleteStudent}) =>{

    return(
        <>
            <h2>name: {student.name} age: {student.age} hobby: {student.hobby}</h2>
            <button onClick={() => deleteStudent(student.name)}>Delete</button>
        </>
    )

};

export default ProfileCard;