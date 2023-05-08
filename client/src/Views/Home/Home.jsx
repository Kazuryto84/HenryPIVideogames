
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Cards from "../../Components/Cards/Cards";
import { getUsers } from "../../Redux/Actions/actions";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    },[])



    return (
        <>
            <h1>Esta es la vista de Home</h1>
            <Cards/>
        </>
    )
};

export default Home;