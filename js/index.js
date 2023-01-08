import customerlistdata from "../data/userlist.json" assert { type: "json" };

let clientType = "Any";
let statusType = "Any";
let beginDate = "";
let endDate = "";

const statusTypes = {
  Draft: "pink-pill",
  Paid: "blue-pill",
  PartialPayment: "violet-pill",
};

window.addEventListener("load", () => {
  const beginDateElement = document.querySelector("#beginDate");
  const endDateElement = document.querySelector("#endDate");

  const maxDate = new Date(
    Math.max(
      ...customerlistdata.map((element) => {
        return new Date(element.date);
      })
    )
  );
  const minDate = new Date(
    Math.min(
      ...customerlistdata.map((element) => {
        return new Date(element.date);
      })
    )
  );
  beginDateElement.value = minDate.toISOString().split("T")[0];
  endDateElement.value = maxDate.toISOString().split("T")[0];
  beginDate = minDate.toISOString();
  endDate = maxDate.toISOString();
  console.log({ beginDate }, { endDate });
});
const customerDatalistContainerElement = document.querySelector(
  "#customer-datalist-container"
);

const statusTypeElement = document.querySelector("#statustype");
const clientTypeElement = document.querySelector("#clienttype");
const beginDateElement = document.querySelector("#beginDate");
const endDateElement = document.querySelector("#endDate");
const sortByStatusElement = document.querySelector("#sort-by-status");
const sortByBalanceElement = document.querySelector("#sort-by-balance");
const sortByTotalElement = document.querySelector("#sort-by-total");
const sortByDueDateElement = document.querySelector("#sort-by-duedate");
const sortByDateElement = document.querySelector("#sort-by-date");
const sortByNameElement = document.querySelector("#sort-by-name");
const sortByIDElement = document.querySelector("#sort-by-id");

let isSortByStatus = true;
let isSortByBalance = true;
let isSortByTotal = true;
let isSortByDueDate = true;
let isSortByDate = true;
let isSortByName = true;
let isSortByID = true;

const sortByStatus = () => {
  isSortByStatus = !isSortByStatus;

  if (isSortByStatus) {
    sortByStatusElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
  </svg>`;
  } else {
    sortByStatusElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
  </svg>`;
  }

  let result = isSortByStatus
    ? customerlistdata.sort((a, b) =>
        a.status.localeCompare(b.status.localeCompare)
      )
    : customerlistdata.sort((a, b) =>
        b.status.localeCompare(a.status.localeCompare)
      );

  customerDatalistContainerElement.innerHTML = "";
  renderlist(result);
};

const sortByBalance = () => {
  isSortByBalance = !isSortByBalance;

  if (isSortByBalance) {
    sortByBalanceElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
  </svg>`;
  } else {
    sortByBalanceElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
  </svg>`;
  }

  let result = isSortByBalance
    ? customerlistdata.sort((a, b) => a.balance - b.balance)
    : customerlistdata.sort((a, b) => b.balance - a.balance);

  customerDatalistContainerElement.innerHTML = "";
  renderlist(result);
};

const sortByTotal = () => {
  isSortByTotal = !isSortByTotal;

  if (isSortByTotal) {
    sortByTotalElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
  </svg>`;
  } else {
    sortByTotalElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
  </svg>`;
  }

  let result = isSortByTotal
    ? customerlistdata.sort((a, b) => a.total - b.total)
    : customerlistdata.sort((a, b) => b.total - a.total);

  customerDatalistContainerElement.innerHTML = "";
  renderlist(result);
};

const sortByDueDate = () => {
  isSortByDueDate = !isSortByDueDate;

  if (isSortByDueDate) {
    sortByDueDateElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
  </svg>`;
  } else {
    sortByDueDateElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
  </svg>`;
  }

  let result = isSortByDueDate
    ? customerlistdata.sort(
        (a, b) => new Date(a.duedate).getTime() - new Date(b.duedate).getTime()
      )
    : customerlistdata.sort(
        (a, b) => new Date(b.duedate).getTime() - new Date(a.duedate).getTime()
      );

  customerDatalistContainerElement.innerHTML = "";
  renderlist(result);
};

const sortByDate = () => {
  isSortByDate = !isSortByDate;

  if (isSortByDate) {
    sortByDateElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
  </svg>`;
  } else {
    sortByDateElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
  </svg>`;
  }

  let result = isSortByDate
    ? customerlistdata.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      )
    : customerlistdata.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

  customerDatalistContainerElement.innerHTML = "";
  renderlist(result);
};

const sortByName = () => {
  isSortByName = !isSortByName;

  if (isSortByName) {
    sortByNameElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
  </svg>`;
  } else {
    sortByNameElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
  </svg>`;
  }

  let result = isSortByName
    ? customerlistdata.sort((a, b) => a.clientname.localeCompare(b.clientname))
    : customerlistdata.sort((a, b) => b.clientname.localeCompare(a.clientname));

  customerDatalistContainerElement.innerHTML = "";
  renderlist(result);
};

const sortByID = () => {
  isSortByID = !isSortByID;

  if (isSortByID) {
    sortByIDElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
  </svg>`;
  } else {
    sortByIDElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
  </svg>`;
  }

  let result = isSortByID
    ? customerlistdata.sort((a, b) => a.invoiceid - b.invoiceid)
    : customerlistdata.sort((a, b) => b.invoiceid - a.invoiceid);

  customerDatalistContainerElement.innerHTML = "";
  renderlist(result);
};

sortByStatusElement.addEventListener("click", sortByStatus);
sortByBalanceElement.addEventListener("click", sortByBalance);
sortByTotalElement.addEventListener("click", sortByTotal);
sortByDueDateElement.addEventListener("click", sortByDueDate);
sortByDateElement.addEventListener("click", sortByDate);
sortByNameElement.addEventListener("click", sortByName);
sortByIDElement.addEventListener("click", sortByID);

let clientTypeData, statusTypeData, beginDateTypeData, endDateTypeData;

const compose = (data) => {
  return (cltype) => {
    if (cltype === "Any") {
      console.log("me");
      clientTypeData = data;
    } else {
      clientTypeData = data.filter(
        (customerlist) => customerlist.status === cltype
      );
    }
    return (stype) => {
      if (stype === "Any") {
        statusTypeData = clientTypeData;
      } else {
        statusTypeData = clientTypeData.filter(
          (customerlist) => customerlist.clienttype === stype
        );
      }

      return (startdate) => {
        if (!startdate) {
          beginDateTypeData = statusTypeData;
        } else {
          beginDateTypeData = customerlistdata.filter((d) => {
            let time = new Date(d.duedate).getTime();
            return (
              new Date(startdate).getTime() < time &&
              time < new Date(endDate).getTime()
            );
          });
        }

        return (enddate) => {
          if (!enddate) {
            endDateTypeData = beginDateTypeData;
          } else {
            endDateTypeData = customerlistdata.filter((d) => {
              let time = new Date(d.duedate).getTime();
              return (
                new Date(startdate).getTime() < time &&
                time < new Date(enddate).getTime()
              );
            });
          }
          return statusTypeData;
        };
      };
    };
  };
};

clientTypeElement.addEventListener("change", (e) => {
  console.log(e.target.value);
  clientType = e.target.value;

  customerDatalistContainerElement.innerHTML = "";
  customerDatalistContainerElement.innerHTML += compose(customerlistdata)(
    statusType
  )(clientType)(beginDate)(endDate).map(
    (data) => `<div class="row py-4 border-bottom">
        <div class="col-1 d-flex justify-content-center align-content-lg-center">
          <span class="text-blue">${data.invoiceid}</span>
        </div>
        <div class="col-3 d-flex justify-content-center align-content-lg-center">
          <span class="text-blue">${data.clientname}</span>
        </div>
        <div class="col-2 d-flex justify-content-center align-content-lg-center">
          <span class="text-gray">${data.date.split("T")[0]}</span>
        </div>
        <div class="col-2 d-flex justify-content-center align-content-lg-center">
          <span class="text-gray">${data.duedate.split("T")[0]}</span>
        </div>
        <div class="col-1 d-flex justify-content-center align-content-lg-center">
          <span class="text-pink">$${data.balance}</span>
        </div>
        <div class="col-1 d-flex justify-content-center align-content-lg-center">
          <span class="text-pink">$${data.total}</span>
        </div>
        <div class="col-2 d-flex justify-content-center align-content-lg-center">
          <span class=${statusTypes[data.status]}>${data.status}</span>
        </div>
      </div>`
  );
});

beginDateElement.addEventListener("change", (e) => {
  beginDate = e.target.value;

  customerDatalistContainerElement.innerHTML = "";
  customerDatalistContainerElement.innerHTML += compose(customerlistdata)(
    statusType
  )(clientType)(beginDate)(endDate).map(
    (data) => `<div class="row py-4 border-bottom">
        <div class="col-1 d-flex justify-content-center align-content-lg-center">
          <span class="text-blue">${data.invoiceid}</span>
        </div>
        <div class="col-3 d-flex justify-content-center align-content-lg-center">
          <span class="text-blue">${data.clientname}</span>
        </div>
        <div class="col-2 d-flex justify-content-center align-content-lg-center">
          <span class="text-gray">${data.date.split("T")[0]}</span>
        </div>
        <div class="col-2 d-flex justify-content-center align-content-lg-center">
          <span class="text-gray">${data.duedate.split("T")[0]}</span>
        </div>
        <div class="col-1 d-flex justify-content-center align-content-lg-center">
          <span class="text-pink">$${data.total}</span>
        </div>
        <div class="col-1 d-flex justify-content-center align-content-lg-center">
          <span class="text-pink">$${data.balance}</span>
        </div>
        <div class="col-2 d-flex justify-content-center align-content-lg-center">
          <span class=${statusTypes[data.status]}>${data.status}</span>
        </div>
      </div>`
  );
});

endDateElement.addEventListener("change", (e) => {
  endDate = e.target.value;
  customerDatalistContainerElement.innerHTML = "";
  customerDatalistContainerElement.innerHTML += compose(customerlistdata)(
    statusType
  )(clientType)(beginDate)(endDate).map(
    (data) => `<div class="row py-4 border-bottom">
        <div class="col-1 d-flex justify-content-center align-content-lg-center">
          <span class="text-blue">${data.invoiceid}</span>
        </div>
        <div class="col-3 d-flex justify-content-center align-content-lg-center">
          <span class="text-blue">${data.clientname}</span>
        </div>
        <div class="col-2 d-flex justify-content-center align-content-lg-center">
          <span class="text-gray">${data.date.split("T")[0]}</span>
        </div>
        <div class="col-2 d-flex justify-content-center align-content-lg-center">
          <span class="text-gray">${data.duedate.split("T")[0]}</span>
        </div>
        <div class="col-1 d-flex justify-content-center align-content-lg-center">
          <span class="text-pink">$${data.total}</span>
        </div>
        <div class="col-1 d-flex justify-content-center align-content-lg-center">
          <span class="text-pink">$${data.balance}</span>
        </div>
        <div class="col-2 d-flex justify-content-center align-content-lg-center">
          <span class=${statusTypes[data.status]}>${data.status}</span>
        </div>
      </div>`
  );
});

statusTypeElement.addEventListener("change", (e) => {
  statusType = e.target.value;

  customerDatalistContainerElement.innerHTML = "";
  customerDatalistContainerElement.innerHTML += compose(customerlistdata)(
    statusType
  )(clientType)(beginDate)(endDate).map(
    (data) => `<div class="row py-4 border-bottom">
        <div class="col-1 d-flex justify-content-center align-content-lg-center">
          <span class="text-blue">${data.invoiceid}</span>
        </div>
        <div class="col-3 d-flex justify-content-center align-content-lg-center">
          <span class="text-blue">${data.clientname}</span>
        </div>
        <div class="col-2 d-flex justify-content-center align-content-lg-center">
          <span class="text-gray">${data.date.split("T")[0]}</span>
        </div>
        <div class="col-2 d-flex justify-content-center align-content-lg-center">
          <span class="text-gray">${data.duedate.split("T")[0]}</span>
        </div>
        <div class="col-1 d-flex justify-content-center align-content-lg-center">
          <span class="text-pink">$${data.total}</span>
        </div>
        <div class="col-1 d-flex justify-content-center align-content-lg-center">
          <span class="text-pink">$${data.balance}</span>
        </div>
        <div class="col-2 d-flex justify-content-center align-content-lg-center">
          <span class=${statusTypes[data.status]}>${data.status}</span>
        </div>
      </div>`
  );
});

const renderlist = (data) => {
  for (let index = 0; index < data.length; index++) {
    customerDatalistContainerElement.innerHTML += `<div class="row py-4 border-bottom">
          <div class="col-1 d-flex justify-content-center align-content-lg-center">
            <span class="text-blue">${customerlistdata[index].invoiceid}</span>
          </div>
          <div class="col-3 d-flex justify-content-center align-content-lg-center">
            <span class="text-blue">${customerlistdata[index].clientname}</span>
          </div>
          <div class="col-2 d-flex justify-content-center align-content-lg-center">
            <span class="text-gray">${
              customerlistdata[index].date.split("T")[0]
            }</span>
          </div>
          <div class="col-2 d-flex justify-content-center align-content-lg-center">
            <span class="text-gray">${
              customerlistdata[index].duedate.split("T")[0]
            }</span>
          </div>
          <div class="col-1 d-flex justify-content-center align-content-lg-center">
            <span class="text-pink">$${customerlistdata[index].total}</span>
          </div>
          <div class="col-1 d-flex justify-content-center align-content-lg-center">
            <span class="text-pink">$${customerlistdata[index].balance}</span>
          </div>
          <div class="col-2 d-flex justify-content-center align-content-lg-center">
            <span class=${statusTypes[customerlistdata[index].status]}>${
      customerlistdata[index].status
    }</span>
          </div>
        </div>`;
  }
};

renderlist(customerlistdata);
