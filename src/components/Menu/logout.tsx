import styles from "./Menu.module.scss";
import {Link} from "react-router-dom";
import {Path} from "../../constants/path/path";
import {PathImg} from "../../constants/path/parh-images";
import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {fetchLogout} from "../../Redux/usersReducer/actions";


function Logout(){
    const dispatch = useDispatch();
    function HandlerLogout () {
        dispatch(fetchLogout());
    }
    useEffect(
        () => {
        }, [localStorage]);
    const {t} = useTranslation();
    return(
        <div className={styles.logout} onClick={HandlerLogout}>
            <Link to={Path.LOGIN}>
                <img src={PathImg.LOGOUT} alt={t("logout")} title={t("logout")}/>
            </Link>
        </div>
    )
}
export default Logout;