export const basicAuthorizer = async (event) => {
  const { Authorization } = event.headers;

  const utf8Password = Buffer.from(Authorization.replace("Basic ", ""), "base64").toString("utf8");
  const [user, password] = utf8Password.split(":");

  const isValid = process.env.AliaksandrBaryskin === password;

  return {
    principalId: "user",
    policyDocument: {
      Version: "2012-10-17",
      Statement: [
        {
          Action: "execute-api:Invoke",
          Effect: isValid ? "Allow" : "Deny",
          Resource: '*',
        },
      ],
    },
  };
};
