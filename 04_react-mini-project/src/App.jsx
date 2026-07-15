import Card from "./components/Card.jsx";

function App() {
  const jobsArr = [
    {
      logo: "data:image/png;base64,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",
      companyName: "Google",
      days: 7,
      jobRole: "Senior SW Developer",
      tags: "Full Time",
      salary: 25,
      location: "Noida, India",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaL-7RRx5SW9qx4AJw4mjQHfar35O2ScabD2zkXUV8kg&s=10",
      companyName: "Amazon",
      days: 4,
      jobRole: "Data Analytics",
      tags: "WFH",
      salary: 15,
      location: "Banglore, India",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJm8hC2tO7veDcOR-uEEKXnpBNamiosUqoR4tYrr9NFA&s=10",
      companyName: "Flipkart",
      days: 13,
      jobRole: "Ui/Ux Designer",
      tags: "Full Time",
      salary: 23,
      location: "Hydrabad, India",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRow20Wh97BAPuAAsg-qJXNddlyCWnBpEG-ww6-dwxrAg&s=10",
      companyName: "TCS",
      days: 13,
      jobRole: "System Engineer",
      tags: "Full Time",
      salary: 9,
      location: "Kolkata, India",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRduZVNLg_kNGvgZhtdv15W3OLpOKwMUPlEp-PD-yQXHA&s=10",
      companyName: "Apple",
      days: 3,
      jobRole: "Softwere Engineer",
      tags: "Full Time",
      salary: 49,
      location: "Pune, India",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJm8hC2tO7veDcOR-uEEKXnpBNamiosUqoR4tYrr9NFA&s=10",
      companyName: "Flipkart",
      days: 13,
      jobRole: "Ui/Ux Designer",
      tags: "Full Time",
      salary: 23,
      location: "Hydrabad, India",
    },
  ];

  return jobsArr.map((jobs) => {
    return (
      <Card
        logo={jobs.logo}
        companyName={jobs.companyName}
        days={jobs.days}
        jobRole={jobs.jobRole}
        tags={jobs.tags}
        salary={jobs.salary}
        location={jobs.location}
      />
    );
  });
}

export default App;
