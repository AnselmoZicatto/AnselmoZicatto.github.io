export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    const href = event.target.getAttribute("href");
    console.log("Navigating to:", href);
    const currentPath = window.location.pathname;

    let newPath;
    if (currentPath.startsWith("/pesqueiros") && href.startsWith("/pesqueiros")) {
      newPath = `/pesqueiros${href.substring("/pesqueiros".length)}`;
    } else {
      newPath = currentPath.startsWith("/pesqueiros") ? href : `/pesqueiros${href}`;
    }

    window.history.pushState({}, "", newPath);
    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes["/pesqueiros/404"];

    fetch(route)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${route}`);
        }
        return response.text();
      })
      .then((html) => {
        document.querySelector("#change").innerHTML = html;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

// export class Router {
//   routes = {};

//   add(routeName, page) {
//     this.routes[routeName] = page;
//   }

//   route(event) {
//     event = event || window.event;
//     event.preventDefault();

//     const href = event.target.getAttribute("href");
//     console.log("Navigating to:", href);
//     window.history.pushState({}, "", href);

//     this.handle();
//   }

//   handle() {
//     const { pathname } = window.location;
//     const route = this.routes[pathname] || this.routes[404];

//     fetch(route)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Failed to fetch ${route}`);
//         }
//         return response.text();
//       })
//       .then((html) => {
//         document.querySelector("#change").innerHTML = html;
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
// }
// console.log('está rodando');
// const router = new Router();
// router.add("/pesqueiros/delevatti", "delevatti.html");
// router.add("/pesqueiros/geraldino", "geraldino.html");
// router.add("/pesqueiros/kielbowicz", "kielbowicz.html");

// router.handle();

// window.onpopstate = () => router.handle();
// window.route = () => router.route();
