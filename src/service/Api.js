//const BASE_API = "http://66.94.120.192:5001";
const BASE_API = "http://192.168.0.62:5000";
//const BASE_API = 'http://192.168.1.8:5001';

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
};
