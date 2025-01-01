import React from "react";
import { StaticQuery, useStaticQuery } from "gatsby";
import { test, describe, expect, beforeEach, mock } from "bun:test";

import * as mocks from "@/mocks";
import { getMeta } from "@/utils/get-meta";
import { createSnapshotsRenderer, renderWithCoilProvider } from "@/utils/render-with-coil-provider";

import CategoriesTemplate, { Head as GatsbyHead } from "./categories-template";

const mockedUseStaticQuery = useStaticQuery as ReturnType<typeof mock>;
const mockedStaticQuery = StaticQuery as unknown as ReturnType<typeof mock>;

describe("CategoriesTemplate", () => {
  beforeEach(() => {
    const props = {
      ...mocks.siteMetadata,
      allMarkdownRemark: mocks.allMarkdownRemark,
    };

    mockedStaticQuery.mockImplementationOnce(({ render }) => render(props));
    mockedUseStaticQuery.mockReturnValue(props);
  });

  test("renders correctly", () => {
    const tree = createSnapshotsRenderer(<CategoriesTemplate />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("head renders correctly", () => {
    const { container } = renderWithCoilProvider(<GatsbyHead />);

    expect(getMeta(container, "twitter:card")).toEqual("summary_large_image");
    expect(getMeta(container, "twitter:title")).toEqual(
      "Categories - Blog by Rachel Le",
    );
    expect(getMeta(container, "og:title")).toEqual("Categories - Blog by Rachel Le");
    expect(getMeta(container, "description")).toEqual(
      "A cup of tea and a good book",
    );
    expect(getMeta(container, "og:description")).toEqual(
      "A cup of tea and a good book",
    );
    expect(getMeta(container, "twitter:description")).toEqual(
      "A cup of tea and a good book",
    );
  });
});
