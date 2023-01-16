import { getQuestionsList } from "@/utils/controllers";
import { getServerSideSitemap } from "next-sitemap";

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps(ctx) {
  // We make an API call to gather the URLs for our site
  const { data: questions } = await getQuestionsList("");
  // We generate the XML sitemap with the questions data
  const fields = questions.map(({ QID }) => ({
    loc: `${process.env.SITE_URL}/questions/${QID}`,
    lastmod: new Date().toISOString(),
  }));
  return getServerSideSitemap(ctx, fields);
}

export default SiteMap;
