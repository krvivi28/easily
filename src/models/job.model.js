let db_id = 1;
const jobs = [
  {
    id: db_id,
    job_category: "Tech",
    job_designation: "SDE",
    job_location: "gurgao HR IND",
    company_name: "Coding Ninjas",
    salary: "14-20lpa",
    apply_by: "30 Aug 2023",
    skills_required: [
      "REACT",
      "NodeJs",
      "JS",
      "SQL",
      "MongoDB",
      "Express",
      "AWS",
    ],
    number_of_openings: 5,
    job_posted: new Date().toLocaleString(),
    applicants: [
      {
        applicat_id: 1,
        name: "vivek",
        email: "krvivi28@gmail.com",
        contact: 7839358367,
        resumePath: "uploads/vivekResume.pdf",
      },
    ],
  },
  {
    id: db_id,
    job_category: "Tech",
    job_designation: "SDE",
    job_location: "gurgao HR IND",
    company_name: "Coding Ninjas",
    salary: "14-20lpa",
    apply_by: "30 Aug 2023",
    skills_required: [
      "REACT",
      "NodeJs",
      "JS",
      "SQL",
      "MongoDB",
      "Express",
      "AWS",
    ],
    number_of_openings: 5,
    job_posted: new Date().toLocaleString(),
    applicants: [],
  },
  {
    id: db_id,
    job_category: "Tech",
    job_designation: "SDE",
    job_location: "gurgao HR IND",
    company_name: "Coding Ninjas",
    salary: "14-20lpa",
    apply_by: "30 Aug 2023",
    skills_required: [
      "REACT",
      "NodeJs",
      "JS",
      "SQL",
      "MongoDB",
      "Express",
      "AWS",
    ],
    number_of_openings: 5,
    job_posted: new Date().toLocaleString(),
    applicants: [],
  },
];
class PostNewJob {
  constructor(
    job_category,
    job_designation,
    job_location,
    company_name,
    salary,
    apply_by,
    skills_required,
    number_of_openings
  ) {
    this.id = ++db_id;
    this.job_category = job_category;
    (this.job_designation = job_designation),
      (this.job_location = job_location),
      (this.company_name = company_name);
    this.salary = salary;
    this.apply_by = apply_by;
    this.skills_required = skills_required;
    this.number_of_openings = number_of_openings;
    this.job_posted = new Date().toLocaleString;
    this.applicants = [];
  }
}
export const createNewJob = (job_details) => {
  const {
    job_category,
    job_designation,
    job_location,
    company_name,
    salary,
    apply_by,
    skills_required,
    number_of_openings,
  } = job_details;
  const job = new PostNewJob(
    job_category,
    job_designation,
    job_location,
    company_name,
    salary,
    apply_by,
    skills_required,
    number_of_openings
  );
  jobs.push(job);
};
export const getAllJobs = () => {
  return jobs;
};
export const findJobById = (id) => {
  return jobs.find((job) => {
    return job.id == id;
  });
};

export const addNewApplicant = (id, ...applicantData) => {
  const index = jobs.findIndex((job) => {
    return job.id == id;
  });
  console.log(index);
  let applicantId = jobs[index].applicants.length + 1;
  jobs[index].applicants.push({
    applicat_id: applicantId,
    name: applicantData[0],
    email: applicantData[1],
    contact: applicantData[2],
    resumePath: applicantData[3],
  });
  return jobs[index].applicants;
};

export const sendAllApplicants = (id) => {
  const index = jobs.findIndex((job) => {
    return job.id == id;
  });
  return jobs[index].applicants;
};
// createNewJob({
//   job_category: "Tech",
//   job_designation: "NodeJs SME",
//   job_location: "gurgao HR IND",
//   company_name: "Coding Ninjas",
//   salary: "14-20lpa",
//   apply_by: "30 Aug 2023",
//   skills_required: ["NodeJs,Angular"],
//   number_of_openings: 5,
//   job_posted: new Date().toLocaleString(),
//   applicants: [],
// });
// createNewJob({
//   job_category: "Tech",
//   job_designation: "NodeJs SME",
//   job_location: "gurgao HR IND",
//   company_name: "Coding Ninjas",
//   salary: "14-20lpa",
//   apply_by: "30 Aug 2023",
//   skills_required: ["NodeJs,Angular"],
//   number_of_openings: 5,
//   job_posted: new Date().toLocaleString(),
//   applicants: [],
// });
// for (let job of jobs) {
//   console.log(job.skills_required);
// }
// export default class ProductModel {
//   fetchProducts = () => {
//     return products;
//   };
//   setProduct = (product) => {
//     new ProductData(
//       product.id,
//       product.name,
//       product.desc,
//       product.price,
//       product.img,
//       product.uploadFileName
//     );
//   };
//   findProduct = (id) => {
//     return products.find((product) => {
//       return product.id == id;
//     });
//   };
//   updateProduct = (data) => {
//     const id = data.id;
//     return ProductData.productsList.map((product) => {
//       return product.id === Number(id) ? data : product;
//     });
//   };
//   deleteProduct = (id) => {
//     const delIndex = products.findIndex((product) => {
//       return product.id === id;
//     });
//     products.splice(delIndex, 1);
//     return products;
//   };
// }
