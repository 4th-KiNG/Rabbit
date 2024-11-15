import { useRef } from "react";
import { Image } from "../../";
import { ProfileBannerProps } from "./ProfileBanner.types";
import { useProfile } from "../../../lib/hooks/useProfile";
import { editIco } from "../../../assets";

const ProfileBanner = (props: ProfileBannerProps) => {
  const { banner } = props;
  const { changeBanner } = useProfile();

  const changeBannerRef = useRef<HTMLInputElement>(null);

  const handleBannerChange = () => {
    if (changeBannerRef.current?.files) {
      changeBanner(changeBannerRef.current.files[0]);
    }
  };

  return (
    <>
      <div className="relative">
        <Image
          url={banner}
          className="w-[100%] h-36 object-cover rounded-t-3xl"
        />
        <input
          type="file"
          ref={changeBannerRef}
          onChange={handleBannerChange}
          className="hidden"
        />
        <img
          src={editIco}
          className="absolute bottom-2 right-2 w-8 h-8 max-[700px]:w-4 max-[700px]:h-4"
          onClick={() => changeBannerRef.current?.click()}
          alt=""
        />
      </div>
    </>
  );
};

export default ProfileBanner;
