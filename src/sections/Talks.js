import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import FontAwesomeIcon from 'react-fontawesome';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';

const MEDIUM_CDN = 'https://cdn-images-1.medium.com/max/400';
const MEDIUM_URL = 'https://medium.com';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const Post = ({ title, text, image, url, date, time }) => (
  <Card onClick={() => window.open(url, '_blank')} pb={4}>
    <EllipsisHeading m={3} p={1}>
      {title}
    </EllipsisHeading>
    {image && <CoverImage src={image} height="200px" alt={title} />}
    <Text m={3}>{text}</Text>
    <ImageSubtitle bg="primary" color="white" x="right" y="bottom" round>
      {`${date} - ${Math.ceil(time)} min`}
    </ImageSubtitle>
  </Card>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

const parsePost = author => postFromGraphql => {
  const { title, description, publishedDate, coverImage,linkBrazilian } = postFromGraphql;

  return {
    id: "x-id",
    title,
    time: 3,
    date: publishedDate,
    text: description,
    image: coverImage.image.src,
    url: linkBrazilian,
    Component: Post,
  };
};

const MorePosts = ({ username, name, number }) => (
  <Card
    onClick={() => window.open(`${MEDIUM_URL}/@${username}/`, '_blank')}
    p={4}
  >
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      style={{ height: '100%' }}
    >
      <Box>
        <EllipsisHeading fontSize={5} my={2}>
          Hooray! &nbsp;
          <span role="img" aria-label="party">
            🎉
          </span>
        </EllipsisHeading>
        <Heading lineHeight={1.5}>
          See More ..
          {/* <Text color="secondary">{name}</Text> */}
          {/* {`has published ${number} more posts!`} */}
        </Heading>
      </Box>
      <Heading color="primary" mt={5} textAlign="right">
        Go to Medium &nbsp;
        <FontAwesomeIcon name="arrow-right" aria-label="Go to Medium" />
      </Heading>
    </Flex>
  </Card>
);

MorePosts.propTypes = {
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number,
};

const edgeToArray = data => data.edges.map(edge => edge.node);

const Talks = () => (
  <StaticQuery
    query={graphql`
      query TalksQuery {
        contentfulAbout {
          talks {
            title
            description
            linkBrazilian
            linkEnglish
            readMinutes
            coverImage {
              title
              image: resize(width: 200, quality: 100) {
                src
              }
            }
            publishedDate(formatString: "YYYY")
          }
        }
      }
    `}
    render={({ contentfulAbout }) => {
      console.log(contentfulAbout)
      const posts = contentfulAbout.talks.map(parsePost("denisvieira"));

      return (
        <Section.Container id="talks" Background={Background}>
          <Section.Header name="Talks" icon="✍️" label="talks" />
          <CardContainer minWidth="300px">
            {posts.map(({ Component, ...rest }) => (
              <Fade bottom key={rest.id}>
                <Component {...rest} key={rest.id} />
              </Fade>
            ))}
          </CardContainer>
        </Section.Container>
      );
    }}
  />
);

export default Talks;
