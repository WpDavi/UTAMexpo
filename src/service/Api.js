//const BASE_API = "http://66.94.120.192:5001";
//const BASE_API = "http://192.168.0.62:5000";
const BASE_API = 'http://192.168.1.8:5000';
import * as FileSystem from "expo-file-system";

export default {
  signIn: async (email, senha) => {
    const req = await fetch(`${BASE_API}/loginUser`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password: senha,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await req.json();
    return json;
  },
  cadastro: async (name, email, password, fone, blood) => {
    console.log(name, email, password, fone, blood);
    const req = await fetch(`${BASE_API}/user`, {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
        fone,
        blood,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await req.json();
    return json;
  },
  getPost: async () => {
    const req = await fetch(`${BASE_API}/posts`, {
      method: "GET",
    });
    const json = await req.json();
    return json;
  },

  UplodPost: async (image) => {
    console.log(image, "aaaaaaaaaaaaa");
    try {
      const response = await FileSystem.uploadAsync(
        `${BASE_API}/uplouds`,
        image,
        {
          fieldName: "post",
          httpMethod: "POST",
          uploadType: FileSystem.FileSystemUploadType.MULTIPART,
          headers: {
            Accept: "application/json",
            email: "wpdavi@hotmail.com",
            name: "davi",
            status: "teste",
          },
        }
      );
      console.log(JSON.stringify(response, null, 4));
    } catch (error) {
      console.log(error);
    }
  },
};
