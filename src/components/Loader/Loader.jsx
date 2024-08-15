import { LineWave } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  render(
    <div className={s.backdrop}>
      <LineWave
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
};
export default Loader;
