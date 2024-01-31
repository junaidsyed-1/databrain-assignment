import { useEffect, useState, } from "react";
import { USER_API } from "../utils/constant";


const useCard = (onFilter) => {
    const [userInfo, setUserInfo] = useState(null);
    const [filterInfo, setFilterInfo] = useState(null);


    useEffect(() => {
        getInfo();
    }, []);

    const getInfo = async () => {
        const data = await fetch(USER_API);
        const json = await data.json();
        setUserInfo(json);
        setFilterInfo(json);
    };

    useEffect(() => {
        if (userInfo && onFilter) {
            const filteredUser = userInfo.filter((user) =>
                user.name.toLowerCase().includes(onFilter.toLowerCase())
            );
            setFilterInfo(filteredUser);
        }
    }, [userInfo, onFilter])
    return { userInfo, filterInfo, setFilterInfo };
};

export default useCard;