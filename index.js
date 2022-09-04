// This is to get data from api.

console.log("To Fetch the data click the fetch button.");
let dataToshow = document.getElementById("output");
let heading = document.querySelector(".heading");
let headingError = document.querySelector(".heading-error");
let btn = document.getElementById("btn");

let data = document
  .getElementById("btn")
  .addEventListener("click", async () => {
    try {
      let url = "https://random-data-api.com/api/v2/users";
      await fetch(url)
        //First is that promise is in the pending state. Once the api response is sucessful.
        .then((resp) => {
          let jsonData = resp.json();
          return jsonData;
        })
        // if the data is successfully fetch the data the
        .then((data) => {
          console.log(JSON.stringify(data));

          let table = `
          <table>
          <tr>
          <td>ID</td>
          <td>First Name</td>
          <td>Last Name</td>
          <td>E-Mail</td>
          <td>Avatar</td>
          </tr>
          <tr>
          <td>${data.id}</td>
          <td>${data.first_name}</td>
          <td>${data.last_name}</td>
          <td>${data.email}</td>
          <td><img src = "${data.avatar}"></td>
          </tr>
          </table> `;
          dataToshow.innerHTML = table;

          setTimeout(() => {
            console.log("Fetched data Sucessfully!");
          }, 2000);
        });
    } catch (error) {
      // if the data caught some error then move to reject state.

      heading = "Not Found Page";
      headingError.innerHTML = heading;
    }
  });

// To post the data of api
