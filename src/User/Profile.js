import ImageProfile from "./ImageProfile"
import Wizard from "./Wizard"

function Profile() {
    return (
        <div className="flex w-screen">
            <ImageProfile />
            <Wizard />
        </div>
    )
}

export default Profile