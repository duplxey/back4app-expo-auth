import {createContext} from "react";

const ParseContext = createContext<typeof Parse | null>(null);

export default ParseContext;