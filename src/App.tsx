import Box from "@mui/material/Box";
import { useQuery } from "@tanstack/react-query";
import { api } from "./api/api";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  useState,
} from "react";

export default function CustomComponent() {
  const query = useQuery({
    queryKey: ["getSport"],
    queryFn: () =>
      api.get("/", {
        params: { all: "true" },
      }),
  });
  const [data, setData] = useState("");
  console.log("query111", query, import.meta.env);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "72px auto",
        width: "100%", // 100% of the viewport width
        height: "100dvh", // 100% of the viewport height
      }}
    >
      <Box sx={{ background: "green" }}></Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "360px auto",
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ background: "red" }}></Box>
        <Box
          sx={{
            background: "blue",
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: "240px auto",
          }}
        >
          <Box sx={{ background: "yellow" }}>
            <h1>{data}</h1>
          </Box>
          <Box sx={{ background: "purple" }}>
            {query?.data?.data.map(
              (odd: {
                key: Key | null | undefined;
                title:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
                description:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
                group:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
              }) => {
                return (
                  <Box key={odd.key} onClick={() => setData(odd.title)}>
                    <Box>{odd.title}</Box>
                    <Box>{odd.description}</Box>
                    <Box>{odd.group}</Box>
                  </Box>
                );
              }
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
