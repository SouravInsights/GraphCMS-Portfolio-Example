import React from "react";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import { GraphQLClient } from "graphql-request";
import { Button, Flex, Box } from "@chakra-ui/core";
import GridSection from "@/components/GridSection";
import GridHeader from "components/GridHeader";
import Footer from "components/Footer";
import he from "he";
import BlogText from "@/components/BlogText";

const graphcms = new GraphQLClient(
  "https://api-ap-northeast-1.graphcms.com/v2/ckd2lanxl00w001wb9zb33zl1/master"
);

const components = {
  h2: (props) => <h2 style={{ color: "red" }} {...props} />,
  BlogText,
};

export async function getStaticProps({ params }) {
  const { story } = await graphcms.request(
    `
    query BlogPageQuery($slug: String!) {
      story(where: { slug: $slug }) {
          slug
          title
          excerpt
          coverImage {
            url
          }
          tags {
            label
          }
          content {
            markdown
          }
        }
      }
    `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      story: {
        mdx: await renderToString(
          he.decode(story.content.markdown),
          components
        ),
        ...story,
      },
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { stories } = await graphcms.request(
    `
        { 
            stories {
              slug
              title
            }
        }
      `
  );
  return {
    paths: stories.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

const BlogPage = ({ story }) => {
  return (
    <>
      <Box color="white">
        <GridSection bg="white">
          <GridHeader heading={story.title} />
          <h2>{story.title}</h2>
          {hydrate(story.mdx, components)}
        </GridSection>
      </Box>
      <Footer />
    </>
  );
};

export default BlogPage;
