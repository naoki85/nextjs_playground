import {Link} from "react-router-dom"

export const Top = () => {
    return (
        <div>
            <Link to={"/signup"}> 登録 </Link>
            <Link to={"/login"}> ログイン </Link>
        </div>
    );
};