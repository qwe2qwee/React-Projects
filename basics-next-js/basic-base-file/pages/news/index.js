import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      {" "}
      <h1>The News page</h1>
      <ul>
        <li>
          {" "}
          <Link href='/news/nos'>NestJs A great Framework</Link>
        </li>
        <li>
          {" "}
          Something Else
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
