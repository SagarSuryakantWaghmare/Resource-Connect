import Cookies from "js-cookie";

export default function checkLogin(navigate) {
    if (!Cookies.get("accessToken")) {
        navigate("/login");
    }
    return;
}