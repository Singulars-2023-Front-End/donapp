import { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const DetailView = () => {
  const { store, actions } = useContext(Context);

  const { id } = useParams();

  const product = store.donations.find((donation) => donation.id === id);

  return (
    <div className=" container grid p-1 md:place-content-center">
      <Link to="/"><Icon icon="carbon:previous-outline" width="30px" /></Link>
      <div className="product-card h-full bg-secondary md:max-w-[500px]  flow p-5 rounded-lg">
        <div className="header flex justify-between place-items-center">
          <div className="profile flex place-items-center gap-2">
            <Icon icon="carbon:user-avatar-filled-alt" width="40px" />
            <h5 className="nombre capitalize">{product.profile.username}</h5>
          </div>
          <div className="contact">
            <Icon icon="fluent:chat-16-regular" width="40px" />
          </div>
        </div>

        <div className=" relative">
          <img
            className="w-full h-full rounded-lg"
            src={product.imageURL}
            alt="product-image"
          />
          <span className="badge badge-primary badge-lg absolute bottom-5 left-5">
            {product.productStatus}
          </span>
        </div>
        <div
          className="location flex gap-1  place-items-center justify-end mr-3"
          style={{ "--flow-space": "0.3em" }}
        >
          <Icon
            icon="fluent:location-24-regular"
            width={26}
            className="w-fit"
          />
          <p>{product.profile.city}</p>
        </div>
        <div className="info">
          <div className="title">
            <h3>{product.name}</h3>
          </div>
          <div className="desc">
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
