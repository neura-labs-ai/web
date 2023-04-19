import { JsonSearchData } from "@/lib/data";
import Link from "next/link";
import { FC } from "react";

interface LibraryTableProps {
  data: JsonSearchData;
}

const LibraryTable: FC<LibraryTableProps> = ({ data }) => {
  console.log(data);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th className={"text-2xl"}>Available library&apos;s</th>
          </tr>
        </thead>
        <tbody>
          {data.length ? (
            data.map((lib) => (
              <tr key={lib.id}>
                {/* @ts-ignore - todo fix type error */}
                <Link href={`/search/${lib.id}`}>
                  <td>{lib.name}</td>
                </Link>
              </tr>
            ))
          ) : (
            <tr>
              <td>No library&apos;s found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default LibraryTable;
