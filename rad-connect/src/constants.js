export const DATA_HOST = "192.168.0.122";
export const IMAGES_HOST = "192.168.0.122";
export const CHAT_HOST = "192.168.0.122";
export const DATA_PORT = "8081";
export const IMAGES_PORT = "8080";
export const CHAT_PORT = "8082";

const hosts = ["192.168.0.122", "192.168.0.122", "192.168.0.122"];
const ports = ["8081", "8080", "8082"];
const hostNames = ["/teleRadiology", "/images", "/chat"];
export const httpGet = async (dest, path, token) => {
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
