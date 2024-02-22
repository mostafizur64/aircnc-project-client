import React, { useContext, useState } from "react";
import AddRoomForm from "../../Components/Form/AddRoomForm";
import { imageUpload } from "../../api/utils";
import { AuthContext } from "../../providers/AuthProvider";
import { addRoom } from "../../api/room";
import toast from "react-hot-toast";

const AddRoom = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const location = event.target.location.value;
    const title = event.target.title.value;
    const from = dates.startDate;
    const to = dates.endDate;
    const price = event.target.price.value;
    const total_guest = event.target.total_guest.value;
    const bedrooms = event.target.bedrooms.value;
    const bathrooms = event.target.bathrooms.value;
    const description = event.target.description.value;
    const category = event.target.category.value;

    const image = event.target.image.files[0];

    imageUpload(image)
      .then((data) => {
        const roomData = {
          location,
          title,
          from,
          to,
          price: parseFloat(price),
          total_guest,
          bedrooms,
          bathrooms,
          description,
          image: data.data.display_url,
          category,
          host: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
        };
        addRoom(roomData)
          .then((data) => {
            console.log(data);
            toast.success("Room added Successfully!");
          })
          .catch((err) => console.log(err));

        setLoading(false);
      })
      .catch((error) => {
        console.log(error), setLoading(false);
      });
  };

  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };
  const handleDates = (ranges) => {
    setDates(ranges.selection);
  };
  return (
    <div>
      <AddRoomForm
        handleSubmit={handleSubmit}
        loading={loading}
        handleImageChange={handleImageChange}
        uploadButtonText={uploadButtonText}
        dates={dates}
        handleDates={handleDates}
      />
    </div>
  );
};

export default AddRoom;
