"use strict";

const imageFile = document.querySelector("#imageFile");
document.addEventListener("DOMContentLoaded", () => {
  imageFile.addEventListener("change", (event) => {
    const files = event.target.files;
    const file = files[0];

    if (file) {
      const reader = new FileReader();
      const previewImage = document.querySelector("#preview");
      reader.onload = (event) => {
        previewImage.src = event.target.result;
      };
      // console.log(reader.onload);
      reader.readAsDataURL(file);
      resizeImageFunc();
    }
  });
});

function resizeImageFunc() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    const filesToUploads = imageFile.files;
    const file = filesToUploads[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const image = document.createElement("img");
        image.src = event.target.result;

        const canvas = document.createElement("canvas");
        let context = canvas.getContext("2d");
        context.drawImage(image, 0, 0);

        const MAX_WIDTH = 400;
        const MAX_HEIGHT = 400;
        let width = image.width;
        let height = image.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;

        context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, width, height);

        const dataurl = canvas.toDataURL(file.type);
        document.querySelector("#output").src = dataurl;
      };
      reader.readAsDataURL(file);
    }
  } else {
    alert("이 파일 형식은 저희 홈페이지에서 지원하지 않는 파일 형식입니다.");
  }
}
