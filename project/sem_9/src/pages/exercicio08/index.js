import DownloadSoftware from "../exercicio07";

import React from "react";

const downloads = [
  {
    id: 1,
    name: "youtube",
    size: 100,
  },
  {
    id: 2,
    name: "gmail",
    size: 50,
  },
  {
    id: 3,
    name: "spotify",
    size: 200,
  },
];

export default function Exercicio08() {
  return (
    <div>
      {downloads.map((download) => {
        return <DownloadSoftware key={download.id} download={download} />;
      })}
    </div>
  );
}
