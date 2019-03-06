import React, { Component } from "react";

class UploadImage extends Component {
  handleClick = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: "araalifarooq",
        upload_preset: "y30srcqp",
        cropping: true,
        folder: "widgetdocs",
        sources: [
          "local",
          "url",
          "camera",
          "facebook",
          "dropbox",
          "search",
          "instagram"
        ]
      },
      (error, result) => {
        if (result.event === "success") {
          let newImage = result.info.secure_url;
          window.localStorage.setItem("newImage", newImage);
        }
      }
    );
  };

  render() {
    return (
      <button
        type="button"
        className="btn btn-primary btn-md ml-4"
        id="upload_image"
        onClick={this.handleClick}
      >
        Upload Image
      </button>
    );
  }
}

export default UploadImage;
