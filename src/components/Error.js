import { useRouterError} from "react-router-dom";

const Error = () => {
    const err = useRouterError();
  return (
    <div>
      <h1>oooops! get away!</h1>
    </div>
  )
}

export default Error;
