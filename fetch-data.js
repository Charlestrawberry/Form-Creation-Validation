async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const users = await response.json();

    dataContainer.innerHTML = "";
    const userList = document.createElement("ul");
    users.forEach((user) => {
      const listItems = document.createElement("li");
      listItems.textContent = user.name;
      userList.appendChild(listItems);
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    console.error("Error fetching data: ", error);
    dataContainer.innerHTML = "Failed to load user data";
  }
}

document.addEventListener("DOMContentLoaded", fetchUserData);
