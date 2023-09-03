import Navbar from "../../Components/Navbar/Navbar";

const Welcome = () => {

  const renderComponent = () => {
    return(
      <>
        <Navbar/>
        <h1>welcome page</h1>
      </>
    )
  }

  return renderComponent();
}

export default Welcome