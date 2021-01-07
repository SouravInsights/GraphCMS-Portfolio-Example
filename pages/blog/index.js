import { Flex, Heading, Box, Grid, Button, Text, Image } from "@chakra-ui/core";
import React from "react";
import Footer from "components/Footer";
import Link from "next/link";
import { GraphQLClient } from "graphql-request";
import GridSection from "@/components/GridSection";
import GridCard from "components/GridCard";
import GridHeader from "components/GridHeader";
import GridCardSection from "@/components/GridCardSection";
import { TextButton } from "components/Buttons";

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    "https://api-ap-northeast-1.graphcms.com/v2/ckd2lanxl00w001wb9zb33zl1/master"
  );

  const { stories } = await graphcms.request(
    `
        { 
          stories {
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
      `
  );

  return {
    props: {
      stories,
    },
    revalidate: 1,
  };
}

const Blog = ({ stories }) => {
  return (
    <GridSection>
      <GridHeader title="THOUGHTS" heading="Thoughts and Insights" />
      <GridCardSection
        columns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        bg="gray.100"
      >
        {stories.map((story) => (
          <GridCard
            size={["2xl", "2xl", "3xl", "4xl"]}
            color="cyan.50"
            cardheading={story.title}
            carddescription={story.desc}
            //src={story.coverImage.url}
            alt={story.slug}
            iconheight="200px"
          >
            <TextButton
              key={story.slug}
              href={`/blog/${story.slug}`}
              text="Read More"
            />
          </GridCard>
        ))}
      </GridCardSection>
    </GridSection>
  );
};

export default Blog;
