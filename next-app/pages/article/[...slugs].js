import { useRouter } from "next/router";
import React from "react";

function Article() {
  const router = useRouter();
  const slugs = router.query.slugs || [];

  if (slugs.length > 1) {
    return <h3>This article is written by {slugs[0]}</h3>;
  }
  return (
    <div>
      <h1>Article</h1>
    </div>
  );
}

export default Article;
