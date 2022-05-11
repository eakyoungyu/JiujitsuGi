export interface IBrands {
  name: string;
  link: string;
  description: string;
  first_photo: string;
}

export function GetBrandsApi() {
  const apiUrl = "http://127.0.0.1:8000/brand/api/";
  // const apiUrl = "http://127.0.0.1/brand/api/";
  // return fetch(apiUrl)
  //   .then((res) => {
  //     if (res.ok) {
  //       return res.json();
  //     }
  //     throw new Error("Network response was not ok");
  //   })
  //   .then((data) => {
  //     console.log(JSON.stringify(data));
  //   })
  //   .catch((error) => {
  //     console.log(`error:${error}`);
  //   });
  return fetch(apiUrl).then((res) => res.json());
}
