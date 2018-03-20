import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => {
  const articleEdges = data.allMarkdownRemark.edges
  return (
  	<div>
  		{ articleEdges.map( node => {
  			const { date, path, title } = node.node.frontmatter
  			return (
  			<article key={node.id}>
  			  <h2><Link style={{ color: '#000' }} to={path + '#title'}>{ title }</Link></h2>
  			  <p>posted on { date }</p>
  			</article>
  			)
  		}) }
  	</div>
  )
}

export default IndexPage

export const query = graphql`
  query BlogPages {
     allMarkdownRemark(
       sort: { order: DESC, fields: [frontmatter___date] }
       limit: 1000
     ) {
       edges {
         node {
           frontmatter {
             path
             date
             title
           }
         }
       }
     }
   }
`;
