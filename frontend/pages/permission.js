import PleaseSignIn from "../components/PleaseSignin";
import Permissions from "../components/Permissions";

export default function PermissionsPage() {
  return (
    <div>
      <PleaseSignIn>
        <Permissions />
      </PleaseSignIn>
    </div>
  );
}
