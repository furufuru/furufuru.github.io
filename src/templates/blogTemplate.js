import React from "react";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="blog-post-container">
      <article className="blog-post">
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <h2 id='title'>{frontmatter.title}</h2>
          <p>{frontmatter.date}</p>
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        attachments {
          publicURL
        }
      }
    }
  }
`;
