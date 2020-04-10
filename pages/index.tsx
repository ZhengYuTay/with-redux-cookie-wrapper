import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { iRootState, Dispatch } from "../store/store";
interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const count = useSelector((state: iRootState) => state.counter);
  const config = useSelector((state: iRootState) => state.config);
  const dispatch = useDispatch<Dispatch>();
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch.counter.increment(1);
        }}
      >
        Add count
      </button>

      <div>
        Note: notice how the count is not persist by the server but the config
        is
      </div>

      <button
        onClick={() => {
          dispatch.config.updateConfig({
            count: config.count + 1,
          });
        }}
      >
        update config count
      </button>
      <pre>{JSON.stringify(config)}</pre>
    </div>
  );
};

export default Home;
