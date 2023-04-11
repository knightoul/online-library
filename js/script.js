window.onload = () => {
  console.log("Hello, World!");
  document.querySelectorAll(".user-portal").forEach((e) => {
    e.addEventListener("click", (element) => {
      if (element.target.id === "login") {
        console.log("login click");
        /* - TODO Open Login Window - */
      } else if (element.target.id === "signup") {
        console.log("signup click");
        /* - TODO Open Sign Up Window - */
      }
    });
  });
};
