const login = async (body) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const res = await fetch("http://localhost:1337/api/auth/local", options);
  const json = await res.json();

  if (res.ok) {
    return json;
  }

  throw new Error(json.error.message);
};

export default login;
