export const DATA_HOST = "localhost";
export const IMAGES_HOST = "192.168.0.111";
export const CHAT_HOST = "192.168.0.111";
export const DATA_PORT = "8081";
export const IMAGES_PORT = "8080";
export const CHAT_PORT = "8082";

const hosts = ["localhost", "192.168.0.111", "192.168.0.111"];
const ports = ["8081", "8080", "8082"];
const hostNames = ["/teleRadiology", "/images", "/chat"];
export const HttpGet = async (dest, path, token) => {
  try {
    const response = await fetch(
      "http://" + hosts[dest] + ":" + ports[dest] + hostNames[dest] + path,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status == 403 || response.status == 401) {
      // setIsUserLoggedIn(false);
      return "Unauthorized";
    }
    if (!response.ok) {
      throw new Error("Failed to fetch report Viewers");
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching Report Viewers:", error);
    return null;
  }
};

export const HttpPost = async (dest, path, token, reqBody) => {
  try {
    const response = await fetch(
      "http://" + hosts[dest] + ":" + ports[dest] + hostNames[dest] + path,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(reqBody),
      }
    );
    if (response.status == 403 || response.status == 401) {
      return "Unauthorized";
    }
    if (!response.ok) {
      if (response.status == 403) throw new Error(`Failed to fetch`);
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching ", error);
    return null;
  }
};