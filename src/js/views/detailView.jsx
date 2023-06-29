import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

const DetailView = () => {
  const { store, actions } = useContext(Context);

  const { id } = useParams();
  const navigate = useNavigate();

  const product = store.donations.find(
    (donation) => donation.id + "" === id + ""
  );
  console.log(product.user_id, store.user.id);

  const openChat = async () => {
    const wanted = await supabase
      .from("rooms")
      .select(`*,messages(*),donations(*),profiles!rooms_user1_id_fkey(*)`)
      .eq(`user2_id`, store.user.id)
      .eq(`donation_id`, product.id)
      .select();

    if (wanted.error) console.log(wanted.error);
    if (wanted.data[0]) {
      navigate(`/chat/${wanted.data[0].id}`);
      return;
    }

    if (wanted.error) console.log(wanted.error);
    const { data, error } = await supabase
      .from("rooms")
      .upsert({
        user1_id: product.profiles.id,
        user2_id: store.user.id,
        donation_id: product.id,
      })
      .select();

    if (error) console.log(error);
    navigate(`/chat/${data[0].id}`);
  };

  return (
    <div className=" container grid p-1 md:place-content-center">
      <div className="product-card h-full bg-secondary md:max-w-[500px]  flow p-5 rounded-lg">
        <div className="header flex justify-between place-items-center">
          <div className="profile flex place-items-center gap-2">
            <Link className="" to={`/profile/${product.profiles.id}`}>
              <img
                className="profleAvatar rounded-full"
                src={product.profiles.avatar_url}
                alt="user-avatar"
                width={45}
                height={45}
              />
              <h5 className="nombre capitalize">
                {product.profiles.full_name}
              </h5>
            </Link>
          </div>
          {product.user_id !== store.user.id ? (
            <div className="contact" onClick={openChat}>
              <Icon
                icon="fluent:chat-16-regular"
                className="cursor-pointer"
                width="40px"
              />
            </div>
          ) : null}
        </div>

        <div className=" relative">
          <img
            className="w-full h-full rounded-lg"
            src={product.image_url}
            alt="product-image"
          />
          <span className="badge badge-primary badge-lg absolute bottom-5 left-5">
            {product.product_status}
          </span>
        </div>
        <div
          className="location flex gap-1  place-items-center justify-end mr-3"
          style={{ "--flow-space": "0.3em" }}
        >
          <p>{product.profiles.city}</p>
          <Icon
            icon="fluent:location-24-regular"
            width={26}
            className="w-fit"
          />
          {/* <p>{product.profile.city}</p> */}
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
