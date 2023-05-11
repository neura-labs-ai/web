import { FC } from "react";

interface ContentBodyProps {
  children?: React.ReactNode;
}

const DocsBody: FC<ContentBodyProps> = ({ children }) => {
  return (
    <>
      <div
        className={`py-5 flex flex-col items-center justify-center w-full h-full`}
      >
        <div className="prose md:prose-lg lg:prose-xl prose-zinc">
          {children}
        </div>
      </div>
    </>
  );
};

export default DocsBody;
