import { useParams } from "react-router-dom";
import CarroselHome from "../components/CarroselListPAge";

export default function ListPage(){
    const { id } = useParams();

    return (
    <>
        <CarroselHome
            id={id}
        />
    </>
    )
}