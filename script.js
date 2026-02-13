let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let data = JSON.parse(this.responseText);
    let container = document.getElementById("repos");

    data.forEach(repo => {
      let box = document.createElement("div");
      box.className = "repo-box";

      box.innerHTML = `
        <h3>${repo.name}</h3>
        <p><strong>Language:</strong> ${repo.language}</p>
        <p><strong>Stars:</strong> ⭐ ${repo.stargazers_count}</p>
        <a href="${repo.html_url}" target="_blank">Open Repo</a>
      `;

      container.appendChild(box);
    });
  }
};
