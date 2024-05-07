// import React from "react";
// import html2canvas from "html2canvas";

// class ScreenshotButton extends React.Component {
//   takeScreenshot = () => {
//     const element = document.getElementById("layerGroup0");
//     html2canvas(element).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const link = document.createElement("a");
//       link.href = imgData;
//       link.download = "screenshot.png";
//       link.click();
//     });
//   };

//   render() {
//     return <button onClick={this.takeScreenshot}>Save Annotation</button>;
//   }
// }

// export default ScreenshotButton;

import React from "react";
import html2canvas from "html2canvas";

class ScreenshotButton extends React.Component {
  takeScreenshot = async () => {
    const element = document.getElementById("layerGroup0");
    html2canvas(element).then(async (canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Create a FormData object to send the image data URI
      let reqBody = {
        annotatedImage: imgData,
        docUserId: this.props.doctorUserId,
        radUserId: this.props.radiologistUserId,
        reportId: this.props.reportId,
      };

      // Make a POST request to your endpoint
      // fetch("http://localhost:8081/teleRadiology/uploadAnnotation", {
      //   method: "POST",
      //   body: reqBody,
      // })
      //   .then((response) => {
      //     // Handle response if needed
      //   })
      //   .catch((error) => {
      //     // Handle error if needed
      //   });

      try {
        const response = await fetch(
          "http://localhost:8081/teleRadiology/uploadAnnotation",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.props.jwt}`,
            },
            body: JSON.stringify(reqBody),
          }
        );
        if (response.status == 403 || response.status == 401) {
          this.props.logout(false);
        }
        if (!response.ok) {
          if (response.status == 403) throw new Error(`Failed to save`);
        }
        const responseData = await response.json();
        return responseData;
      } catch (error) {
        console.error("Error fetching ", error);
        return null;
      }
    });
  };

  render() {
    return <button onClick={this.takeScreenshot}>Save Annotation</button>;
  }
}

export default ScreenshotButton;
