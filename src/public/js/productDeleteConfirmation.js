// const productDeleteConfirmation = (id) => {
//   const userResponse = confirm("are you sure want to delete this product", id);
//   if (userResponse) {
//     fetch(`/delete/${id}`, { method: "delete" })
//       .then((res) => {
//         if (res.ok) {
//           location.reload();
//         }
//       })
//       .catch(err);
//     {
//       res.send(err);
//     }
//   } else {
//     window.alert("Process has been reverted.");
//   }
// };

const productDeleteConfirmation = (id) => {
  const userResponse = confirm("are you sure want to delete this product", id);
  if (userResponse) {
    fetch(`/delete/${id}`)
      .then((res) => {
        if (res.ok) {
          location.refresh();
        }
      })
      .catch(err);
    {
      res.send(err);
    }
  } else {
    window.alert("Process has been reverted.");
  }
};
