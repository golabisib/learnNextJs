import { useRouter } from "next/router"

function CourseDetail() {
    const router = useRouter()
    const {studentid, courseid} = router.query;
  return (
    <div>
        <h1>Courses detail #{courseid} for student #{studentid}</h1>
    </div>
  )
}

export default CourseDetail
