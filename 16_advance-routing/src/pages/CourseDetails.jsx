import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const params = useParams();

  return (
    <div className="heading">
      <h1>{params.courseId} Course Detail Page</h1>
    </div>
  );
};

export default CourseDetails;
