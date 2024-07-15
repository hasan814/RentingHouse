import Buttons from "@/elements/Buttons";
import { useRegisterModal } from "@/hooks/useRegisterModal";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const FooterContent = () => {
  // ============= Regsiter ===========
  const registerModal = useRegisterModal();

  // ============= Rendering ===========
  return (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Buttons
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Buttons
        outline
        label="Continue with Github"
        icon={BsGithub}
        onClick={() => {}}
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex flex-row items-center justify-center gap-2">
          <div>Already have an account?</div>
          <div
            className="text-neutral-800 cursor-pointer hover:underline"
            onClick={registerModal.onClose}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
