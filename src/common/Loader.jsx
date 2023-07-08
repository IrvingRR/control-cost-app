import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { ContainerLoader, Spinner } from "../styled/common/loader.styles";

/**
 * This is a reusable component to display a loader screen
 */

export const Loader = () => {

  const { isLoading } = useContext(MainContext);

  return (
    <ContainerLoader loading={isLoading.toString()}>
      <Spinner/>
      <h2>Loading...</h2>
    </ContainerLoader>
  )
};