import Cookies from "js-cookie";

export const BASE_URL = process.env.REACT_APP_SERVER_URL + "/graphql";

class Auth {
  getCipher(): string | null {
    return Cookies.get("application-cipher") || null;
  }

  setCipher(token: string): void {
    Cookies.set("application-cipher", token, { expires: 1 }); // expire 24 hours
  }

  clearCipher(): void {
    Cookies.remove("application-cipher");
  }
}

const auth = new Auth();

export default auth;
