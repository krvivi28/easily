import {
  addNewApplicant,
  createNewJob,
  findJobById,
  getAllJobs,
  sendAllApplicants,
} from "../models/job.model.js";

export default class JobControl {
  renderLandingPage = (req, res) => {
    res.render("landing-page", { user: req.session.user });
  };
  getJobs = (req, res) => {
    let jobs = getAllJobs();
    res.render("list-all-jobs", { jobs, user: req.session.user });
    // res.render("product", { products, userEmail: req.session.userEmail });
  };
  newjob = (req, res) => {
    createNewJob(req.body);
    res.redirect("/jobs");
  };
  renderJobForm = (req, res) => {
    res.render("new-job", { user: req.session.user });
  };
  findJobById = (req, res) => {
    const id = req.params.id;
    const jobaData = findJobById(id);
    // console.log(jobaData);
    res.render("job-details", { data: jobaData, user: req.session.user });
    // res.send(id);
  };
  newApplicant = (req, res) => {
    const id = req.params.id;
    const { name, email, contact } = req.body;
    const resumePath = req.file.path;
    console.log(name, contact, email, resumePath);
    const resp = addNewApplicant(id, name, email, contact, resumePath);
    res.redirect("/jobs");
  };
  allApplicants = (req, res) => {
    const id = req.params.id;
    const resp = sendAllApplicants(id);
    res.render("all-applicants", {
      allApplicants: resp,
      user: req.session.user,
    });
  };
  // listProduct = (req, res) => {
  //   const inputData = { name: null, price: null, img: null, desc: null };
  //   res.render("add_product", {
  //     error: null,
  //     inputData,
  //   });
  // };
  // addProduct = (req, res) => {
  //   const { name, desc, price, img } = req.body;
  //   const uploadFileName = req.file.filename;
  //   console.log(uploadFileName);
  //   let id = productModel.fetchProducts().length + 1;
  //   let newProduct = { id, name, desc, price, img, uploadFileName };
  //   productModel.setProduct(newProduct);
  //   res.redirect("/");
  // };
  // renderUpdateProduct = (req, res) => {
  //   const id = req.params.id;
  //   const findProductResult = productModel.findProduct(id);
  //   if (!findProductResult) {
  //     res.send({ status: false, message: `product with ${id} does't exist` });
  //   }
  //   res.render("update_product", {
  //     error: null,
  //     inputData: findProductResult,
  //     userEmail: req.session.userEmail,
  //   });
  // };
  // updateProduct = (req, res) => {
  //   const updatedProducts = productModel.updateProduct(req.body);
  //   res.render("product", {
  //     products: updatedProducts,
  //     userEmail: req.session.userEmail,
  //   });
  // };
  // deleteproduct = (req, res) => {
  //   const id = req.params.id;
  //   const updatedproduct = productModel.deleteProduct(id);
  //   res.render("product", {
  //     products: updatedproduct,
  //     userEmail: req.session.userEmail,
  //   });
  // };
}
