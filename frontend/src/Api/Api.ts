export interface IBrands {
  name: string;
  link: string;
  description: string;
  first_photo: string;
}

export function GetBrandsApi() {
  const apiUrl = "http://127.0.0.1:8000/brand/api/";
  return fetch(apiUrl).then((res) => res.json());
}
