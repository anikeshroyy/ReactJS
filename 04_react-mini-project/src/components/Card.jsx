import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-nav">
        <div className="logo">
          <img src={props.logo} alt={props.companyName} />
        </div>
        <div className="save-icon">
          <p>
            Save <Bookmark />
          </p>
        </div>
      </div>

      <div className="card-content">
        <div className="company-name">
          <h2>{props.companyName}</h2>
          <p>{props.days} Days Ago</p>
        </div>
        <div className="job-role">
          <h2>{props.jobRole}</h2>
        </div>
        <div className="tags">
          <p>{props.tags}</p>
          <p>{props.salary} LPA</p>
        </div>
      </div>

      <div className="card-footer">
        <div className="salary-location">
          <h3>{props.salary} LPA</h3>
          <p>{props.location}</p>
        </div>
        <div className="apply-btn">
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
