import {Spin} from 'antd';
import styles from "./Loader.module.scss"
function Loader() {
    return (
        <div className={styles.loader}>
            <Spin size = "large"/>
        </div>
    );
}
export default Loader;