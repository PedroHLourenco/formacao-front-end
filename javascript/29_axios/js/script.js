// aula 418 - instalação do Axios
console.log(axios);

// aula 419 - requests no axios
const getData = async () => {
  try {
    const response = await postsFetch.get(
      "/users",
      // aula 421 - configurando headers
      {
        headers: {
          "Content-Type": "application/json",
          custom: "header",
        },
      }
    );

    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

getData();

// aula 420 - imprimindo dados da API
const container = document.querySelector("#user-container");

const printData = async () => {
  const data = await getData();

  console.log(data);

  data.forEach((user) => {
    const div = document.createElement("div");

    const nameElement = document.createElement("h2");

    nameElement.textContent = user.name;

    div.appendChild(nameElement);

    const emailElement = document.createElement("p");

    emailElement.textContent = user.email;

    div.appendChild(emailElement);

    container.appendChild(div);
  });
};

printData();

// aula 422 - post
const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  postsFetch.post("/posts", {
    title: titleInput.value,
    body: bodyInput.value,
    userId: 1,
  });
});
