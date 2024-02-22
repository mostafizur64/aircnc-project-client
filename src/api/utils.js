// upload image in IMBB=============

export const imageUpload = async (image) => {
  //  image upload =========

  const formData = new FormData();
  formData.append("image", image);

  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMGBB_KEY
  }`;

  const response = await fetch(url, {
    method: "post",
    body: formData,
  });
  const data = await response.json();
  return data;
};
