import React, { Component, useState, useEffect } from "react";

export const DataReceiver: React.FC<{}> = () => {
  const [data, setData] = useState<string>();

  useEffect(() => {
    fetch("https://jwdpdsnge0.execute-api.ap-southeast-2.amazonaws.com/dev")
      .then((response) => response.json())
      .then((response) => setData(response["body"]));
  });

  return <p>{data}</p>;
};
