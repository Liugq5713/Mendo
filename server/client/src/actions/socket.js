import io from "socket.io-client";
import { socketIP } from "../config/socket";

export default io(socketIP);
