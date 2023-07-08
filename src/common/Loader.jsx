import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { ContainerLoader, Spinner } from "../styled/common/loader.styles";

export const Loader = () => {

  const { isLoading } = useContext(MainContext);

  return (
    <ContainerLoader isLoading={isLoading}>
      <Spinner/>
      <h2>Loading...</h2>
    </ContainerLoader>
  )
};