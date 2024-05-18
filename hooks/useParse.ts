import {useContext, useEffect, useState} from "react";
import ParseContext from "@/context/parseContext";

export function useParse() {
  const parse = useContext(ParseContext) as typeof Parse;
  const [parseUser, setParseUser] = useState<Parse.User | null>(null);
  const [isParseLoaded, setIsParseLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setParseUser(await parse.User.currentAsync());
      } catch (e) {
        console.error(e);
      } finally {
        setIsParseLoaded(true);
      }
    })();

  }, []);

  return {parse, parseUser, isParseLoaded};
}