import { FC } from "react";
import HelloWorld from "../content/hello.mdx";
import DocsBody from "@/components/ui/DocsBody";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <div className="bg-white">
        <DocsBody>
          <HelloWorld />
        </DocsBody>
      </div>
    </>
  );
};

export default page;
